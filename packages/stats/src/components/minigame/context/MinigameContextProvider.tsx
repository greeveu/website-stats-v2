import React, { ReactNode, useContext, useEffect, useState } from 'react';
import knockpvp_lab from 'resources/minigames/featured/media/knockpvp_lab.jpg';
import { Context, globalContext } from 'components/context/ContextProvider';
import { makeAutoObservable, reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { MinigameNetworkRequest } from 'lib/MinigameNetworkRequest';
import {
	ApiType,
	MinigameGroup,
	MinigameType,
	SingleMinigame,
	MultiMinigame,
} from 'resources/minigames/minigames.types.ts';

interface MinigameContextProps {
	minigame: SingleMinigame | MultiMinigame;
	group: MinigameGroup | null;
	children: ReactNode;
}

export class MinigameContext {
	/**
	 * Do NOT do network or context stuff in dummy mode
	 * @private
	 */
	public dummy: boolean;
	public network: null | MinigameNetworkRequest = null;
	public readonly config: SingleMinigame | MultiMinigame;
	public readonly group: MinigameGroup | null;
	private readonly context: Context;

	public offset: number = 0;
	public options: Record<string, string> = {};

	private debounce: number | null = null;

	constructor(props: {
		config: SingleMinigame | MultiMinigame;
		group: MinigameGroup | null;
		dummy: boolean;
		context: Context;
	}) {
		makeAutoObservable(this);
		this.config = props.config;
		this.group = props.group;
		this.dummy = props.dummy;
		this.context = props.context;

		/**
		 * Populate options with initial states
		 */
		if (props.config.api.options) {
			Object.entries(props.config.api.options).forEach(([key, value]) => {
				this.options[key] = value.default;
			});
		}

		reaction(() => {
			return {
				offset: this.offset,
				options: JSON.stringify(this.options),
			};
		}, this.autoRun.bind(this));

		this.autoRun();
	}

	autoRun() {
		if (this.debounce !== null) {
			clearTimeout(this.debounce);
		}

		this.debounce = setTimeout(() => {
			this.fetch();
		}, 50) as unknown as number;
	}

	private fetch(): void {
		if (this.dummy) {
			return;
		}

		let url = this.config.api.endpoint;
		Object.entries(this.options).forEach(([key, value]) => {
			url = url.replace(`:${key}`, value);
		});

		this.network = new MinigameNetworkRequest({
			url: url,
			context: this.context,
			offset: this.offset,
			type: this.config.api.type,
		});
	}
}

const minigame: SingleMinigame = {
	type: MinigameType.Minigame,
	link: 'lab',
	title: 'KnockPvP Lab',
	image: knockpvp_lab,
	api: {
		type: ApiType.Normal,
		data: {},
		endpoint: '',
	},
};

const defaultContext = new MinigameContext({
	config: minigame,
	group: null,
	dummy: true,
	context: {} as Context,
});
export const minigameContext =
	React.createContext<MinigameContext>(defaultContext);

export const MinigameContextProvider: React.FunctionComponent<MinigameContextProps> =
	observer((props) => {
		const global = useContext(globalContext);
		const [context, setContext] = useState(defaultContext);

		useEffect(() => {
			setContext(
				new MinigameContext({
					config: props.minigame,
					group: props.group,
					dummy: false,
					context: global,
				}),
			);
		}, [props.minigame, global, props.group]);

		if (context.dummy) {
			return null;
		}

		return (
			<minigameContext.Provider value={context}>
				{props.children}
			</minigameContext.Provider>
		);
	});

import React, {ReactNode, useContext, useEffect, useState} from 'react';
import {Group, SingleMinigame, Type} from 'minigames';
import knockpvp_lab from 'media/minigames/knockpvp_lab.jpg';
import {Context, globalContext} from 'components/context/ContextProvider';
import {makeAutoObservable, reaction} from 'mobx';
import {NetworkRequest} from 'lib/NetworkRequest';
import {config} from 'config';
import {observer} from 'mobx-react-lite';

interface MinigameContextProps
{
	minigame: SingleMinigame;
	children: ReactNode;
}

export class MinigameContext
{
	/**
	 * Do NOT do network or context stuff in dummy mode
	 * @private
	 */
	public dummy: boolean;
	public network: null | NetworkRequest<any> = null;
	public readonly config: SingleMinigame;
	private readonly context: Context;

	public offset: number = 0;
	public options: Record<string, string> = {};

	private debounce: NodeJS.Timeout | null = null;

	constructor(props: { config: SingleMinigame, dummy: boolean, context: Context })
	{
		makeAutoObservable(this);
		this.config = props.config;
		this.dummy = props.dummy;
		this.context = props.context;

		/**
		 * Populate options with initial states
		 */
		if (props.config.api?.options)
		{
			Object.entries(props.config.api.options).forEach(([key, value]) =>
			{
				this.options[key] = value.default;
			});
		}

		reaction(() =>
		{
			return {offset: this.offset, options: JSON.stringify(this.options)};
		}, this.autoRun.bind(this));

		this.autoRun();
	}

	autoRun()
	{
		if (this.debounce !== null)
		{
			clearTimeout(this.debounce);
		}

		this.debounce = setTimeout(() =>
		{
			this.fetch();
		}, 50);
	}

	private fetch(): void
	{
		if (this.dummy)
		{
			return;
		}

		let url = `${config.endpoint}${this.config.api?.endpoint}?offset=${this.offset * config.defaultLimit}&amount=${config.defaultLimit}`;
		Object.entries(this.options).forEach(([key, value]) =>
		{
			url = url.replace(`:${key}`, value);
		});

		this.network = new NetworkRequest(url, undefined, {
			context: this.context,
		});
	}
}

const minigame: SingleMinigame = {
	type: Type.Minigame,
	link: 'lab',
	title: 'KnockPvP Lab',
	image: knockpvp_lab,
	fields: [],
	group: Group.Minigames,
};

const defaultContext = new MinigameContext({config: minigame, dummy: true, context: {} as Context});
export const minigameContext = React.createContext<MinigameContext>(defaultContext);

export const MinigameContextProvider: React.FunctionComponent<MinigameContextProps> = observer((props) =>
{
	const global = useContext(globalContext);
	const [context, setContext] = useState(defaultContext);

	useEffect(() =>
	{
		setContext(new MinigameContext({config: props.minigame, dummy: false, context: global}));
	}, [props.minigame]);

	if (context.dummy)
	{
		return null;
	}

	return (
		<minigameContext.Provider value={context}>
			{props.children}
		</minigameContext.Provider>
	);
});

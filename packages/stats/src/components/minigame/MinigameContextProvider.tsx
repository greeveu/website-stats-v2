import React, {ReactNode, useContext, useEffect, useMemo, useState} from 'react';
import {Group, minigames, SingleMinigame, Type} from 'minigames';
import knockpvp_lab from 'media/minigames/knockpvp_lab.jpg';
import {Context, globalContext} from 'components/context/ContextProvider';
import {makeAutoObservable} from 'mobx';
import {NetworkRequest} from 'lib/NetworkRequest';
import {useCurrentPage} from 'hooks/useCurrentPage';
import {config} from 'config';

interface MinigameContextProps
{
	minigame: SingleMinigame;
	children: ReactNode;
}

export class MinigameContext
{
	/**
	 * Do not DO network or context stuff in dummy mode
	 * @private
	 */
	private dummy: boolean;
	public config: SingleMinigame;
	private context: Context;
	public network: null | NetworkRequest<any> = null;

	constructor(props: { config: SingleMinigame, dummy: boolean, context: Context })
	{
		makeAutoObservable(this);
		this.config = props.config;
		this.dummy = props.dummy;
		this.context = props.context;
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

export const MinigameContextProvider: React.FunctionComponent<MinigameContextProps> = (props) =>
{
	const global = useContext(globalContext);
	const [context, setContext] = useState(defaultContext);
	const current = useCurrentPage();

	useEffect(() =>
	{
		setContext(new MinigameContext({config: props.minigame, dummy: false, context: global}));
	}, [props.minigame]);

	useEffect(() =>
	{
		context.network = new NetworkRequest(`${config.endpoint}${props.minigame.api?.endpoint}?offset=${current.offset}&amount=${config.defaultLimit}`, undefined, {
			context: global,
		});
	}, [context, current.offset, props.minigame]);

	return (
		<minigameContext.Provider value={context}>
			{props.children}
		</minigameContext.Provider>
	);
};

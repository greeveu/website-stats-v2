import {Typography} from 'antd';
import React from 'react';
import style from './display.module.sass';
import {PlayerSearchStatus, PlayerSearchState} from 'components/searchbar/player/PlayerSearch';

interface PlayerDisplayProps
{
	state:  PlayerSearchState
}

/**
 * Display the results of a player search
 * @param props
 * @constructor
 */
export const Display: React.FunctionComponent<PlayerDisplayProps> = (props) =>
{
	const state = (() =>
	{
		switch (props.state.status)
		{
			case PlayerSearchStatus.Success:

				const joined = (() => {
					if(props.state.data.firstOnline === 0){
						return "Never joined"
					}
					const date = new Date()
					date.setTime(props.state.data.firstOnline * 1000)
					return `Joined ${date.toLocaleDateString("uk-Uk")}`
				})()

				return {
					skin: props.state.data.uuid,
					name: props.state.data.name,
					nameDisabled: false,
					joined: joined,
					joinedDisabled: props.state.data.firstOnline === 0,
				};
			case PlayerSearchStatus.Invalid:
				return {
					skin: "MHF_Enderman",
					name: props.state.data.name.substring(0, 16),
					nameDisabled: true,
					joined: 'Does not exist',
					joinedDisabled: true,
				};
			case PlayerSearchStatus.Loading:
				return {
					skin: "MHF_Enderman",
					name: 'Loading...'.substring(0, 16),
					nameDisabled: true,
					joined: 'Loading...',
					joinedDisabled: true,
				};
			case PlayerSearchStatus.Error:
				return {
					skin: "404",
					name: 'Error',
					nameDisabled: true,
					joined: 'A network error occurred',
					joinedDisabled: true,
				};
			default:
				return {
					skin: "MrKavatch",
					name: 'MrKavatch'.substring(0, 16),
					nameDisabled: true,
					joined: 'Awaiting input...',
					joinedDisabled: true,
				};
		}
	})();

	return (
		<div className={style.root}>

			<div style={{backgroundImage: `url(https://minotar.net/bust/${state.skin})`}} className={style.img}/>

			<div>
				<Typography.Title level={4} disabled={state.nameDisabled}>{state.name}</Typography.Title>
			</div>

			<div>
				<Typography.Text disabled={state.joinedDisabled}>{state.joined}</Typography.Text>
				<img className={style.preload} src={"https://minotar.net/bust/MHF_Enderman"} alt={"Preloaded image"}/>
				<img className={style.preload} src={"https://minotar.net/bust/MrKavatch"} alt={"Preloaded image"}/>
			</div>
		</div>
	);
};
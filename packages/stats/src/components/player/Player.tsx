import React from 'react';
import {Link} from 'react-router-dom';
import style from './player.module.sass';
import {Typography} from 'antd';

interface PlayerProps
{
	name: string,
}

export const Player: React.FunctionComponent<PlayerProps> = (props) =>
{
	return (
		<div className={style.root}>
			<Link
				to={`/player/${props.name}`}
			>
				<img
					src={`https://minotar.net/avatar/${props.name}/25.png`}
					alt={props.name}
				/>
			</Link>
			<Link
				to={`/player/${props.name}`}
			>
				<Typography.Text>
					{props.name}
				</Typography.Text>
			</Link>
		</div>
	);
};

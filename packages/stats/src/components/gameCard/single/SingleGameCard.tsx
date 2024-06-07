import React from 'react';
import style from './singleGameCard.module.sass';
import sharedStyle from '../gameCard.module.sass';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { SingleMinigame } from 'resources/minigames/minigames.types.ts';

interface SingleGameCardProps {
	minigame: SingleMinigame;
}

/**
 * Game card for a single game without any sub games
 * @param props
 * @constructor
 */
export const SingleGameCard: React.FunctionComponent<SingleGameCardProps> = (
	props,
) => {
	return (
		<Link to={`/minigame/${props.minigame.link}/`}>
			<div className={style.root}>
				<div
					className={style.background}
					style={{
						backgroundImage: `url("${props.minigame.image}")`,
					}}
				/>
				<div className={sharedStyle.blur}>
					<div className={sharedStyle.darken} />
					<Typography.Title className={sharedStyle.title}>
						{props.minigame.title}
					</Typography.Title>
				</div>
			</div>
		</Link>
	);
};

import React, { useMemo } from 'react';
import style from './singleGameCard.module.sass';
import sharedStyle from '../gameCard.module.sass';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Group, SingleMinigame } from '../../../resources/minigames';

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
	const link = useMemo(() => {
		if (props.minigame.group === Group.Misc) {
			return `/misc/${props.minigame.link}/`;
		}

		return `/minigame/${props.minigame.link}/`;
	}, [props.minigame.link, props.minigame.group]);

	return (
		<Link to={link}>
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

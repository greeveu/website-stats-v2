import React from 'react';
import style from './singleGameCard.module.sass';
import sharedStyle from '../gameCard.module.sass';
import {Typography} from 'antd';
import {Link} from 'react-router-dom';

interface SingleGameCardProps
{
	title: string,
	image: string,
	link: string,
}

/**
 * Game card for a single game without any sub games
 * @param props
 * @constructor
 */
export const SingleGameCard: React.FunctionComponent<SingleGameCardProps> = (props) =>
{
	return (
		<Link to={`/minigame/${props.link}/`}>
			<div
				className={style.root}
			>
				<div
					className={style.background}
					style={{backgroundImage: `url("${props.image}")`}}
				/>
				<div className={sharedStyle.blur}>
					<div className={sharedStyle.darken} />
					<Typography.Title className={sharedStyle.title}>
						{props.title}
					</Typography.Title>
				</div>
			</div>
		</Link>
	);
};

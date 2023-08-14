import React from 'react';
import uhc from 'media/uhc.jpg';
import style from './gameCard.module.sass';
import {Typography} from 'antd';

interface GameCardProps
{

}

const game = {
	title: 'UHC',
	searchImage: uhc,
};

/**
 * Grid leuchten mit offset?
 * @param props
 * @constructor
 */

export const GameCard: React.FunctionComponent<GameCardProps> = (props) =>
{
	return (
		<div
			className={style.root}
			style={{backgroundImage: `url("${game.searchImage}")`}}
		>
			<div className={style.content}>
				<div className={style.blur}>

				</div>
				<Typography.Title className={style.title}>
					KnockPvP / FFA / Lab
				</Typography.Title>
			</div>
		</div>
	);
};

import React from 'react';
import style from "./singleGameCard.module.sass"
import {Typography} from 'antd';
import image from "./performance.jpg"

interface SingleGameCardProps
{

}

export const SingleGameCard: React.FunctionComponent<SingleGameCardProps> = (props) =>
{
	return (
		<div
			className={style.root}
		>
			<div className={style.background} style={{backgroundImage: `url("${image}")`}}/>
			<div className={style.blur}>
				<div className={style.darken} />
				<Typography.Title className={style.title}>
					Performance
				</Typography.Title>
			</div>
		</div>
	);
};

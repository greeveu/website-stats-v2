import React, {useEffect, useRef, useState} from 'react';
import uhc from 'media/uhc.jpg';
import style from './gameCard.module.sass';
import singleStyle from './singleGameCard/singleGameCard.module.sass';
import {Typography} from 'antd';
import image1 from './temp/fastbridge.jpg';
import image2 from './temp/fastbridge_inclined.jpg';
import image3 from './temp/fastbridge_inclined_short.jpg';
import image4 from './temp/fastbridge_islands.jpg';
import image5 from './temp/fastbridge_short.jpg';
import image6 from './temp/fastbridge_staircase.jpg';

const images = [image1, image2, image3, image4, image5, image6];
const names = ['Normal', 'Island', 'Inclined', 'Short', 'Inclined Short', 'Staircase'];

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

	const [text, setText] = useState('6 Gamemodes');
	const counter = useRef(10);

	const getClipPath = (index: number, length: number) =>
	{
		const generalOffset = 2; // General horizontal offset so it looks better
		const verticalOffset = -5; // P3 and P4 offset
		const antiAliasing = 0.2; // P2 and P3 offset do circumvent aliasing
		const section = 1 / length;

		let p1 = (section * index) * 100 + generalOffset;
		const p2 = (section * (index + 1)) * 100 + generalOffset + antiAliasing;
		let p3 = (section * (index + 1)) * 100 + generalOffset + verticalOffset + antiAliasing;
		const p4 = (section * index) * 100 + generalOffset + verticalOffset;

		if (index === 0)
		{
			p1 = 0;
		}

		if (index + 1 === length)
		{
			p3 = 100;
		}

		return `polygon(${p1}% 0%, ${p2}% 0%, ${p3}% 100%, ${p4}% 100%)`;
	};

	return (
		<div
			className={style.root}
			onMouseLeave={() =>
			{
				setText('6 Gamemodes');
			}}
		>
			{
				images.map((image, key) =>
				{

					return (
						<div
							key={key}
							className={style.item}
						>
							<div
								className={style.hitbox}
								style={{
									clipPath: getClipPath(key, 6),
								}}
								onMouseOver={(event) =>
								{
									counter.current++;
									// @ts-ignore
									event.target.parentElement.style.zIndex = counter.current;
									setText(names[key]);
								}}
							/>
							<div
								className={style.image}
								style={{
									backgroundImage: `url("${image}")`,
									clipPath: getClipPath(key, 6),
								}}
							/>
						</div>
					);
				})
			}
			<div className={style.overlay}>
				<div className={singleStyle.blur}>
					<div className={singleStyle.darken} />
					<Typography.Title className={singleStyle.title}>
						Fastbridges
					</Typography.Title>
					<Typography.Text className={style.text}>
						{text}
					</Typography.Text>
				</div>
			</div>
		</div>
	);
};

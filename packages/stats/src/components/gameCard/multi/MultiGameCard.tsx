import React, {useCallback, useMemo, useRef, useState} from 'react';
import style from 'components/gameCard/multi/multiGameCard.module.sass';
import sharedStyle from '../gameCard.module.sass';
import {Typography} from 'antd';

interface Minigame
{
	/**
	 * Gets highlighted in the subtitle and gets a special glow
	 */
	highlight: boolean,
	/**
	 * Subtitle which replaces the cards subtitle on hover
	 */
	subTitle: string,
	image: string,
	href: string,
}

interface GameCardProps
{
	/**
	 * Main title of the card
	 */
	title: string,
	/**
	 * Initial sub title, gets overridden by on hover
	 */
	subTitle: string,
	/**
	 * Sub minigames of the card
	 */
	minigames: Minigame[]
}

/**
 * Generates parallelogram clip paths
 * @param index Current index of item
 * @param length Max amount of item
 */
const generateClipPath = (index: number, length: number) =>
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

/**
 * Game card for a group of games, allows for direct selection of sub games
 * @param props
 * @constructor
 */
export const MultiGameCard: React.FunctionComponent<GameCardProps> = (props) =>
{
	// Generate a default title, depending on highlighted items
	const defaultTitle = useMemo(() => {

		const highlighted = props.minigames.filter((item) => {
			return item.highlight;
		})

		if(highlighted.length === 0){
			return props.subTitle
		}

		if(highlighted.length === 1){
			return ` ${highlighted[0].subTitle}  Mode`
		}

		if(highlighted.length === 2){
			return `${highlighted[0].subTitle} & ${highlighted[1].subTitle}`
		}

		return props.subTitle
	}, [props.minigames, props.subTitle])

	/**
	 * zIndex to allow for smooth animation stacking
	 */
	const zIndexCounter = useRef(10);
	const [overrideSubTitle, setOverrideSubTitle] = useState<string | null>(null);
	const subTitle = overrideSubTitle || defaultTitle;

	const onMouseLeave = useCallback(() =>
	{
		setOverrideSubTitle(null);
	}, []);

	return (
		<div
			className={style.root}
			onMouseLeave={onMouseLeave}
		>
			{
				props.minigames.map((minigame, key) =>
				{
					return (
						<div
							key={key}
							className={minigame.highlight ? style.highlighted : style.item}
						>
							<div
								className={style.hitbox}
								style={{
									clipPath: generateClipPath(key, props.minigames.length),
								}}
								onMouseOver={(event) =>
								{
									zIndexCounter.current++;

									// @ts-ignore
									event.target.parentElement.style.zIndex = zIndexCounter.current;
									setOverrideSubTitle(minigame.subTitle);
								}}
							/>
							<div
								className={style.image}
								style={{
									backgroundImage: `url("${minigame.image}")`,
									clipPath: generateClipPath(key, props.minigames.length),
								}}
							/>
						</div>
					);
				})
			}
			<div className={style.overlay}>
				<div className={sharedStyle.blur}>
					<div className={sharedStyle.darken} />
					<Typography.Title className={sharedStyle.title}>
						{props.title}
					</Typography.Title>
					<Typography.Text className={style.text}>
						{subTitle}
					</Typography.Text>
				</div>
			</div>
		</div>
	);
};

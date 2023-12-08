import React from 'react';
import { ContentSpacing } from 'components/layout/contentSpacing/ContentSpacing';
import { Group, minigames, Type } from 'minigames';
import { SingleGameCard } from 'components/gameCard/single/SingleGameCard';
import { MultiGameCard } from 'components/gameCard/multi/MultiGameCard';
import { Divider, Typography } from 'antd';
import style from './homePage.module.sass';

const renderMinigames = (group: Group) => {
	const filtered = minigames.filter((item) => {
		return item.group === group;
	});

	return filtered.map((item, key) => {
		const className =
			filtered.length % 2 === 1 && key === 0
				? style.oddMinigame
				: style.minigame;

		if (item.type === Type.Minigame) {
			return (
				<div className={className} key={item.title}>
					<SingleGameCard minigame={item} />
				</div>
			);
		}
		return (
			<div className={className} key={item.title}>
				<MultiGameCard
					title={item.title}
					subTitle={item.subTitle}
					link={item.link}
					minigames={item.minigames.map((item) => {
						return {
							link: item.link,
							image: item.image,
							subTitle: item.subtitle,
							highlight: false,
						};
					})}
				/>
			</div>
		);
	});
};

export const HomePage: React.FunctionComponent = () => {
	return (
		<div>
			<ContentSpacing>
				<div>
					<div className={style.group}>
						<Typography.Title level={2}>Featured</Typography.Title>
						<Divider />
						<div className={style.container}>
							{renderMinigames(Group.Featured)}
						</div>
					</div>
					<div className={style.group}>
						<Typography.Title level={2}>Minigames</Typography.Title>
						<Divider />
						<div className={style.container}>
							{renderMinigames(Group.Minigames)}
						</div>
					</div>

					<div className={style.group}>
						<Typography.Title level={2}>Misc</Typography.Title>
						<Divider />
						<div className={style.container}>
							{renderMinigames(Group.Misc)}
						</div>
					</div>
				</div>
			</ContentSpacing>
		</div>
	);
};

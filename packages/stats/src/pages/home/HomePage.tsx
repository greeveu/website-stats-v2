import React from 'react';
import { ContentSpacing } from 'components/layout/contentSpacing/ContentSpacing';
import { SingleGameCard } from 'components/gameCard/single/SingleGameCard';
import { MultiGameCard } from 'components/gameCard/multi/MultiGameCard';
import { Divider, Typography } from 'antd';
import style from './homePage.module.sass';
import {
	MinigameSchema,
	MinigameType,
} from 'resources/minigames/minigames.types.ts';
import { featuredSchema } from 'resources/minigames/featured/featured.schema.ts';
import { miscSchema } from 'resources/minigames/misc/misc.schema.ts';
import { defaultSchema } from 'resources/minigames/default/default.schema.ts';
import { observer } from 'mobx-react-lite';

const renderMinigames = (schema: MinigameSchema) => {
	return schema.map((item, key) => {
		const className =
			schema.length % 2 === 1 && key === 0
				? style.oddMinigame
				: style.minigame;

		if (item.type === MinigameType.Minigame) {
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

export const HomePage: React.FunctionComponent = observer(() => {
	return (
		<div>
			<ContentSpacing>
				<div>
					<div className={style.group}>
						<Typography.Title level={2}>Featured</Typography.Title>
						<Divider />
						<div className={style.container}>
							{renderMinigames(featuredSchema)}
						</div>
					</div>
					<div className={style.group}>
						<Typography.Title level={2}>Minigames</Typography.Title>
						<Divider />
						<div className={style.container}>
							{renderMinigames(defaultSchema)}
						</div>
					</div>

					<div className={style.group}>
						<Typography.Title level={2}>Misc</Typography.Title>
						<Divider />
						<div className={style.container}>
							{renderMinigames(miscSchema)}
						</div>
					</div>
				</div>
			</ContentSpacing>
		</div>
	);
});

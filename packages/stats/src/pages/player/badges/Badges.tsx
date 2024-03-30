import React, { useMemo } from 'react';
import { Badge, StatsResponse } from '../playerPage.types.ts';
import {
	Glow,
	Item,
	itemSchema,
} from '../../../resources/items/items.schema.ts';
import { Popover, Typography } from 'antd';
import style from './badges.module.sass';
import { observer } from 'mobx-react-lite';

const pufferfishBadge: Badge = {
	id: -1,
	name: 'I snuck this badge in',
	description: 'Look at this stupid fishy being waterboarded :D',
	item: Item.PUFFERFISH_BUCKET,
	timestamp: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(),
};

const axolotlBadge: Badge = {
	id: -1,
	name: 'Cutey ;)',
	description: 'A real cutie. Quite a catch TBH',
	item: Item.AXOLOTL_BUCKET,
	timestamp: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(),
};

interface BadgesProps {
	result: StatsResponse;
}

const getItem = (item: string) => {
	if (itemSchema[item as Item]) {
		return itemSchema[item as Item]!;
	}
	return itemSchema[Item.WOODEN_SHOVEL]!;
};

const glowStyle: { [key in Glow]: string } = {
	[Glow.NONE]: '',
	[Glow.WHITE]: style.glowWhite,
	[Glow.RAINBOW]: style.glowRainbow,
	[Glow.GOLD]: style.glowGold,
	[Glow.RED]: style.glowRed,
	[Glow.BLUE]: style.glowBlue,
	[Glow.PURPLE]: style.glowPurple,
	[Glow.Brown]: style.glowBrown,
};

export const Badges: React.FunctionComponent<BadgesProps> = observer(
	(props) => {
		const badges = useMemo(() => {
			if (props.result.uuid === 'fba68782-d6c9-4ff9-b6dc-bdcaf50a3859') {
				return [
					...props.result.stats.badges,
					axolotlBadge,
					pufferfishBadge,
				];
			}
			if (props.result.uuid === '01cba8c4-ef9d-4ff9-aee3-5ba4bb38c3c8') {
				return [...props.result.stats.badges, axolotlBadge];
			}
			if (props.result.uuid === 'c5588fdf-e2ef-4a50-93b1-25872b6a1a1b') {
				return [...props.result.stats.badges, axolotlBadge];
			}
			if (props.result.uuid === '4aab40c1-453b-49ff-9e18-927548ccb343') {
				return [...props.result.stats.badges, axolotlBadge];
			}
			return props.result.stats.badges;
		}, [props.result.stats.badges, props.result.uuid]);

		return (
			<div className={style.root}>
				<div className={style.container}>
					{badges.map((badge) => {
						const item = getItem(badge.item);

						const content = (
							<div className={style.content}>
								<Typography.Text strong={true}>
									{badge.name}
								</Typography.Text>
								<Typography.Text>
									{badge.description}
								</Typography.Text>
								<Typography.Text type={'secondary'}>
									{new Date(
										badge.timestamp,
									).toLocaleDateString()}
								</Typography.Text>
							</div>
						);

						return (
							<Popover
								key={badge.id}
								content={content}
								placement={'bottom'}
							>
								<div
									className={`${style.badge} ${
										glowStyle[item.glow]
									}`}
									style={{
										backgroundImage: `url(${item.image})`,
									}}
								/>
							</Popover>
						);
					})}
				</div>
			</div>
		);
	},
);

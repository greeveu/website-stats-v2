import React, { useEffect, useState } from 'react';
import { ContentSpacing } from 'components/layout/contentSpacing/ContentSpacing';
import { NetworkRequest, NetworkStatus } from 'lib/NetworkRequest';
import { NetworkingLoading } from 'components/networking/loading/NetworkingLoading';
import { NetworkingError } from 'components/networking/error/NetworkingError';
import { Typography } from 'antd';
import { Divider } from 'antd';
import style from './badgesPage.module.sass';
import { observer } from 'mobx-react-lite';
import {
	Glow,
	Item,
	itemSchema,
} from 'resources/items/items.schema';
import { config } from 'resources/config';

interface BadgeEntry {
	id: number;
	name: string;
	description: string;
	item: string;
	timestamp: string | null;
	count: number;
}

const getItem = (item: string) => {
	if (itemSchema[item as Item]) {
		return itemSchema[item as Item]!;
	}
	return itemSchema[Item.WOODEN_SHOVEL]!;
};

const glowClass: { [key in Glow]: string } = {
	[Glow.NONE]: '',
	[Glow.WHITE]: style.glowWhite,
	[Glow.RAINBOW]: style.glowRainbow,
	[Glow.GOLD]: style.glowGold,
	[Glow.RED]: style.glowRed,
	[Glow.BLUE]: style.glowBlue,
	[Glow.PURPLE]: style.glowPurple,
	[Glow.Brown]: style.glowBrown,
};

export const BadgesPage: React.FunctionComponent = observer(() => {
	const [request, setRequest] = useState<NetworkRequest<BadgeEntry[]> | null>(null);

	useEffect(() => {
		setRequest(new NetworkRequest(`${config.endpoint}/badge/all`));
	}, []);

	if (!request || request.network === NetworkStatus.Pending) {
		return <NetworkingLoading />;
	}

	if (request.network === NetworkStatus.Error) {
		return <NetworkingError />;
	}

	return (
		<ContentSpacing>
			<div>
				<Typography.Title level={2}>All Badges</Typography.Title>
				<Divider />
				<div className={style.list}>
					{request.result.map((badge) => {
						const item = getItem(badge.item);
						return (
							<div key={badge.id} className={style.row}>
								<div className={style.itemCell}>
									<div
										className={`${style.itemIcon} ${glowClass[item.glow]}`}
										style={{
											backgroundImage: `url(${item.image})`,
										}}
									/>
								</div>
								<div className={style.textCell}>
									<Typography.Text strong>
										{badge.name}
									</Typography.Text>
									<Typography.Text type="secondary">
										{badge.description}
									</Typography.Text>
								</div>
								<div className={style.countCell}>
									<Typography.Text>
										{badge.count} {badge.count === 1 ? 'player' : 'players'}
									</Typography.Text>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</ContentSpacing>
	);
});

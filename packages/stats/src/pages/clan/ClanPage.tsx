import { Breadcrumb, Divider, Input, Table, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { NetworkRequest, NetworkStatus } from 'lib/NetworkRequest';
import { Link, useParams } from 'react-router-dom';
import { config } from 'config';
import { observer } from 'mobx-react-lite';
import { NetworkingLoading } from 'components/networking/loading/NetworkingLoading';
import { NetworkingError } from 'components/networking/error/NetworkingError';
import { NetworkingNotFound } from 'components/networking/notFound/NetworkingNotFound';
import style from 'pages/clan/clanPage.module.sass';
import { ContentSpacing } from 'components/layout/contentSpacing/ContentSpacing';
import { Player } from 'components/player/Player';
import { MinecraftText } from 'components/text/MinecraftText';

interface Clan {
	name: string;
	tag: string;
	size: number;
	playerperformance: number;
}

interface Member {
	name: string;
	type: number;
}

const columns = [
	{
		title: 'Player',
		dataIndex: 'name',
		render: (player: string) => {
			return (
				<div className={style.player}>
					<Player name={player} />
				</div>
			);
		},
	},
	{
		title: 'Rank',
		dataIndex: 'type',
		render: (rank: number) => {
			if (rank === 1) {
				return (
					<Tag color={'#03a05e'} className={style.tag}>
						Leader
					</Tag>
				);
			}
			return (
				<Tag color={'rgba(255, 255, 255, 0.04)'} className={style.tag}>
					Member
				</Tag>
			);
		},
	},
];

export const ClanPage: React.FunctionComponent = observer(() => {
	const params = useParams<{ clan: string }>();
	const [clanRequest, setClanRequest] = useState<NetworkRequest<Clan> | null>(
		null,
	);
	const [memberRequest, setMemberRequest] = useState<NetworkRequest<
		Member[]
	> | null>(null);

	useEffect(() => {
		if (!params.clan) {
			setClanRequest(null);
			setMemberRequest(null);
			return;
		}
		setClanRequest(
			new NetworkRequest(config.endpoint + `/clan/${params.clan}`),
		);
		setMemberRequest(
			new NetworkRequest(
				config.endpoint + `/clan/members/${params.clan}`,
			),
		);
	}, [params.clan]);

	if (!clanRequest || !memberRequest) {
		return null;
	}

	if (
		clanRequest.network === NetworkStatus.Pending ||
		memberRequest.network === NetworkStatus.Pending
	) {
		return <NetworkingLoading />;
	}

	if (
		clanRequest.network === NetworkStatus.Error ||
		memberRequest.network === NetworkStatus.Error
	) {
		return <NetworkingError />;
	}
	const clan = clanRequest.result;

	if (clan.size === 0) {
		return <NetworkingNotFound />;
	}

	const tag = (() => {
		if (clan.name === 'Einhörner') {
			return (
				<span className={style.party}>
					{' '}
					<MinecraftText text={`§l* ^o^`} />{' '}
				</span>
			);
		}
		return <MinecraftText text={`§l§7* §r§e ${clan.tag}`} />;
	})();

	return (
		<ContentSpacing>
			<React.Fragment>
				<div>
					<div className={style.heading}>
						<Typography.Title
							level={1}
							className={style.headingComponents}
						>
							{clan.name}
						</Typography.Title>

						<div>
							<Typography.Title
								level={2}
								className={style.headingComponents}
							>
								{tag}
							</Typography.Title>
						</div>
					</div>

					<Breadcrumb>
						<Breadcrumb.Item>
							<Link to={'/'}>Home</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>Clan</Breadcrumb.Item>
						<Breadcrumb.Item>{params.clan}</Breadcrumb.Item>
					</Breadcrumb>
					<Divider />
					<div className={style.info}>
						<Typography.Title level={5}>Members</Typography.Title>
						<Input disabled={true} value={clan.size} />

						<Typography.Title level={5}>
							Average player performance
						</Typography.Title>
						<Input disabled={true} value={clan.playerperformance} />
					</div>
					<div className={style.subheading}>
						<Typography.Title level={2}>Members</Typography.Title>
						<Divider />
						<div className={style.tableWrapper}>
							<Table
								className={style.table}
								columns={columns}
								dataSource={memberRequest.result}
								pagination={{ showSizeChanger: false }}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		</ContentSpacing>
	);
});

import {Breadcrumb, Divider, Input, Table, Tag, Typography} from 'antd';
import React, {useEffect, useState} from 'react';
import {NetworkRequest, NetworkStatus} from 'lib/NetworkRequest';
import {Link, useParams} from 'react-router-dom';
import {config} from 'config';
import {observer} from 'mobx-react-lite';
import {NetworkingLoading} from 'components/networking/loading/NetworkingLoading';
import {NetworkingError} from 'components/networking/error/NetworkingError';
import {NetworkingNotFound} from 'components/networking/notFound/NetworkingNotFound';
import style from 'pages/clan/clanPage.module.sass';
import {ContentSpacing} from 'components/layout/contentSpacing/ContentSpacing';
import {Player} from 'components/player/Player';

interface Clan
{
	name: string,
	tag: string,
	size: number,
	playerperformance: number,
}

interface Member
{
	name: string,
	type: number,
}

const columns = [
	{
		title: 'Player',
		dataIndex: 'name',
		render: (player: string, record: any) =>
		{
			return <div className={style.player}>{player}</div>;
		},
	},
	{
		title: 'Rank',
		dataIndex: 'type',
		render: (rank: number) =>
		{
			if (rank === 1)
			{
				return (<Tag
					color={'#03a05e'}
					className={style.tag}
				>Leader</Tag>);
			}
			return (<Tag
				color={'rgba(255, 255, 255, 0.04)'}
				className={style.tag}
			>Member</Tag>);
		},
	},
];

export const ClanPage: React.FunctionComponent = observer((props) =>
{
	const params = useParams<{ clan: string }>();
	const [clanRequest, setClanRequest] = useState<NetworkRequest<Clan> | null>(null);
	const [memberRequest, setMemberRequest] = useState<NetworkRequest<Member[]> | null>(null);

	useEffect(() =>
	{
		if (!params.clan)
		{
			setClanRequest(null);
			setMemberRequest(null);
			return;
		}
		setClanRequest(new NetworkRequest(config.endpoint + `/clan/${params.clan}`));
		setMemberRequest(new NetworkRequest(config.endpoint + `/clan/members/${params.clan}`));

	}, [params.clan]);

	if (!clanRequest || !memberRequest)
	{
		return null;
	}

	if (clanRequest.network === NetworkStatus.Pending || memberRequest.network === NetworkStatus.Pending)
	{
		return <NetworkingLoading />;
	}

	if (clanRequest.network === NetworkStatus.Error || memberRequest.network === NetworkStatus.Error)
	{
		return <NetworkingError />;
	}
	const clan = clanRequest.result;

	if (clan.size === 0)
	{
		return <NetworkingNotFound />;
	}

	return (
		<ContentSpacing>
			<Breadcrumb className={style.breadcrump}>
				<Breadcrumb.Item>
					<Link to={'/'}>
						Stats
					</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item>Clan</Breadcrumb.Item>
				<Breadcrumb.Item>{params.clan}</Breadcrumb.Item>
			</Breadcrumb>
			<div className={style.heading}>
				<Typography.Title level={1}>{clan.name} ({clan.tag})</Typography.Title>
				<Divider />
				<div
					className={style.info}
				>
					<Typography.Title level={5}>Members</Typography.Title>
					<Input
						disabled={true}
						value={clan.size}
					/>

					<Typography.Title level={5}>Average player performance</Typography.Title>
					<Input
						disabled={true}
						value={clan.playerperformance}
					/>

				</div>
				<div className={style.subheading}>
					<Typography.Title level={2}>Members</Typography.Title>
					<Divider />
					<Table
						columns={columns}
						dataSource={memberRequest.result}
					/>
				</div>
			</div>
		</ContentSpacing>
	);
});

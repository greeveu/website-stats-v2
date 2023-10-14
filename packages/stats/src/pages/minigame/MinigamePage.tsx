import React, {useContext, useEffect, useState} from 'react';
import {SingleMinigame} from 'minigames';
import {Divider, Table, Typography} from 'antd';
import {ContentSpacing} from 'components/layout/contentSpacing/ContentSpacing';
import {observer} from 'mobx-react-lite';
import {NetworkRequest, NetworkStatus} from 'lib/NetworkRequest';
import {config} from 'config';
import {Player} from 'components/player/Player';
import {NetworkingError} from 'components/networking/error/NetworkingError';
import style from './minigamePage.module.sass';
import {NetworkingLoading} from 'components/networking/loading/NetworkingLoading';
import {globalContext} from 'components/context/ContextProvider';
import {NetworkingNotFound} from 'components/networking/notFound/NetworkingNotFound';
import {Pagination} from 'pages/minigame/Pagination';
import {useCurrentPage} from 'hooks/useCurrentPage';

interface MinigamePageProps
{
	minigame: SingleMinigame,
}

export const MinigamePage: React.FunctionComponent<MinigamePageProps> = observer((props) =>
{
	const context = useContext(globalContext);
	const current = useCurrentPage()
	const [request, setRequest] = useState<NetworkRequest<any>>();

	useEffect(() =>
	{
		setRequest(new NetworkRequest(`${config.endpoint}${props.minigame.api?.endpoint}?offset=${current.offset}&amount=${config.defaultLimit}`, undefined, {
			context: context,
		}));
	}, [current.offset]);

	if (!request)
	{
		return <NetworkingLoading />;
	}

	if (request.network === NetworkStatus.Error)
	{
		return <NetworkingError />;
	}

	if (request.network !== NetworkStatus.Success)
	{
		return <NetworkingLoading />;
	}

	if (request.result.length === 0)
	{
		context.effect.network = NetworkStatus.NotFound;
		return <NetworkingNotFound />;
	}

	const defaultColumns = [
		{
			title: 'Place',
			dataIndex: 'name',
			render: (value: any, record: any, index: number) =>
			{
				const place = config.defaultLimit * current.offset + index + 1;
				return <div>{place}</div>;
			},
			align: 'center',
		},
		{
			title: 'Player',
			dataIndex: 'name',
			render: (value: string) =>
			{
				return <Player
					name={value}
				/>;
			},
		}];

	const dataColumns = Object.entries(props.minigame.api!.data).map(([key, value]) =>
	{
		return {
			title: value,
			dataIndex: key,
		};
	});

	return (
		<ContentSpacing>
			<div className={style.root}>
				<Typography.Title>
					{props.minigame.title}
				</Typography.Title>
				<Divider />
				<Table
					columns={[...defaultColumns, ...dataColumns]}
					dataSource={request.result}
					pagination={false}
				/>
				<div className={style.pagination}>
					<Pagination />
				</div>
			</div>
		</ContentSpacing>
	);
});

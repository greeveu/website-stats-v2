import React, {useContext, useEffect, useMemo, useState} from 'react';
import {SingleMinigame} from 'minigames';
import {Button, Divider, Table, Typography} from 'antd';
import {ContentSpacing} from 'components/layout/contentSpacing/ContentSpacing';
import {observer} from 'mobx-react-lite';
import {NetworkRequest, NetworkStatus} from 'lib/NetworkRequest';
import {config} from 'config';
import {Player} from 'components/player/Player';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import {useParams} from 'react-router-dom';
import {NetworkingError} from 'components/networking/error/NetworkingError';
import style from './minigamePage.module.sass';
import {NetworkingLoading} from 'components/networking/loading/NetworkingLoading';
import {globalContext} from 'components/context/ContextProvider';
import {NetworkingNotFound} from 'components/networking/notFound/NetworkingNotFound';

interface MinigamePageProps
{
	minigame: SingleMinigame,
}

const limit = 25;

export const MinigamePage: React.FunctionComponent<MinigamePageProps> = observer((props) =>
{
	const context = useContext(globalContext);
	const params = useParams<{ page?: string }>();
	const currentPage: number = useMemo(() =>
	{
		if (!params.page)
		{
			return 1;
		}
		const page = Number.parseInt(params.page);
		if (!Number.isSafeInteger(page))
		{
			return 1;
		}
		if (page <= 0)
		{
			return 1;
		}
		return page;
	}, [params.page]);
	const [request, setRequest] = useState<NetworkRequest<any>>();

	useEffect(() =>
	{
		setRequest(new NetworkRequest(`${config.endpoint}${props.minigame.api?.endpoint}?offset=${currentPage - 1}&amount=${limit}`, undefined, {
			delay: 4000,
			context: context,
		}));
	}, []);

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
				const place = limit * (currentPage - 1) + index + 1;
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
				<Button
					icon={<LeftOutlined />}
					type={'text'}
				/>
				<Typography.Text>
					WIP
				</Typography.Text>
				<Button
					icon={<RightOutlined />}
					type={'text'}
				/>
			</div>
		</ContentSpacing>
	);
});

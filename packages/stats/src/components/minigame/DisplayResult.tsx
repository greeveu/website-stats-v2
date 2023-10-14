import React, {useContext} from 'react';
import {minigameContext} from 'components/minigame/MinigameContextProvider';
import {config} from 'config';
import {Player} from 'components/player/Player';
import {ContentSpacing} from 'components/layout/contentSpacing/ContentSpacing';
import style from "./displayResult.module.sass"
import {Divider, Table, Typography} from 'antd';
import {useCurrentPage} from 'hooks/useCurrentPage';
import {observer} from 'mobx-react-lite';
import {Pagination} from 'components/minigame/Pagination';

export const DisplayResult: React.FunctionComponent = observer(() =>
	{
		const current = useCurrentPage();
		const context = useContext(minigameContext);

		if (!context.network)
		{
			return null;
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

		const dataColumns = Object.entries(context.config.api!.data).map(([key, value]) =>
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
						{context.config.title}
					</Typography.Title>
					<Divider />
					<Table
						columns={[...defaultColumns, ...dataColumns]}
						dataSource={context.network.result}
						pagination={false}
					/>
					<div className={style.pagination}>
						<Pagination />
					</div>
				</div>
			</ContentSpacing>
		);
	},
);

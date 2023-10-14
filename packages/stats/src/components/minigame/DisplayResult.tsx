import React, {useContext} from 'react';
import {minigameContext} from 'components/minigame/MinigameContextProvider';
import {config} from 'config';
import {Crown, Player} from 'components/player/Player';
import style from './displayResult.module.sass';
import {Divider, Table, Typography} from 'antd';
import {observer} from 'mobx-react-lite';
import {RenderMethod} from 'minigames';
import {Pagination} from 'components/minigame/pagination/Pagination';
import {Time} from 'components/minigame/display/Time';
import {Place} from 'components/minigame/display/Place';

export const DisplayResult: React.FunctionComponent = observer(() =>
	{
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
					const place = config.defaultLimit * context.offset + index + 1;
					return <Place place={place} />;
				},
				align: 'center',
			}];

		const dataColumns = Object.entries(context.config.api!.data).map(([key, value]) =>
		{
			if (value.renderMethod === RenderMethod.Player)
			{
				return {
					title: value.display,
					dataIndex: key,
					render: (value: any, record: any, index: number) =>
					{
						const place = config.defaultLimit * context.offset + index + 1;
						if (place === 1)
						{
							return <Player
								name={value}
								crown={Crown.Gold}
							/>;
						}
						if (place === 2)
						{
							return <Player
								name={value}
								crown={Crown.Silver}
							/>;
						}
						if (place === 3)
						{
							return <Player
								name={value}
								crown={Crown.Bronze}
							/>;
						}

						return <Player name={value} />;
					},
				};
			}

			if (value.renderMethod === RenderMethod.Time)
			{
				return {
					title: value.display,
					dataIndex: key,
					render: (value: any, record: any, index: number) =>
					{
						return <Time ms={value} />;
					},
				};
			}

			return {
				title: value.display,
				dataIndex: key,
			};
		});

		return (
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
		);
	},
);

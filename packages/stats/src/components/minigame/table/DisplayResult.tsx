import React, {useContext} from 'react';
import {config} from 'config';
import {Crown, Player} from 'components/player/Player';
import style from './displayResult.module.sass';
import {Divider, Table} from 'antd';
import {observer} from 'mobx-react-lite';
import {RenderMethod} from 'minigames';
import {Pagination} from 'components/minigame/pagination/Pagination';
import {MinigameTitle} from 'components/minigame/title/MinigameTitle';
import {minigameContext} from 'components/minigame/context/MinigameContextProvider';
import {Place} from 'components/minigame/table/display/Place';
import {Time} from 'components/minigame/table/display/Time';

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

			if (value.renderMethod === RenderMethod.TimeMs)
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

			if (value.renderMethod === RenderMethod.TimeS)
			{
				return {
					title: value.display,
					dataIndex: key,
					render: (value: any, record: any, index: number) =>
					{
						const time = Number.parseFloat(value) * 1000;
						return <Time ms={time} />;
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
				<MinigameTitle />
				<Divider />
				<Table
					columns={[...defaultColumns, ...dataColumns]}
					dataSource={(context.network.data?.items || undefined) as any[]}
					pagination={false}
				/>
				<div className={style.pagination}>
					<Pagination />
				</div>
			</div>
		);
	},
);

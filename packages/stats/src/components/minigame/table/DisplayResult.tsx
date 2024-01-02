import React, { useContext } from 'react';
import { config } from 'resources/config';
import { Crown, Player } from 'components/player/Player';
import style from './displayResult.module.sass';
import { Table } from 'antd';
import { observer } from 'mobx-react-lite';
import { MinigameRender } from 'resources/minigames.schema';
import { Pagination } from 'components/minigame/pagination/Pagination';
import { minigameContext } from 'components/minigame/context/MinigameContextProvider';
import { Place } from 'components/minigame/table/display/Place';
import { Time } from 'components/minigame/table/display/Time';
import { Clan } from 'components/clan/Clan';

export const DisplayResult: React.FunctionComponent = observer(() => {
	const context = useContext(minigameContext);

	if (!context.network) {
		return null;
	}

	const defaultColumns = [
		{
			title: 'Place',
			dataIndex: 'name',
			render: (value: any, record: any, index: number) => {
				const place = config.defaultLimit * context.offset + index + 1;
				return <Place place={place} />;
			},
			align: 'center',
		},
	];

	const dataColumns = Object.entries(context.config.api!.data).map(
		([key, value]) => {
			if (value.renderMethod === MinigameRender.Player) {
				return {
					title: value.display,
					dataIndex: key,
					render: (value: any, record: any, index: number) => {
						const place =
							config.defaultLimit * context.offset + index + 1;
						if (place === 1) {
							return <Player name={value} crown={Crown.Gold} />;
						}
						if (place === 2) {
							return <Player name={value} crown={Crown.Silver} />;
						}
						if (place === 3) {
							return <Player name={value} crown={Crown.Bronze} />;
						}

						return <Player name={value} />;
					},
				};
			}

			if (value.renderMethod === MinigameRender.Clan) {
				return {
					title: value.display,
					dataIndex: key,
					render: (
						value: any,
						row: { name: string; tag: string },
					) => {
						return (
							<Clan
								name={row.name}
								tag={`§l§7* §r§e${row.tag}`}
							/>
						);
					},
				};
			}

			if (value.renderMethod === MinigameRender.TimeMs) {
				return {
					title: value.display,
					dataIndex: key,
					render: (value: any) => {
						return <Time ms={value} />;
					},
				};
			}

			if (value.renderMethod === MinigameRender.TimeS) {
				return {
					title: value.display,
					dataIndex: key,
					render: (value: any) => {
						const time = Number.parseFloat(value) * 1000;
						return <Time ms={time} />;
					},
				};
			}

			if (value.renderMethod === MinigameRender.KillsDeaths) {
				return {
					title: value.display,
					dataIndex: key,
					render: (
						value: any,
						row: { kills: number; deaths: number },
					) => {
						if (row.kills === 0 || row.deaths === 0) {
							return <div> - </div>;
						}

						const kd = (
							Math.floor((row.kills / row.deaths) * 100) / 100
						)
							.toString()
							.split('.');

						return (
							<div>
								{kd[0]}.{(kd[1] || "").padEnd(2, '0')}
							</div>
						);
					},
				};
			}

			if (value.renderMethod === MinigameRender.WinsLoses) {
				return {
					title: value.display,
					dataIndex: key,
					render: (
						value: any,
						row: { wins: number; loses: number },
					) => {
						if (row.wins === 0 || row.loses === 0) {
							return <div> - </div>;
						}
						const wl = (
							Math.floor((row.wins / row.loses) * 100) / 100
						)
							.toString()
							.split('.');

						return (
							<div>
								{wl[0]}.{(wl[1] || "").padEnd(2, '0')}
							</div>
						);
					},
				};
			}

			return {
				title: value.display,
				dataIndex: key,
			};
		},
	);

	return (
		<div className={style.root}>
			<div className={style.tableWrapper}>
				<Table
					columns={[...defaultColumns, ...dataColumns]}
					dataSource={
						(context.network.data?.items || undefined) as any[]
					}
					pagination={false}
					className={style.table}
				/>
			</div>
			<div className={style.pagination}>
				<Pagination />
			</div>
		</div>
	);
});

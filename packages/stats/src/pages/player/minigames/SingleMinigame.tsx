import React from 'react';
import { SingleStat } from '../playerPage.types';
import {
	PlayerStatSingle,
	StatRender,
} from '../../../resources/playerStats.schema';
import { observer } from 'mobx-react-lite';
import { Collapse, Input, Typography } from 'antd';
import style from './singleMinigame.module.sass';
import { StarFilled, StarOutlined } from '@ant-design/icons';

interface SingleMinigameProps {
	data: SingleStat;
	schema: PlayerStatSingle;
	relevance: number;
}

export const SingleMinigame: React.FunctionComponent<SingleMinigameProps> =
	observer((props) => {
		const star = (() => {
			if (props.relevance > 10_000) {
				return (
					<StarFilled
						style={{ color: 'gold' }}
						className={style.star}
					/>
				);
			}
			if (props.relevance > 1_000) {
				return (
					<StarFilled
						style={{ color: 'silver' }}
						className={style.star}
					/>
				);
			}
			if (props.relevance > 100) {
				return (
					<StarOutlined
						style={{ color: '#a86a2d' }}
						className={style.star}
					/>
				);
			}
			return null;
		})();

		return (
			<Collapse
				size={'large'}
				bordered={false}
				expandIcon={() => null}
				items={[
					{
						key: '',
						headerClass: 'h4',
						label: (
							<Typography.Title
								level={3}
								className={style.secondaryTitle}
							>
								{props.schema.title}
								{star}
							</Typography.Title>
						),
						children: (
							<div className={style.content}>
								{Object.entries(props.schema.stats).map(
									([key, schema]) => {
										if (
											schema.renderMethod ===
											StatRender.WinsLosesRow
										) {
											const wins = (props.data.wins ||
												0) as number;
											const loses = (props.data.loses ||
												0) as number;

											const ratio = (() => {
												if (wins === 0 || loses === 0) {
													return '-';
												}

												const ratio = (
													Math.floor(
														(wins / loses) * 100,
													) / 100
												)
													.toString()
													.split('.');

												return `${ratio[0]}.${(
													ratio[1] || ''
												).padEnd(2, '0')}`;
											})();

											return (
												<div
													key={`${schema.display}`}
													className={
														style.rowCalculated
													}
												>
													<div>
														<Typography.Title
															level={5}
															className={
																style.title
															}
														>
															Wins
														</Typography.Title>
														<Input
															disabled={true}
															value={wins}
														/>
													</div>
													<div>
														<Typography.Title
															level={5}
															className={
																style.title
															}
														>
															Loses
														</Typography.Title>
														<Input
															disabled={true}
															value={loses}
														/>
													</div>
													<div>
														<Typography.Title
															level={5}
															className={
																style.title
															}
														>
															W/L
														</Typography.Title>
														<Input
															disabled={true}
															value={ratio}
														/>
													</div>
												</div>
											);
										}

										if (
											schema.renderMethod ===
											StatRender.KillsDeathsRow
										) {
											const kills = (props.data.kills ||
												0) as number;
											const deaths = (props.data.deaths ||
												0) as number;

											const ratio = (() => {
												if (
													kills === 0 ||
													deaths === 0
												) {
													return '-';
												}

												const ratio = (
													Math.floor(
														(kills / deaths) * 100,
													) / 100
												)
													.toString()
													.split('.');

												return `${ratio[0]}.${(
													ratio[1] || ''
												).padEnd(2, '0')}`;
											})();

											return (
												<div
													key={`${schema.display}-${kills}-${deaths}`}
													className={
														style.rowCalculated
													}
												>
													<div>
														<Typography.Title
															level={5}
															className={
																style.title
															}
														>
															Kills
														</Typography.Title>
														<Input
															disabled={true}
															value={kills}
														/>
													</div>
													<div>
														<Typography.Title
															level={5}
															className={
																style.title
															}
														>
															Deaths
														</Typography.Title>
														<Input
															disabled={true}
															value={deaths}
														/>
													</div>
													<div>
														<Typography.Title
															level={5}
															className={
																style.title
															}
														>
															K/D
														</Typography.Title>
														<Input
															disabled={true}
															value={ratio}
														/>
													</div>
												</div>
											);
										}

										return (
											<div
												key={`${schema.display}${props.data[key]}`}
												className={style.rowFullSize}
											>
												<Typography.Title
													level={5}
													className={style.title}
												>
													{schema.display}
												</Typography.Title>
												<Input
													disabled={true}
													value={props.data[key]}
												/>
											</div>
										);
									},
								)}
							</div>
						),
					},
				]}
			/>
		);
	});

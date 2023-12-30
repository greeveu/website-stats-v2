import React from 'react';
import { SingleStat } from '../playerPage.types';
import { MinigameSingle } from '../../../resources/player.schema';
import { observer } from 'mobx-react-lite';
import { Collapse, Input, Typography } from 'antd';
import style from './singleMinigame.module.sass';
import { StarFilled, StarOutlined } from '@ant-design/icons';

interface SingleMinigameProps {
	data: SingleStat;
	schema: MinigameSingle;
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
										const value: string | number = (() => {
											switch (schema.renderMethod) {
												default:
													return props.data[key];
											}
										})();

										return (
											<div key={`${schema.display}${value}`}>
												<Typography.Title
													level={5}
													className={style.title}
												>
													{schema.display}
												</Typography.Title>
												<Input
													disabled={true}
													value={value}
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

import React from 'react';
import { MultiStat } from '../playerPage.types';
import { MinigameMulti, RenderMethod } from '../../../resources/player.schema';
import { Collapse, Input, Typography } from 'antd';
import style from './multiMinigame.module.sass';
import { renderTime } from '../../../lib/renderTime';

interface MultiMinigameProps {
	data: MultiStat;
	schema: MinigameMulti;
}

export const MultiMinigame: React.FunctionComponent<MultiMinigameProps> = (
	props,
) => {
	const children = (
		<div>
			{props.data.map((item) => {
				const title = Object.entries(props.schema.keys)
					.map(([key, value]) => {
						const itemValue = item[key];

						if (!itemValue) {
							return null;
						}

						const display = value[itemValue];

						if (!display) {
							return null;
						}

						return display;
					})
					.filter((item) => {
						return item !== null;
					})
					.join(' - ');

				return (
					<div>
						{Object.entries(props.schema.stats).map(
							([key, schema]) => {
								const value: string | number = (() => {
									switch (schema.renderMethod) {
										case RenderMethod.TimeS:
											return `${renderTime(
												(item[key] as number) * 1000,
											)}ms`;

										case RenderMethod.TimeMs:
											return `${renderTime(
												item[key] as number,
											)}ms`;

										default:
											return item[key];
									}
								})();

								return (
									<div key={`${title}${value}`}>
										<Typography.Title level={5}>
											{title}
										</Typography.Title>
										<Input
											disabled={true}
											value={value as string}
										/>
									</div>
								);
							},
						)}
					</div>
				);
			})}
		</div>
	);

	return (
		<Collapse
			size={'large'}
			bordered={false}
			expandIcon={() => null}
			items={[
				{
					key: '',
					label: (
						<Typography.Title
							level={3}
							className={style.secondaryTitle}
						>
							{props.schema.title}
						</Typography.Title>
					),
					children: children,
				},
			]}
		/>
	);
};

import React from 'react';
import { MultiStat, SingleStat, Stats } from '../playerPage.types';
import { playersSchema } from 'resources/players/players.schema.ts';
import { SingleMinigame } from './SingleMinigame';
import style from './minigames.module.sass';
import { observer } from 'mobx-react-lite';
import { MultiMinigame } from './MultiMinigame';
import { StatType } from 'resources/players/players.types.ts';

interface MinigamesProps {
	result: Stats;
}

export const Minigames: React.FunctionComponent<MinigamesProps> = observer(
	(props) => {
		if (!props.result) {
			return null;
		}

		const minigames = Object.entries(props.result)
			.map(([key, value]) => {
				/**
				 * Transform object for easier handling
				 */
				return {
					key,
					schema: playersSchema[key],
					stats: value,
				};
			})
			.map((item) => {
				/**
				 * Give every entry a relevance key
				 */

				// Multi minigame go on top
				if (Array.isArray(item.stats)) {
					return {
						...item,
						relevance: 99_999_999,
					};
				}

				const relevance = Object.values(item.stats).reduce(
					(prev, current) => {
						if (typeof current === 'number') {
							if (typeof prev === 'number') {
								return prev + current;
							}

							return current;
						}
						return 0;
					},
				) as number;

				return {
					...item,
					relevance,
				};
			})
			.filter((item) => {
				/**
				 * Filter out non relevant entries
				 */

				if (!item.schema) {
					return false;
				}

				if (!item.stats) {
					return false;
				}

				if (Object.keys(item.stats).length === 0) {
					return false;
				}

				if (item.relevance === 0) {
					return false;
				}

				return true;
			})
			.sort((a, b) => {
				return b.relevance - a.relevance;
			});

		return (
			<div className={style.root}>
				{minigames.map((item) => {
					if (item.schema.type === StatType.Single) {
						return (
							<div key={item.schema.title}>
								<SingleMinigame
									schema={item.schema}
									data={item.stats as SingleStat}
									relevance={item.relevance}
								/>
							</div>
						);
					}
					return (
						<div key={item.schema.title}>
							<MultiMinigame
								data={item.stats as MultiStat}
								schema={item.schema}
							/>
						</div>
					);
				})}
			</div>
		);
	},
);

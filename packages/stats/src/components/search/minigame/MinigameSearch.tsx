import React, { useContext, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { globalContext } from 'components/context/ContextProvider';
import { MultiGameCard } from 'components/gameCard/multi/MultiGameCard';
import { SingleGameCard } from 'components/gameCard/single/SingleGameCard';
import style from './minigameSearch.module.sass';
import { config } from 'resources/config';
import { Typography } from 'antd';
import {
	MinigameGroup,
	MinigameType,
	SingleMinigame,
} from 'resources/minigames/minigames.types.ts';
import { featuredSchema } from 'resources/minigames/featured/featured.schema.ts';
import { defaultSchema } from 'resources/minigames/default/default.schema.ts';
import { miscSchema } from 'resources/minigames/misc/misc.schema.ts';

/**
 * Filters minigames and minigame groups for a specific regex
 * @param regex
 */
const searchMinigames = (regex: RegExp): (SingleMinigame | MinigameGroup)[] => {
	return [...featuredSchema, ...defaultSchema, ...miscSchema].filter(
		(item) => {
			// Matches main title
			if (!!item.title.match(regex)) {
				return true;
			}
			if (item.type === MinigameType.Minigame) {
				return false;
			}

			return !!item.minigames.find((item) => {
				// Matches subtitle of sub minigame
				if (!!item.subtitle.match(regex)) {
					return true;
				}
				// Matches title of sub minigame
				if (!!item.title.match(regex)) {
					return true;
				}
				return false;
			});
		},
	);
};

export const MinigameSearch: React.FunctionComponent = observer(() => {
	const context = useContext(globalContext);
	const results = useMemo(() => {
		// Priority results
		const prioResults = searchMinigames(
			new RegExp(`^${context.search.searchFor}.*`, 'i'),
		);
		if (prioResults.length >= config.searchResultLimit) {
			return prioResults.slice(0, config.searchResultLimit);
		}

		// Other results
		const otherResults = searchMinigames(
			new RegExp(`${context.search.searchFor}`, 'i'),
		);
		const deduplicate = new Set([...prioResults, ...otherResults]);
		return Array.from(deduplicate).slice(0, config.searchResultLimit);
	}, [context.search.searchFor]);

	if (context.search.searchFor === null) {
		return null;
	}

	if (results.length === 0) {
		return (
			<div className={style.notFound}>
				<Typography.Text disabled={true}>
					No minigame found
				</Typography.Text>
			</div>
		);
	}

	return (
		<React.Fragment>
			{results.map((item) => {
				const key = item.title + context.search.searchFor;
				if (item.type === MinigameType.Minigame) {
					return (
						<div className={style.item} key={key}>
							<SingleGameCard minigame={item} />
						</div>
					);
				}
				return (
					<div className={style.item} key={key}>
						<MultiGameCard
							title={item.title}
							subTitle={item.subTitle}
							link={item.link}
							minigames={item.minigames.map((item) => {
								return {
									link: item.link,
									image: item.image,
									subTitle: item.subtitle,
									highlight: !!item.subtitle.match(
										new RegExp(
											`${context.search.searchFor}`,
											'i',
										),
									),
								};
							})}
						/>
					</div>
				);
			})}
		</React.Fragment>
	);
});

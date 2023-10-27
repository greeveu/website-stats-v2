import React from 'react';
import {MinigameGroup, MultiMinigame, SingleMinigame} from 'minigames';
import {PaginationSynchronizer} from 'components/minigame/pagination/PaginationSynchronizer';
import {ContentSpacing} from 'components/layout/contentSpacing/ContentSpacing';
import {NetworkBarrier} from 'components/minigame/context/NetworkBarrier';
import {Options} from 'components/minigame/sidelane/options/Options';
import {OptionSynchronizer} from 'components/minigame/sidelane/options/OptionSynchronizer';
import {MinigameContextProvider} from 'components/minigame/context/MinigameContextProvider';
import {DisplayResult} from 'components/minigame/table/DisplayResult';

interface MinigamePageProps
{
	minigame: SingleMinigame | MultiMinigame;
	group: MinigameGroup | null;
}

export const MinigamePage: React.FunctionComponent<MinigamePageProps> = (props) =>
{
	return (
		<MinigameContextProvider
			minigame={props.minigame}
			group={props.group}
		>
			<OptionSynchronizer />
			<PaginationSynchronizer />
			<ContentSpacing>
				<NetworkBarrier>
					<DisplayResult />
				</NetworkBarrier>
				<Options />
			</ContentSpacing>
		</MinigameContextProvider>
	);
};

import React from 'react';
import {SingleMinigame} from 'minigames';
import {MinigameContextProvider} from 'components/minigame/MinigameContextProvider';
import {NetworkBarrier} from 'components/minigame/NetworkBarrier';
import {DisplayResult} from 'components/minigame/DisplayResult';
import {OptionSynchronizer} from 'components/minigame/options/OptionSynchronizer';
import {PaginationSynchronizer} from 'components/minigame/pagination/PaginationSynchronizer';
import {ContentSpacing} from 'components/layout/contentSpacing/ContentSpacing';
import {Options} from 'components/minigame/options/Options';

interface MinigameProps
{
	minigame: SingleMinigame;
}

export const Minigame: React.FunctionComponent<MinigameProps> = (props) =>
{
	return (
		<MinigameContextProvider minigame={props.minigame}>
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

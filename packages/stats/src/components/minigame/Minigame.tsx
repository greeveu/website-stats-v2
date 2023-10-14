import React from 'react';
import {SingleMinigame} from 'minigames';
import {MinigameContextProvider} from 'components/minigame/MinigameContextProvider';
import {NetworkBarrier} from 'components/minigame/NetworkBarrier';
import {DisplayResult} from 'components/minigame/DisplayResult';

interface MinigameProps
{
	minigame: SingleMinigame;
}

export const Minigame: React.FunctionComponent<MinigameProps> = (props) =>
{
	return (
		<MinigameContextProvider minigame={props.minigame}>
			<NetworkBarrier >
				<DisplayResult />
			</NetworkBarrier>
		</MinigameContextProvider>
	);
};

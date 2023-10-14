import React from 'react';
import {SingleMinigame} from 'minigames';
import {Minigame} from 'components/minigame/Minigame';

interface MinigamePageProps
{
	minigame: SingleMinigame;
}

export const MinigamePage: React.FunctionComponent<MinigamePageProps> = (props) =>
{
	return <Minigame minigame={props.minigame} />
};

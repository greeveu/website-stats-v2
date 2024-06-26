import React from 'react';
import { PaginationSynchronizer } from 'components/minigame/pagination/PaginationSynchronizer';
import { ContentSpacing } from 'components/layout/contentSpacing/ContentSpacing';
import { NetworkBarrier } from 'components/minigame/context/NetworkBarrier';
import { MinigameContextProvider } from 'components/minigame/context/MinigameContextProvider';
import { DisplayResult } from 'components/minigame/table/DisplayResult';
import { OptionSynchronizer } from 'components/minigame/options/OptionSynchronizer';
import { Options } from 'components/minigame/options/Options';
import style from './minigamePage.module.sass';
import { MinigameTitle } from 'components/minigame/title/MinigameTitle';
import { Path } from 'components/minigame/table/path/Path';
import { Divider } from 'antd';
import {
	MinigameGroup,
	MultiMinigame,
	SingleMinigame,
} from 'resources/minigames/minigames.types.ts';

interface MinigamePageProps {
	minigame: SingleMinigame | MultiMinigame;
	group: MinigameGroup | null;
}

export const MinigamePage: React.FunctionComponent<MinigamePageProps> = (
	props,
) => {
	return (
		<MinigameContextProvider minigame={props.minigame} group={props.group}>
			<OptionSynchronizer />
			<PaginationSynchronizer />
			<ContentSpacing>
				<div className={style.content}>
					<div>
						<MinigameTitle />
						<Path />
						<div className={style.optionsMobile}>
							<Options />
						</div>
						<Divider />
					</div>
					<div className={style.barrier}>
						<NetworkBarrier>
							<DisplayResult />
						</NetworkBarrier>
					</div>
				</div>
				<div className={style.optionsDesktop}>
					<Options />
				</div>
			</ContentSpacing>
		</MinigameContextProvider>
	);
};

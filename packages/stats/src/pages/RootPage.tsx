import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PlayerPage } from 'pages/player/PlayerPage';
import { ClanPage } from 'pages/clan/ClanPage';
import { HomePage } from 'pages/home/HomePage';
import { Group, minigamesSchema, MinigameType } from 'resources/minigames.schema';
import { MinigamePage } from 'pages/minigame/MinigamePage';

export const RootPage: React.FunctionComponent = () => {
	return (
		<Routes>
			<Route path={'/player/:identifier'} element={<PlayerPage />} />
			<Route path={'/clan/:clan'} element={<ClanPage />} />
			{minigamesSchema.map((item) => {
				if (item.type === MinigameType.Gamegroup) {
					return (
						<React.Fragment>
							{item.minigames.map((minigame) => {
								return (
									<Route
										path={`minigame/${item.link}/${minigame.link}/:page?`}
										element={
											<MinigamePage
												minigame={minigame}
												group={item}
											/>
										}
										key={item.link}
									/>
								);
							})}
						</React.Fragment>
					);
				}

				const path = (() => {
					if (item.group === Group.Misc) {
						return `misc/${item.link}/:page?`;
					}

					return `minigame/${item.link}/:page?`;
				})();

				return (
					<Route
						path={path}
						element={<MinigamePage minigame={item} group={null} />}
						key={item.link}
					/>
				);
			})}
			<Route path={'/'} element={<HomePage />} />
		</Routes>
	);
};

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PlayerPage } from 'pages/player/PlayerPage';
import { ClanPage } from 'pages/clan/ClanPage';
import { HomePage } from 'pages/home/HomePage';
import { MinigamePage } from 'pages/minigame/MinigamePage';
import { MinigameType } from 'resources/minigames/minigames.types.ts';
import { observer } from 'mobx-react-lite';
import { featuredSchema } from 'resources/minigames/featured/featured.schema.ts';
import { miscSchema } from 'resources/minigames/misc/misc.schema.ts';
import { defaultSchema } from 'resources/minigames/default/default.schema.ts';

export const RootPage: React.FunctionComponent = observer(() => {
	return (
		<Routes>
			<Route path={'/player/:identifier'} element={<PlayerPage />} />
			<Route path={'/clan/:clan'} element={<ClanPage />} />
			{[...featuredSchema, ...defaultSchema, ...miscSchema].map(
				(item) => {
					if (item.type === MinigameType.Gamegroup) {
						return (
							<React.Fragment key={item.link}>
								{item.minigames.map((minigame) => {
									return (
										<React.Fragment key={minigame.link}>
											<Route
												path={`minigame/${item.link}/${minigame.link}/:page?`}
												element={
													<MinigamePage
														minigame={minigame}
														group={item}
													/>
												}
											/>
											{/*{Included for backwards compatibility}*/}
											<Route
												path={`misc/${item.link}/${minigame.link}/:page?`}
												element={
													<MinigamePage
														minigame={minigame}
														group={item}
													/>
												}
											/>
										</React.Fragment>
									);
								})}
							</React.Fragment>
						);
					}

					return (
						<React.Fragment key={item.link}>
							<Route
								path={`minigame/${item.link}/:page?`}
								element={
									<MinigamePage
										minigame={item}
										group={null}
									/>
								}
							/>
							{/*{Included for backwards compatibility}*/}
							<Route
								path={`misc/${item.link}/:page?`}
								element={
									<MinigamePage
										minigame={item}
										group={null}
									/>
								}
							/>
						</React.Fragment>
					);
				},
			)}
			<Route path={'/'} element={<HomePage />} />
		</Routes>
	);
});

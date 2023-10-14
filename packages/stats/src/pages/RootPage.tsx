import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {PlayerPage} from 'pages/player/PlayerPage';
import {ClanPage} from 'pages/clan/ClanPage';
import {HomePage} from 'pages/home/HomePage';
import {minigames, Type} from 'minigames';
import {MinigamePage} from 'pages/minigame/MinigamePage';

export const RootPage: React.FunctionComponent = () =>
{

	return (
		<Routes>
			<Route
				path={'/player/:uuid'}
				element={<PlayerPage />}
			/>
			<Route
				path={'/clan/:clan'}
				element={<ClanPage />}
			/>
			{
				minigames.map((item) =>
				{

					if (item.type === Type.Gamegroup)
					{
						return null;
					}

					return (
						<Route
							path={`minigame/${item.link}/:page?`}
							element={<MinigamePage minigame={item} />}
							key={item.link}
						/>
					);
				})
			}
			<Route
				path={'/'}
				element={<HomePage />}
			/>
		</Routes>
	);
};

/**
 * Minigame/*
 */

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {PlayerPage} from 'pages/player/PlayerPage';
import {ClanPage} from 'pages/clan/ClanPage';
import {HomePage} from 'pages/home/HomePage';

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
			<Route
				path={"*"}
				element={<HomePage/>}
			/>
		</Routes>
	);
};

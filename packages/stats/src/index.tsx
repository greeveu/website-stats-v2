import React from 'react';
import ReactDOM from 'react-dom/client';
import {ConfigProvider, theme } from 'antd';
import './index.sass';
import {Layout} from 'components/layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import {ContextProvider} from 'components/context/ContextProvider';
import { configure } from "mobx"

configure({
	enforceActions: "never",
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
	    <ConfigProvider
		    theme={{
			    algorithm: theme.darkAlgorithm,
			    token: {
				    colorPrimary: '#00b96b',
			    },
		    }}
	    >
		    <ContextProvider>
			    <Layout/>
		    </ContextProvider>
	    </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

/**
 * searchbar modal popup with typing and live search for player // on side with upper body // Clanname search // and below modi search // UUID of player //
 *
 * Clans - Players (Just opens search bar)
 * Tokens - Loginstreak - Performance
 *
 * Beliebte, descending order / leaderboards
 * Knockpack PVP
 * Fastbridge Short (Fastrbridge allgemein)
 * Knockpack PVP Lab
 * Minesweeper
 *
 * ALl
 * summorize the knockpack shit?
 */

const bodyAPI = {
	"bedwars": ["name", "wins", "loses", "kills", "deaths", "brokenBeds"],
	"rush": ["name", "wins", "loses", "kills", "deaths", "brokenBeds"],
	"quake": ["name", "wins", "loses", "kills", "deaths"],
	"skywars": ["name", "wins", "loses", "kills", "deaths"],
	"knockpvp": ["name", "kills", "deaths"],
	"knockffa": ["name", "kills", "deaths"],
	"snowballfight": ["name", "kills", "deaths"],
	"1vs1": ["name", "kills", "deaths"],
	"mlgrush": ["name", "wins", "loses", "brokenBeds", "lostBeds"],
	"oneline": ["name", "kills", "deaths"],
	"qsg": ["name", "wins", "loses", "kills", "deaths"],
	"sumo": ["name", "kills", "deaths"],
	"spleef": ["name", "wins", "loses"],
	"tntrun": ["name", "wins", "loses"],
	"cores": ["name", "wins", "loses", "kills", "deaths", "brokenCores"],
	"fastbridge": ["name", "time"],
	"fastbridge_inclined": ["name", "time"],
	"fastbridge_staircase": ["name", "time"],
	"fastbridge_short": ["name", "time"],
	"fastbridge_inclined_short": ["name", "time"],
	"loginstreak": ["name", "currentstreak", "maxstreak"],
	"bowspleef": ["name", "wins", "loses"],
	"uhc": ["name", "wins", "loses", "kills", "deaths"],
	"performance": ["name", "playerperformance"],
	"clans": ["name", "tag", "size", "performance"],
	"tokens": ["name", "tokens"],
	// Minesweeper
	// Type Normal And Type Special

};

/**
 * fastbridge islands
 * - minesweeper
 * - knockpvp lab
 * - advent(s)
 */
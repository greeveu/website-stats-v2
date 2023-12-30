/**
 * Definition file for the player page
 */

export enum Type {
	Single = 'SINGLE',
	Multi = 'MULTI',
}

export enum RenderMethod {
	Raw,
	TimeS,
	TimeMs,
	Date,
	DateTime,
}

/**
 * TODO Rename file to file.schema.ts
 */

export interface MinigameSingle {
	type: Type.Single;
	title: string;
	stats: {
		[stat: string]: {
			display: string;
			renderMethod: RenderMethod;
		};
	};
}

export interface MinigameMulti {
	type: Type.Multi;
	title: string;
	keys: {
		[key: string]: {
			[value: string]: string;
		};
	};
	stats: {
		[stat: string]: {
			display: string;
			renderMethod: RenderMethod;
		};
	};
}

interface Stats {
	[minigame: string]: MinigameSingle | MinigameMulti;
}

export const playerSchema: Stats = {
	bedwars: {
		type: Type.Single,
		title: 'Bedwars',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: RenderMethod.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: RenderMethod.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: RenderMethod.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: RenderMethod.Raw,
			},
			brokenBeds: {
				display: 'Broken Beds',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	bowspleef: {
		type: Type.Single,
		title: 'Bowspleef',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: RenderMethod.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	cores: {
		type: Type.Single,
		title: 'Cores',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: RenderMethod.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: RenderMethod.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: RenderMethod.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	knockFfa: {
		type: Type.Single,
		title: 'Knock FFA',
		stats: {
			kills: {
				display: 'Kills',
				renderMethod: RenderMethod.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	knockPvp: {
		type: Type.Single,
		title: 'Knock PvP',
		stats: {
			kills: {
				display: 'Kills',
				renderMethod: RenderMethod.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	mlgrush: {
		type: Type.Single,
		title: 'MLG Rush',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: RenderMethod.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: RenderMethod.Raw,
			},
			brokenBeds: {
				display: 'Broken Beds',
				renderMethod: RenderMethod.Raw,
			},
			lostBeds: {
				display: 'Lost Beds',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	oneVsOne: {
		type: Type.Single,
		title: 'One vs one',
		stats: {
			kills: {
				display: 'Kills',
				renderMethod: RenderMethod.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	oneline: {
		type: Type.Single,
		title: 'Oneline',
		stats: {
			kills: {
				display: 'Kills',
				renderMethod: RenderMethod.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	qsg: {
		type: Type.Single,
		title: 'QSG',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: RenderMethod.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: RenderMethod.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: RenderMethod.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	quake: {
		type: Type.Single,
		title: 'Quake',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: RenderMethod.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: RenderMethod.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: RenderMethod.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	rush: {
		type: Type.Single,
		title: 'Rush',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: RenderMethod.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: RenderMethod.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: RenderMethod.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: RenderMethod.Raw,
			},
			brokenBeds: {
				display: 'Broken beds',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	skywars: {
		type: Type.Single,
		title: 'Skywars',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: RenderMethod.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: RenderMethod.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: RenderMethod.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	snowballFight: {
		type: Type.Single,
		title: 'Snowball Fight',
		stats: {
			kills: {
				display: 'Kills',
				renderMethod: RenderMethod.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	spleef: {
		type: Type.Single,
		title: 'Spleef',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: RenderMethod.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	tntrun: {
		type: Type.Single,
		title: 'Tnt run',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: RenderMethod.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	uhc: {
		type: Type.Single,
		title: 'UHC',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: RenderMethod.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: RenderMethod.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: RenderMethod.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	minesweeper: {
		type: Type.Multi,
		title: 'Minesweeeper',
		keys: {
			generator: {
				OG: 'Microsoft',
				GREEV: 'Greev.eu',
				NO_GUESSING: 'No Guessing',
				SPEEDRUN: 'Speedrun',
			},
			type: {
				EASY: 'Easy',
				MEDIUM: 'Medium',
				HARD: 'Hard',
				EXTREME: 'Extreme',
				HELL: 'Hell',
			},
		},
		stats: {
			time: {
				display: 'Time',
				renderMethod: RenderMethod.TimeMs,
			},
		},
	},
	fastbridge: {
		type: Type.Multi,
		title: 'Fastbridge',
		keys: {
			mode: {
				NORMAL: 'Normal',
				ISLANDS: 'Islands',
				INCLINED: 'Inclined',
				INCLINED_SHORT: 'Inclined Short',
				SHORT: 'Short',
				STAIRCASE: 'Staircase',
			},
			map: {
				CUBES: 'Cubes',
				RAILS: 'Rails',
				STREET: 'Street',
				CORAL: 'Coral',
				ATHEN: 'Athen',
			},
		},
		stats: {
			time: {
				display: 'Time',
				renderMethod: RenderMethod.TimeS,
			},
		},
	},
};

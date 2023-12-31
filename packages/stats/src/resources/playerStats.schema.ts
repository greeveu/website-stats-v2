/**
 * Definition file for the player page
 */

export enum StatType {
	Single = 'SINGLE',
	Multi = 'MULTI',
}

export enum StatRender {
	Raw,
	TimeS,
	TimeMs,
	Date,
	DateTime,
}

export interface PlayerStatSingle {
	type: StatType.Single;
	title: string;
	stats: {
		[stat: string]: {
			display: string;
			renderMethod: StatRender;
		};
	};
}

export interface PlayerStatMulti {
	type: StatType.Multi;
	title: string;
	keys: {
		[key: string]: {
			[value: string]: string;
		};
	};
	/**
	 * Currently a single stat is supported
	 */
	stats: {
		[stat: string]: {
			display: string;
			renderMethod: StatRender;
		};
	};
}

interface Stats {
	[minigame: string]: PlayerStatSingle | PlayerStatMulti;
}

export const playerStatsSchema: Stats = {
	bedwars: {
		type: StatType.Single,
		title: 'Bedwars',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: StatRender.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: StatRender.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: StatRender.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: StatRender.Raw,
			},
			brokenBeds: {
				display: 'Broken Beds',
				renderMethod: StatRender.Raw,
			},
		},
	},
	bowspleef: {
		type: StatType.Single,
		title: 'Bowspleef',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: StatRender.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: StatRender.Raw,
			},
		},
	},
	cores: {
		type: StatType.Single,
		title: 'Cores',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: StatRender.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: StatRender.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: StatRender.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: StatRender.Raw,
			},
		},
	},
	knockFfa: {
		type: StatType.Single,
		title: 'Knock FFA',
		stats: {
			kills: {
				display: 'Kills',
				renderMethod: StatRender.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: StatRender.Raw,
			},
		},
	},
	knockPvp: {
		type: StatType.Single,
		title: 'Knock PvP',
		stats: {
			kills: {
				display: 'Kills',
				renderMethod: StatRender.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: StatRender.Raw,
			},
		},
	},
	mlgrush: {
		type: StatType.Single,
		title: 'MLG Rush',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: StatRender.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: StatRender.Raw,
			},
			brokenBeds: {
				display: 'Broken Beds',
				renderMethod: StatRender.Raw,
			},
			lostBeds: {
				display: 'Lost Beds',
				renderMethod: StatRender.Raw,
			},
		},
	},
	oneVsOne: {
		type: StatType.Single,
		title: 'One vs one',
		stats: {
			kills: {
				display: 'Kills',
				renderMethod: StatRender.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: StatRender.Raw,
			},
		},
	},
	oneline: {
		type: StatType.Single,
		title: 'Oneline',
		stats: {
			kills: {
				display: 'Kills',
				renderMethod: StatRender.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: StatRender.Raw,
			},
		},
	},
	qsg: {
		type: StatType.Single,
		title: 'QSG',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: StatRender.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: StatRender.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: StatRender.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: StatRender.Raw,
			},
		},
	},
	quake: {
		type: StatType.Single,
		title: 'Quake',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: StatRender.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: StatRender.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: StatRender.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: StatRender.Raw,
			},
		},
	},
	rush: {
		type: StatType.Single,
		title: 'Rush',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: StatRender.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: StatRender.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: StatRender.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: StatRender.Raw,
			},
			brokenBeds: {
				display: 'Broken beds',
				renderMethod: StatRender.Raw,
			},
		},
	},
	skywars: {
		type: StatType.Single,
		title: 'Skywars',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: StatRender.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: StatRender.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: StatRender.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: StatRender.Raw,
			},
		},
	},
	snowballFight: {
		type: StatType.Single,
		title: 'Snowball Fight',
		stats: {
			kills: {
				display: 'Kills',
				renderMethod: StatRender.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: StatRender.Raw,
			},
		},
	},
	spleef: {
		type: StatType.Single,
		title: 'Spleef',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: StatRender.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: StatRender.Raw,
			},
		},
	},
	tntrun: {
		type: StatType.Single,
		title: 'Tnt run',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: StatRender.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: StatRender.Raw,
			},
		},
	},
	uhc: {
		type: StatType.Single,
		title: 'UHC',
		stats: {
			wins: {
				display: 'Wins',
				renderMethod: StatRender.Raw,
			},
			loses: {
				display: 'Loses',
				renderMethod: StatRender.Raw,
			},
			kills: {
				display: 'Kills',
				renderMethod: StatRender.Raw,
			},
			deaths: {
				display: 'Deaths',
				renderMethod: StatRender.Raw,
			},
		},
	},
	minesweeper: {
		type: StatType.Multi,
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
				renderMethod: StatRender.TimeMs,
			},
		},
	},
	fastbridge: {
		type: StatType.Multi,
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
				renderMethod: StatRender.TimeS,
			},
		},
	},
};

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
	KillsDeathsRow,
	WinsLosesRow,
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
			wl: {
				display: '',
				renderMethod: StatRender.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: StatRender.KillsDeathsRow,
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
			wl: {
				display: '',
				renderMethod: StatRender.WinsLosesRow,
			},
		},
	},
	cores: {
		type: StatType.Single,
		title: 'Cores',
		stats: {
			wl: {
				display: '',
				renderMethod: StatRender.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: StatRender.KillsDeathsRow,
			},
		},
	},
	knockFfa: {
		type: StatType.Single,
		title: 'Knock FFA',
		stats: {
			kd: {
				display: '',
				renderMethod: StatRender.KillsDeathsRow,
			},
		},
	},
	knockPvp: {
		type: StatType.Single,
		title: 'Knock PvP',
		stats: {
			kd: {
				display: '',
				renderMethod: StatRender.KillsDeathsRow,
			},
		},
	},
	mlgrush: {
		type: StatType.Single,
		title: 'MLG Rush',
		stats: {
			wl: {
				display: '',
				renderMethod: StatRender.WinsLosesRow,
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
			kd: {
				display: '',
				renderMethod: StatRender.KillsDeathsRow,
			},
		},
	},
	oneline: {
		type: StatType.Single,
		title: 'Oneline',
		stats: {
			kd: {
				display: '',
				renderMethod: StatRender.KillsDeathsRow,
			},
		},
	},
	qsg: {
		type: StatType.Single,
		title: 'QSG',
		stats: {
			wl: {
				display: '',
				renderMethod: StatRender.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: StatRender.KillsDeathsRow,
			},
		},
	},
	quake: {
		type: StatType.Single,
		title: 'Quake',
		stats: {
			wl: {
				display: '',
				renderMethod: StatRender.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: StatRender.KillsDeathsRow,
			},
		},
	},
	rush: {
		type: StatType.Single,
		title: 'Rush',
		stats: {
			wl: {
				display: '',
				renderMethod: StatRender.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: StatRender.KillsDeathsRow,
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
			wl: {
				display: '',
				renderMethod: StatRender.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: StatRender.KillsDeathsRow,
			},
		},
	},
	snowballFight: {
		type: StatType.Single,
		title: 'Snowball Fight',
		stats: {
			kd: {
				display: '',
				renderMethod: StatRender.KillsDeathsRow,
			},
		},
	},
	spleef: {
		type: StatType.Single,
		title: 'Spleef',
		stats: {
			wl: {
				display: '',
				renderMethod: StatRender.WinsLosesRow,
			},
		},
	},
	tntrun: {
		type: StatType.Single,
		title: 'Tnt run',
		stats: {
			wl: {
				display: '',
				renderMethod: StatRender.WinsLosesRow,
			},
		},
	},
	uhc: {
		type: StatType.Single,
		title: 'UHC',
		stats: {
			wl: {
				display: '',
				renderMethod: StatRender.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: StatRender.KillsDeathsRow,
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

import { PlayersSchema, RenderMethod, StatType } from "resources/players/players.types.ts";

export const playersSchema: PlayersSchema = {
	bedwars: {
		type: StatType.Single,
		title: 'Bedwars',
		stats: {
			wl: {
				display: '',
				renderMethod: RenderMethod.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: RenderMethod.KillsDeathsRow,
			},
			brokenBeds: {
				display: 'Broken Beds',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	bowspleef: {
		type: StatType.Single,
		title: 'Bowspleef',
		stats: {
			wl: {
				display: '',
				renderMethod: RenderMethod.WinsLosesRow,
			},
		},
	},
	cores: {
		type: StatType.Single,
		title: 'Cores',
		stats: {
			wl: {
				display: '',
				renderMethod: RenderMethod.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: RenderMethod.KillsDeathsRow,
			},
		},
	},
	knockFfa: {
		type: StatType.Single,
		title: 'Knock FFA',
		stats: {
			kd: {
				display: '',
				renderMethod: RenderMethod.KillsDeathsRow,
			},
		},
	},
	knockPvp: {
		type: StatType.Single,
		title: 'Knock PvP',
		stats: {
			kd: {
				display: '',
				renderMethod: RenderMethod.KillsDeathsRow,
			},
		},
	},
	mlgrush: {
		type: StatType.Single,
		title: 'MLG Rush',
		stats: {
			wl: {
				display: '',
				renderMethod: RenderMethod.WinsLosesRow,
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
		type: StatType.Single,
		title: 'One vs one',
		stats: {
			kd: {
				display: '',
				renderMethod: RenderMethod.KillsDeathsRow,
			},
		},
	},
	oneline: {
		type: StatType.Single,
		title: 'Oneline',
		stats: {
			kd: {
				display: '',
				renderMethod: RenderMethod.KillsDeathsRow,
			},
		},
	},
	qsg: {
		type: StatType.Single,
		title: 'QSG',
		stats: {
			wl: {
				display: '',
				renderMethod: RenderMethod.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: RenderMethod.KillsDeathsRow,
			},
		},
	},
	quake: {
		type: StatType.Single,
		title: 'Quake',
		stats: {
			wl: {
				display: '',
				renderMethod: RenderMethod.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: RenderMethod.KillsDeathsRow,
			},
		},
	},
	rush: {
		type: StatType.Single,
		title: 'Rush',
		stats: {
			wl: {
				display: '',
				renderMethod: RenderMethod.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: RenderMethod.KillsDeathsRow,
			},
			brokenBeds: {
				display: 'Broken beds',
				renderMethod: RenderMethod.Raw,
			},
		},
	},
	skywars: {
		type: StatType.Single,
		title: 'Skywars',
		stats: {
			wl: {
				display: '',
				renderMethod: RenderMethod.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: RenderMethod.KillsDeathsRow,
			},
		},
	},
	snowballFight: {
		type: StatType.Single,
		title: 'Snowball Fight',
		stats: {
			kd: {
				display: '',
				renderMethod: RenderMethod.KillsDeathsRow,
			},
		},
	},
	spleef: {
		type: StatType.Single,
		title: 'Spleef',
		stats: {
			wl: {
				display: '',
				renderMethod: RenderMethod.WinsLosesRow,
			},
		},
	},
	tntrun: {
		type: StatType.Single,
		title: 'Tnt run',
		stats: {
			wl: {
				display: '',
				renderMethod: RenderMethod.WinsLosesRow,
			},
		},
	},
	uhc: {
		type: StatType.Single,
		title: 'UHC',
		stats: {
			wl: {
				display: '',
				renderMethod: RenderMethod.WinsLosesRow,
			},
			kd: {
				display: '',
				renderMethod: RenderMethod.KillsDeathsRow,
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
				renderMethod: RenderMethod.TimeMs,
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
				renderMethod: RenderMethod.TimeS,
			},
		},
	},
};

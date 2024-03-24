// Non minigame images
import clans from 'media/minigames/clans.jpg';
import performance from 'media/minigames/performance.jpg';
import tokens from 'media/minigames/tokens.jpg';
import loginstreak from 'media/minigames/loginstreak.jpg';
import advent from 'media/minigames/advent.jpg';

// Knockpvp images
import knockpvp_normal from 'media/minigames/knockpvp_normal.jpg';
import knockpvp_ffa from 'media/minigames/knockpvp_ffa.jpg';
import knockpvp_lab from 'media/minigames/knockpvp_lab.jpg';

// Event images
import knockpvp_event from 'media/minigames/knockpvp_normal.jpg';
import minesweeper_event from 'media/minigames/minesweeper.jpg';

// Fastbridge images
import fastbridge_normal from 'media/minigames/fastbridge_normal.jpg';
import fastbridge_islands from 'media/minigames/fastbridge_islands.jpg';
import fastbridge_inclined from 'media/minigames/fastbridge_inclined.jpg';
import fastbridge_short from 'media/minigames/fastbridge_short.jpg';
import fastbridge_staircase from 'media/minigames/fastbridge_staircase.jpg';
import fastbridge_inclinedShort from 'media/minigames/fastbridge_inclinedShort.jpg';

// Spleef images
import spleef_normal from 'media/minigames/spleef_normal.jpg';
import spleef_bow from 'media/minigames/spleef_bow.jpg';

// Other images
import minesweeper from 'media/minigames/minesweeper.jpg';
import bedwars from 'media/minigames/bedwars.jpg';
import rush from 'media/minigames/rush.jpg';
import quake from 'media/minigames/quake.jpg';
import skywars from 'media/minigames/skywars.jpg';
import snowballfight from 'media/minigames/snowballfight.jpg';
import onevs1 from 'media/minigames/1vs1.jpg';
import mlgrush from 'media/minigames/mlgrush.jpg';
import oneline from 'media/minigames/oneline.jpg';
import qsg from 'media/minigames/qsg.jpg';
import sumo from 'media/minigames/sumo.jpg';
import tntrun from 'media/minigames/tntrun.jpg';
import cores from 'media/minigames/cores.jpg';
import uhc from 'media/minigames/uhc.jpg';

/**
 * Discriminate between a single minigame and a game group containing single minigames
 */
export enum MinigameType {
	Minigame,
	Gamegroup,
}

export enum ApiType {
	/**
	 * Assumes following <br/>
	 * name + uuid in response <br/>
	 * amount + offset parameter
	 */
	Normal,
	WithParams,
}

/**
 * Defines the group at the home page as well as url prefix
 */
export enum Group {
	/**
	 * Misc group, /minigame/ url prefix
	 */
	Featured,
	/**
	 * Minigame group, /minigame/ url prefix
	 */
	Minigames,
	/**
	 * Misc group, /misc/ url prefix
	 */
	Misc,
}

export enum OptionType {
	Select,
}

export interface SelectOption {
	display: string;
	type: OptionType.Select;
	options: Record<string, string>;
	default: string;
}

export type Option = SelectOption;

export enum MinigameRender {
	Raw,
	Clan,
	Player,
	TimeS,
	TimeMs,
	KillsDeaths,
	WinsLoses,
}

export interface Data {
	display: string;
	renderMethod: MinigameRender;
}

export interface Api {
	type: ApiType;
	endpoint: string;
	data: Record<string, Data>;
	options?: Record<string, Option>;
}

export interface BaseMinigame {
	/**
	 * Page title & card
	 */
	title: string;
	image: string;
	link: string;
	api: Api;
}

export interface SingleMinigame extends BaseMinigame {
	type: MinigameType.Minigame;
	group: Group;
}

export interface MultiMinigame extends BaseMinigame {
	type: MinigameType.Minigame;
	/**
	 * Subtitle on multi cards
	 */
	subtitle: string;
}

export interface MinigameGroup {
	type: MinigameType.Gamegroup;
	link: string;
	title: string;
	subTitle: string;
	minigames: MultiMinigame[];
	group: Group;
}

export const minigamesSchema: (SingleMinigame | MinigameGroup)[] = [
	{
		type: MinigameType.Minigame,
		link: 'advent',
		title: 'Advent Calendar',
		image: advent,
		group: Group.Featured,
		api: {
			endpoint: '/stats/advent/top/:year/:door',
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				time: {
					display: 'Time',
					renderMethod: MinigameRender.TimeMs,
				},
				fails: {
					display: 'Fails',
					renderMethod: MinigameRender.Raw,
				},
				checkpoints: {
					display: 'Checkpoints',
					renderMethod: MinigameRender.Raw,
				},
			},
			options: {
				year: {
					display: 'Year',
					type: OptionType.Select,
					options: {
						'2019': '2019',
						'2020': '2020',
						'2021': '2021',
						'2022': '2022',
						'2023': '2023',
					},
					default: '2023',
				},
				door: {
					display: 'Door',
					type: OptionType.Select,
					options: {
						'1': '1',
						'2': '2',
						'3': '3',
						'4': '4',
						'5': '5',
						'6': '6',
						'7': '7',
						'8': '8',
						'9': '9',
						'10': '10',
						'11': '11',
						'12': '12',
						'13': '13',
						'14': '14',
						'15': '15',
						'16': '16',
						'17': '17',
						'18': '18',
						'19': '19',
						'20': '20',
						'21': '21',
						'22': '22',
						'23': '23',
						'24': '24',
					},
					default: '1',
				},
			},
		},
	},
	{
		type: MinigameType.Gamegroup,
		link: 'fastbridge',
		title: 'Fastbridge',
		subTitle: '6 Modes',
		group: Group.Featured,
		minigames: [
			{
				type: MinigameType.Minigame,
				link: 'normal',
				title: 'Fastbridge',
				subtitle: 'Normal',
				image: fastbridge_normal,
				api: {
					type: ApiType.Normal,
					endpoint: '/stats/fastbridge/top',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						time: {
							display: 'Time',
							renderMethod: MinigameRender.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: MinigameRender.Raw,
						},
					},
					options: undefined,
				},
			},
			{
				type: MinigameType.Minigame,
				link: 'island',
				title: 'Fastbridge Islands',
				subtitle: 'Islands',
				image: fastbridge_islands,
				api: {
					type: ApiType.Normal,
					endpoint: '/stats/fastbridge_islands/top/:map',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						time: {
							display: 'Time',
							renderMethod: MinigameRender.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: MinigameRender.Raw,
						},
					},
					options: {
						map: {
							type: OptionType.Select,
							display: 'Map',
							default: 'CUBES',
							options: {
								CUBES: 'Cubes',
								RAILS: 'Rails',
								STREET: 'Street',
								CORAL: 'Coral',
								ATHEN: 'Athen',
							},
						},
					},
				},
			},
			{
				type: MinigameType.Minigame,
				link: 'inclined',
				title: 'Fastbridge Inclined',
				subtitle: 'Inclined',
				image: fastbridge_inclined,
				api: {
					type: ApiType.Normal,
					endpoint: '/stats/fastbridge_inclined/top',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						time: {
							display: 'Time',
							renderMethod: MinigameRender.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: MinigameRender.Raw,
						},
					},
					options: undefined,
				},
			},
			{
				type: MinigameType.Minigame,
				link: 'staircase',
				title: 'Fastbridge Staircase',
				subtitle: 'Staircase',
				image: fastbridge_staircase,
				api: {
					type: ApiType.Normal,
					endpoint: '/stats/fastbridge_staircase/top',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						time: {
							display: 'Time',
							renderMethod: MinigameRender.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: MinigameRender.Raw,
						},
					},
					options: undefined,
				},
			},
			{
				type: MinigameType.Minigame,
				link: 'short',
				title: 'Fastbridge Short',
				subtitle: 'Short',
				image: fastbridge_short,
				api: {
					type: ApiType.Normal,
					endpoint: '/stats/fastbridge_short/top',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						time: {
							display: 'Time',
							renderMethod: MinigameRender.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: MinigameRender.Raw,
						},
					},
					options: undefined,
				},
			},
			{
				type: MinigameType.Minigame,
				link: 'inclined_short',
				title: 'Fastbridge Inclined Short',
				subtitle: 'Inclined Short',
				image: fastbridge_inclinedShort,
				api: {
					type: ApiType.Normal,
					endpoint: '/stats/fastbridge_inclined_short/top',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						time: {
							display: 'Time',
							renderMethod: MinigameRender.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: MinigameRender.Raw,
						},
					},
					options: undefined,
				},
			},
		],
	},
	{
		type: MinigameType.Gamegroup,
		link: 'knockpvp',
		title: 'KnockPVP',
		subTitle: '3 Modes',
		group: Group.Featured,
		minigames: [
			{
				type: MinigameType.Minigame,
				link: 'normal',
				title: 'KnockPvP',
				subtitle: 'Normal',
				image: knockpvp_normal,
				api: {
					type: ApiType.Normal,
					endpoint: '/stats/knockpvp/top',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						kills: {
							display: 'Kills',
							renderMethod: MinigameRender.Raw,
						},
						deaths: {
							display: 'Deaths',
							renderMethod: MinigameRender.Raw,
						},
						kd: {
							display: 'K/D',
							renderMethod: MinigameRender.KillsDeaths,
						},
					},
					options: undefined,
				},
			},
			{
				type: MinigameType.Minigame,
				link: 'ffa',
				title: 'KnockFFA',
				subtitle: 'FFA',
				image: knockpvp_ffa,
				api: {
					type: ApiType.Normal,
					endpoint: '/stats/knockffa/top',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						kills: {
							display: 'Kills',
							renderMethod: MinigameRender.Raw,
						},
						deaths: {
							display: 'Deaths',
							renderMethod: MinigameRender.Raw,
						},
						kd: {
							display: 'K/D',
							renderMethod: MinigameRender.KillsDeaths,
						},
					},
					options: undefined,
				},
			},
			{
				type: MinigameType.Minigame,
				link: 'lab',
				title: 'KnockPvP Lab',
				subtitle: 'LAB',
				image: knockpvp_lab,
				api: {
					type: ApiType.Normal,
					endpoint: '/stats/knockpvplab/top/:experiment',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						kills: {
							display: 'Kills',
							renderMethod: MinigameRender.Raw,
						},
						deaths: {
							display: 'Deaths',
							renderMethod: MinigameRender.Raw,
						},
						kd: {
							display: 'K/D',
							renderMethod: MinigameRender.KillsDeaths,
						},
					},
					options: {
						experiment: {
							display: 'Experiment',
							type: OptionType.Select,
							default: 'KNOCKFFA',
							options: {
								DOUBLEJUMP: 'Double Jump',
								TNTJUMP: 'TNT',
								FIREBALL: 'Fireballs',
								GRAPPLING_HOOK: 'Grappling Hook',
								SWITCHBALLS: 'Switcher',
								SUMO: 'Sumo',
								KNOCKSTICK: 'Knock Stick',
								KNOCKFFA: 'Knock FFA',
							},
						},
					},
				},
			},
		],
	},
	{
		type: MinigameType.Minigame,
		link: 'minesweeper',
		title: 'Minesweeper',
		image: minesweeper,
		group: Group.Featured,
		api: {
			endpoint: '/stats/minesweeper/top/:difficulty/:generator',
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				time: {
					display: 'Time',
					renderMethod: MinigameRender.TimeMs,
				},
			},
			options: {
				difficulty: {
					display: 'Difficulty',
					type: OptionType.Select,
					options: {
						EASY: 'Easy',
						MEDIUM: 'Medium',
						HARD: 'Hard',
						EXTREME: 'Extreme',
						HELL: 'Hell',
					},
					default: 'MEDIUM',
				},
				generator: {
					display: 'Generator',
					type: OptionType.Select,
					options: {
						OG: 'Microsoft',
						GREEV: 'Greev',
						NO_GUESSING: 'No Guessing',
						SPEEDRUN: 'Speedrun',
					},
					default: 'GREEV',
				},
			},
		},
	},
	{
		type: MinigameType.Gamegroup,
		link: 'events',
		title: 'Events',
		subTitle: '2 Events',
		group: Group.Misc,
		minigames: [
			{
				type: MinigameType.Minigame,
				link: 'knockpvp_2023',
				title: 'KnockPvP Event',
				subtitle: 'KnockPVP 2023',
				image: knockpvp_event,
				api: {
					type: ApiType.WithParams,
					endpoint: '/stats/knockpvp/rollingTop?startTimestamp=1684108800&endTimestamp=1684713600',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						kills: {
							display: 'Kills',
							renderMethod: MinigameRender.Raw,
						},
						deaths: {
							display: 'Deaths',
							renderMethod: MinigameRender.Raw,
						},
						kd: {
							display: 'K/D',
							renderMethod: MinigameRender.KillsDeaths,
						},
					},
					options: undefined,
				},
			},
			{
				type: MinigameType.Minigame,
				link: 'minesweeper_2024',
				title: 'Minesweeper Event',
				subtitle: 'Minesweeper 2024',
				image: minesweeper_event,
				api: {
					type: ApiType.WithParams,
					endpoint: '/stats/minesweeper/top/MEDIUM/GREEV?mode=DEFAULT&rankingCriteria=MASTERY&start=1711321200&end=1712527199',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						mastery: {
							display: 'Mastery',
							renderMethod: MinigameRender.Raw,
						},
					},
					options: undefined,
				},
			},
		],
	},
	{
		type: MinigameType.Minigame,
		link: 'mlgrush',
		title: 'MLG Rush',
		image: mlgrush,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				wins: {
					display: 'Wins',
					renderMethod: MinigameRender.Raw,
				},
				loses: {
					display: 'Loses',
					renderMethod: MinigameRender.Raw,
				},
				wl: {
					display: 'W/L',
					renderMethod: MinigameRender.WinsLoses,
				},
				brokenBeds: {
					display: 'Broken Beds',
					renderMethod: MinigameRender.Raw,
				},
				lostBeds: {
					display: 'Lost Beds',
					renderMethod: MinigameRender.Raw,
				},
			},
			endpoint: '/stats/mlgrush/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'bedwars',
		title: 'Bedwars',
		image: bedwars,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				wins: {
					display: 'Wins',
					renderMethod: MinigameRender.Raw,
				},
				loses: {
					display: 'Loses',
					renderMethod: MinigameRender.Raw,
				},
				wl: {
					display: 'W/L',
					renderMethod: MinigameRender.WinsLoses,
				},
				kills: {
					display: 'Kills',
					renderMethod: MinigameRender.Raw,
				},
				brokenBeds: {
					display: 'Broken Beds',
					renderMethod: MinigameRender.Raw,
				},
			},
			endpoint: '/stats/bedwars/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'rush',
		title: 'Rush',
		image: rush,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				wins: {
					display: 'Wins',
					renderMethod: MinigameRender.Raw,
				},
				loses: {
					display: 'Loses',
					renderMethod: MinigameRender.Raw,
				},
				wl: {
					display: 'W/L',
					renderMethod: MinigameRender.WinsLoses,
				},
				kills: {
					display: 'Kills',
					renderMethod: MinigameRender.Raw,
				},
				deaths: {
					display: 'Deaths',
					renderMethod: MinigameRender.Raw,
				},
				kd: {
					display: 'K/D',
					renderMethod: MinigameRender.KillsDeaths,
				},
				brokenBeds: {
					display: 'Broken Beds',
					renderMethod: MinigameRender.Raw,
				},
			},
			endpoint: '/stats/rush/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'skywars',
		title: 'Skywars',
		image: skywars,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				wins: {
					display: 'Wins',
					renderMethod: MinigameRender.Raw,
				},
				loses: {
					display: 'Loses',
					renderMethod: MinigameRender.Raw,
				},
				wl: {
					display: 'W/L',
					renderMethod: MinigameRender.WinsLoses,
				},
				kills: {
					display: 'Kills',
					renderMethod: MinigameRender.Raw,
				},
				deaths: {
					display: 'Deaths',
					renderMethod: MinigameRender.Raw,
				},
				kd: {
					display: 'K/D',
					renderMethod: MinigameRender.KillsDeaths,
				},
			},
			endpoint: '/stats/skywars/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'tntrun',
		title: 'TnT Run',
		image: tntrun,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				wins: {
					display: 'Wins',
					renderMethod: MinigameRender.Raw,
				},
				loses: {
					display: 'Loses',
					renderMethod: MinigameRender.Raw,
				},
				wl: {
					display: 'W/L',
					renderMethod: MinigameRender.WinsLoses,
				},
			},
			endpoint: '/stats/tntrun/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'cores',
		title: 'Cores',
		image: cores,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				wins: {
					display: 'Wins',
					renderMethod: MinigameRender.Raw,
				},
				loses: {
					display: 'Loses',
					renderMethod: MinigameRender.Raw,
				},
				wl: {
					display: 'W/L',
					renderMethod: MinigameRender.WinsLoses,
				},
				kills: {
					display: 'Kills',
					renderMethod: MinigameRender.Raw,
				},
				deaths: {
					display: 'Deaths',
					renderMethod: MinigameRender.Raw,
				},
				kd: {
					display: 'K/D',
					renderMethod: MinigameRender.KillsDeaths,
				},
				brokenCores: {
					display: 'Broken Cores',
					renderMethod: MinigameRender.Raw,
				},
			},
			endpoint: '/stats/cores/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'qsg',
		title: 'QSG',
		image: qsg,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				wins: {
					display: 'Wins',
					renderMethod: MinigameRender.Raw,
				},
				loses: {
					display: 'Loses',
					renderMethod: MinigameRender.Raw,
				},
				wl: {
					display: 'W/L',
					renderMethod: MinigameRender.WinsLoses,
				},
				kills: {
					display: 'Kills',
					renderMethod: MinigameRender.Raw,
				},
				deaths: {
					display: 'Deaths',
					renderMethod: MinigameRender.Raw,
				},
				kd: {
					display: 'K/D',
					renderMethod: MinigameRender.KillsDeaths,
				},
			},
			endpoint: '/stats/qsg/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'quake',
		title: 'Quake',
		image: quake,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				wins: {
					display: 'Wins',
					renderMethod: MinigameRender.Raw,
				},
				loses: {
					display: 'Loses',
					renderMethod: MinigameRender.Raw,
				},
				wl: {
					display: 'W/L',
					renderMethod: MinigameRender.WinsLoses,
				},
				kills: {
					display: 'Kills',
					renderMethod: MinigameRender.Raw,
				},
				deaths: {
					display: 'Deaths',
					renderMethod: MinigameRender.Raw,
				},
				kd: {
					display: 'K/D',
					renderMethod: MinigameRender.KillsDeaths,
				},
			},
			endpoint: '/stats/quake/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'snowballfight',
		title: 'Snowballfight',
		image: snowballfight,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				kills: {
					display: 'Kills',
					renderMethod: MinigameRender.Raw,
				},
				deaths: {
					display: 'Deaths',
					renderMethod: MinigameRender.Raw,
				},
				kd: {
					display: 'K/D',
					renderMethod: MinigameRender.KillsDeaths,
				},
			},
			endpoint: '/stats/snowballfight/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: '1vs1',
		title: '1vs1',
		image: onevs1,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				kills: {
					display: 'Kills',
					renderMethod: MinigameRender.Raw,
				},
				deaths: {
					display: 'Deaths',
					renderMethod: MinigameRender.Raw,
				},
				kd: {
					display: 'K/D',
					renderMethod: MinigameRender.KillsDeaths,
				},
			},
			endpoint: '/stats/1vs1/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'oneline',
		title: 'OneLine',
		image: oneline,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				kills: {
					display: 'Kills',
					renderMethod: MinigameRender.Raw,
				},
				deaths: {
					display: 'Deaths',
					renderMethod: MinigameRender.Raw,
				},
				kd: {
					display: 'K/D',
					renderMethod: MinigameRender.KillsDeaths,
				},
			},
			endpoint: '/stats/oneline/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'sumo',
		title: 'Sumo',
		image: sumo,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				kills: {
					display: 'Kills',
					renderMethod: MinigameRender.Raw,
				},
				deaths: {
					display: 'Deaths',
					renderMethod: MinigameRender.Raw,
				},
				kd: {
					display: 'K/D',
					renderMethod: MinigameRender.KillsDeaths,
				},
			},

			endpoint: '/stats/sumo/top',
		},
	},
	{
		type: MinigameType.Gamegroup,
		link: 'spleef',
		title: 'Spleef',
		subTitle: '2 Modes',
		group: Group.Minigames,
		minigames: [
			{
				type: MinigameType.Minigame,
				link: 'normal',
				title: 'Spleef',
				subtitle: 'Normal',
				image: spleef_normal,
				api: {
					type: ApiType.Normal,
					endpoint: '/stats/spleef/top',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						wins: {
							display: 'Wins',
							renderMethod: MinigameRender.Raw,
						},
						loses: {
							display: 'Loses',
							renderMethod: MinigameRender.Raw,
						},
						wl: {
							display: 'W/L',
							renderMethod: MinigameRender.WinsLoses,
						},
					},
				},
			},
			{
				type: MinigameType.Minigame,
				link: 'bow',
				title: 'Bow Spleef',
				subtitle: 'Bow Spleef',
				image: spleef_bow,
				api: {
					type: ApiType.Normal,
					endpoint: '/stats/bowspleef/top',
					data: {
						name: {
							display: 'Player',
							renderMethod: MinigameRender.Player,
						},
						wins: {
							display: 'Wins',
							renderMethod: MinigameRender.Raw,
						},
						loses: {
							display: 'Loses',
							renderMethod: MinigameRender.Raw,
						},
						wl: {
							display: 'W/L',
							renderMethod: MinigameRender.WinsLoses,
						},
					},
				},
			},
		],
	},
	{
		type: MinigameType.Minigame,
		link: 'uhc',
		title: 'UHC',
		image: uhc,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				wins: {
					display: 'Wins',
					renderMethod: MinigameRender.Raw,
				},
				loses: {
					display: 'Loses',
					renderMethod: MinigameRender.Raw,
				},
				wl: {
					display: 'W/L',
					renderMethod: MinigameRender.WinsLoses,
				},
				kills: {
					display: 'Kills',
					renderMethod: MinigameRender.Raw,
				},
				deaths: {
					display: 'Deaths',
					renderMethod: MinigameRender.Raw,
				},
				kd: {
					display: 'K/D',
					renderMethod: MinigameRender.KillsDeaths,
				},
			},
			endpoint: '/stats/uhc/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'clans',
		title: 'Clans',
		image: clans,
		group: Group.Misc,
		api: {
			type: ApiType.Normal,
			endpoint: '/clan/top',
			data: {
				name: {
					display: 'Name',
					renderMethod: MinigameRender.Clan,
				},
				size: {
					display: 'Size',
					renderMethod: MinigameRender.Raw,
				},
				playerperformance: {
					display: 'Combined PP',
					renderMethod: MinigameRender.Raw,
				},
			},
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'performance',
		title: 'Performance',
		image: performance,
		group: Group.Misc,
		api: {
			type: ApiType.Normal,
			endpoint: '/stats/performance/top',
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				playerperformance: {
					display: 'Performance',
					renderMethod: MinigameRender.Raw,
				},
			},
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'tokens',
		title: 'Tokens',
		image: tokens,
		group: Group.Misc,
		api: {
			type: ApiType.Normal,
			endpoint: '/stats/tokens/top',
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				tokens: {
					display: 'Amount',
					renderMethod: MinigameRender.Raw,
				},
			},
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'loginstreak',
		title: 'Loginstreak',
		image: loginstreak,
		group: Group.Misc,
		api: {
			type: ApiType.Normal,
			endpoint: '/stats/loginstreak/top',
			data: {
				name: {
					display: 'Player',
					renderMethod: MinigameRender.Player,
				},
				currentstreak: {
					display: 'Current streak',
					renderMethod: MinigameRender.Raw,
				},
				maxstreak: {
					display: 'Highest streak',
					renderMethod: MinigameRender.Raw,
				},
			},
		},
	},
];

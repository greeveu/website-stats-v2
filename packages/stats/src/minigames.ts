// Non minigame images
import clans from 'media/minigames/clans.jpg';
import performance from 'media/minigames/performance.jpg';
import tokens from 'media/minigames/tokens.jpg';
import loginstreak from 'media/minigames/loginstreak.jpg';

// Knockpvp images
import knockpvp_normal from 'media/minigames/knockpvp_normal.jpg';
import knockpvp_ffa from 'media/minigames/knockpvp_ffa.jpg';
import knockpvp_lab from 'media/minigames/knockpvp_lab.jpg';
import knockpvp_wars from 'media/minigames/knockpvp_wars.jpg';

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

export enum Type
{
	Minigame,
	Gamegroup
}

export enum ApiType
{
	/**
	 * Assumes following <br/>
	 * name + uuid in response <br/>
	 * amount + offset parameter
	 */
	Normal
}

export enum Group
{
	Misc,
	Featured,
	Minigames,
}

export enum OptionType
{
	Select
}

export interface SelectOption
{
	display: string;
	type: OptionType.Select;
	options: Record<string, string>;
	default: string;
}

export type Option = SelectOption

export enum RenderMethod
{
	Raw,
	Player,
	Time,
}

export interface Data
{
	display: string,
	renderMethod: RenderMethod
}

export interface Api
{
	type: ApiType,
	endpoint: string,
	data: Record<string, Data>
	options?: Record<string, Option>
}

interface BaseMinigame
{
	/**
	 * Page title & card
	 */
	title: string,
	image: string,
	/**
	 * TODO, remove fields
	 */
	fields?: string[],
	link: string,
	api: Api
}

const apiMock: Api = {
	type: ApiType.Normal,
	data: {},
	endpoint: '',
	options: undefined,
};

export interface SingleMinigame extends BaseMinigame
{
	type: Type.Minigame
	group: Group,
}

export interface MultiMinigame extends BaseMinigame
{
	type: Type.Minigame;
	/**
	 * Subbtitle on multi cards
	 */
	subtitle: string;
}

export interface MinigameGroup
{
	type: Type.Gamegroup
	link: string,
	title: string,
	subTitle: string,
	minigames: MultiMinigame[]
	group: Group,
}

export const minigames: (SingleMinigame | MinigameGroup)[] = [
	{
		type: Type.Gamegroup,
		link: 'fastbridge',
		title: 'Fastbridge',
		subTitle: '6 Modes',
		group: Group.Featured,
		minigames: [
			{
				type: Type.Minigame,
				link: 'normal',
				title: 'Fastbridge',
				subtitle: 'Normal',
				image: fastbridge_normal,
				fields: ['name', 'time'],
				api: apiMock,
			},
			{
				type: Type.Minigame,
				link: 'island',
				title: 'Fastbridge Islands',
				subtitle: 'Islands',
				image: fastbridge_islands,
				fields: ['name', 'time'],
				api: apiMock,
			},
			{
				type: Type.Minigame,
				link: 'inclined',
				title: 'Fastbridge Inclined',
				subtitle: 'Inclined',
				image: fastbridge_inclined,
				fields: ['name', 'time'],
				api: apiMock,
			},
			{
				type: Type.Minigame,
				link: 'staircase',
				title: 'Fastbridge Staircase',
				subtitle: 'Staircase',
				image: fastbridge_staircase,
				fields: ['name', 'time'],
				api: apiMock,
			},
			{
				type: Type.Minigame,
				link: 'short',
				title: 'Fastbridge Short',
				subtitle: 'Short',
				image: fastbridge_short,
				fields: ['name', 'time'],
				api: apiMock,
			},
			{
				type: Type.Minigame,
				link: 'inclined_short',
				title: 'Fastbridge Inclined Short',
				subtitle: 'Inclined Short',
				image: fastbridge_inclinedShort,
				fields: ['name', 'time'],
				api: apiMock,
			},
		],
	},
	{
		type: Type.Gamegroup,
		link: 'knockgames',
		title: 'KnockGames',
		subTitle: '4 Modes',
		group: Group.Featured,
		minigames: [
			{
				type: Type.Minigame,
				link: 'normal',
				title: 'KnockPvP',
				subtitle: 'Normal',
				image: knockpvp_normal,
				fields: ['name', 'kills', 'deaths'],
				api: apiMock,
			},
			{
				type: Type.Minigame,
				link: 'ffa',
				title: 'KnockFFA',
				subtitle: 'FFA',
				image: knockpvp_ffa,
				fields: ['name', 'kills', 'deaths'],
				api: apiMock,
			},
			{
				type: Type.Minigame,
				link: 'wars',
				title: 'KnockPVP Wars',
				subtitle: 'Wars',
				image: knockpvp_wars,
				fields: ['name', 'kills', 'deaths'],
				api: apiMock,
			},
			{
				type: Type.Minigame,
				link: 'lab',
				title: 'KnockPvP Lab',
				subtitle: 'LAB',
				image: knockpvp_lab,
				fields: [],
				api: apiMock,
			}],
	},
	{
		type: Type.Minigame,
		link: 'minesweeper',
		title: 'Minesweeper',
		image: minesweeper,
		group: Group.Featured,
		api: {
			endpoint: '/stats/minesweeper/top/:type/:generator',
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
				time: {
					display: 'Time',
					renderMethod: RenderMethod.Time,
				},
			},
			options: {
				'type': {
					display: 'Difficulty',
					type: OptionType.Select,
					options: {
						'EASY': 'Easy',
						'MEDIUM': 'Medium',
						'HARD': 'Hard',
						'EXTREME': 'Extreme',
						'HELL': 'Hell',
					},
					default: 'MEDIUM',
				},
				'generator': {
					display: 'Generator',
					type: OptionType.Select,
					options: {
						'OG': 'Microsoft',
						'GREEV': 'Greev.eu',
						'NO_GUESSING': 'No Guessing',
						'SPEEDRUN': 'Speedrun',
					},
					default: 'GREEV',
				},
			},
		},
	},
	{
		type: Type.Minigame,
		link: 'mlgrush',
		title: 'MLG Rush',
		image: mlgrush,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
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
			endpoint: '/stats/mlgrush/top',
		},
	},
	{
		type: Type.Minigame,
		link: 'bedwars',
		title: 'Bedwars',
		image: bedwars,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
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
				brokenBeds: {
					display: 'Broken Beds',
					renderMethod: RenderMethod.Raw,
				},
			},
			endpoint: '/stats/bedwars/top',
		},
	},
	{
		type: Type.Minigame,
		link: 'rush',
		title: 'Rush',
		image: rush,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
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
			endpoint: '/stats/rush/top',
		},
	},
	{
		type: Type.Minigame,
		link: 'skywars',
		title: 'Skywars',
		image: skywars,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
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
			endpoint: '/stats/skywars/top',
		},
	},
	{
		type: Type.Minigame,
		link: 'tntrun',
		title: 'TnT Run',
		image: tntrun,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
				wins: {
					display: 'Wins',
					renderMethod: RenderMethod.Raw,
				},
				loses: {
					display: 'Loses',
					renderMethod: RenderMethod.Raw,
				},
			},
			endpoint: '/stats/tntrun/top',
		},
	},
	{
		type: Type.Minigame,
		link: 'cores',
		title: 'Cores',
		image: cores,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
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
				brokenCores: {
					display: 'Broken Cores',
					renderMethod: RenderMethod.Raw,
				},
			},
			endpoint: '/stats/cores/top',
		},
	},
	{
		type: Type.Minigame,
		link: 'qsg',
		title: 'QSG',
		image: qsg,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
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
			endpoint: '/stats/qsg/top',
		},
	},
	{
		type: Type.Minigame,
		link: 'quake',
		title: 'Quake',
		image: quake,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
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
			endpoint: '/stats/quake/top',
		},
	},
	{
		type: Type.Minigame,
		link: 'snowballfight',
		title: 'Snowballfight',
		image: snowballfight,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
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
			endpoint: '/stats/snowballfight/top',
		},
	},
	{
		type: Type.Minigame,
		link: '1vs1',
		title: '1vs1',
		image: onevs1,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
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
			endpoint: '/stats/1vs1/top',
		},
	},
	{
		type: Type.Minigame,
		link: 'oneline',
		title: 'OneLine',
		image: oneline,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
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
			endpoint: '/stats/oneline/top',
		},
	},
	{
		type: Type.Minigame,
		link: 'sumo',
		title: 'Sumo',
		image: sumo,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
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

			endpoint: '/stats/sumo/top',
		},
	},
	{
		type: Type.Gamegroup,
		link: 'spleef',
		title: 'Spleef',
		subTitle: '2 Modes',
		group: Group.Minigames,
		minigames: [
			{
				type: Type.Minigame,
				link: 'normal',
				title: 'Spleef',
				subtitle: 'Normal',
				image: spleef_normal,
				fields: ['name', 'wins', 'loses'],
				api: apiMock,
			},
			{
				type: Type.Minigame,
				link: 'bow',
				title: 'Bow Spleef',
				subtitle: 'Bow Spleef',
				image: spleef_bow,
				fields: ['name', 'wins', 'loses'],
				api: apiMock,
			},
		],
	},
	{
		type: Type.Minigame,
		link: 'uhc',
		title: 'UHC',
		image: uhc,
		group: Group.Minigames,
		api: {
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
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
			endpoint: '/stats/uhc/top',
		},
	},
	{
		type: Type.Minigame,
		link: 'clans',
		title: 'Clans',
		fields: ['name', 'tag', 'size', 'performance'],
		image: clans,
		group: Group.Misc,
		api: apiMock,
	},
	{
		type: Type.Minigame,
		link: 'performance',
		title: 'Performance',
		image: performance,
		fields: ['name', 'playerperformance'],
		group: Group.Misc,
		api: apiMock,
	},
	{
		type: Type.Minigame,
		link: 'tokens',
		title: 'Tokens',
		image: tokens,
		fields: ['name', 'tokens'],
		group: Group.Misc,
		api: apiMock,
	},
	{
		type: Type.Minigame,
		link: 'loginstreak',
		title: 'Loginstreak',
		image: loginstreak,
		fields: ['name', 'currentstreak', 'maxstreak'],
		group: Group.Misc,
		api: apiMock,
	},
];

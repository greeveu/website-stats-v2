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

export enum Group
{
	Misc,
	Featured,
	Minigames,
}

interface BaseMinigame
{
	/**
	 * Page title & card
	 */
	title: string,
	image: string,
	fields: string[]
}

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
	title: string,
	subTitle: string,
	minigames: MultiMinigame[]
	group: Group,
}

export const minigames: (SingleMinigame | MinigameGroup)[] = [
	{
		type: Type.Gamegroup,
		title: 'Fastbridge',
		subTitle: '6 Modes',
		group: Group.Featured,
		minigames: [
			{
				type: Type.Minigame,
				title: 'Fastbridge',
				subtitle: 'Normal',
				image: fastbridge_normal,
				fields: ['name', 'time'],
			},
			{
				type: Type.Minigame,
				title: 'Fastbridge Islands',
				subtitle: 'Islands',
				image: fastbridge_islands,
				fields: ['name', 'time'],
			},
			{
				type: Type.Minigame,
				title: 'Fastbridge Inclined',
				subtitle: 'Inclined',
				image: fastbridge_inclined,
				fields: ['name', 'time'],
			},
			{
				type: Type.Minigame,
				title: 'Fastbridge Staircase',
				subtitle: 'Staircase',
				image: fastbridge_staircase,
				fields: ['name', 'time'],
			},
			{
				type: Type.Minigame,
				title: 'Fastbridge Short',
				subtitle: 'Short',
				image: fastbridge_short,
				fields: ['name', 'time'],
			},
			{
				type: Type.Minigame,
				title: 'Fastbridge Inclined Short',
				subtitle: 'Inclined Short',
				image: fastbridge_inclinedShort,
				fields: ['name', 'time'],
			},
		],
	},
	{
		type: Type.Gamegroup,
		title: 'KnockGames',
		subTitle: '4 Modes',
		group: Group.Featured,
		minigames: [
			{
				type: Type.Minigame,
				title: 'KnockPvP',
				subtitle: 'Normal',
				image: knockpvp_normal,
				fields: ['name', 'kills', 'deaths'],
			},
			{
				type: Type.Minigame,
				title: 'KnockFFA',
				subtitle: 'FFA',
				image: knockpvp_ffa,
				fields: ['name', 'kills', 'deaths'],
			},
			{
				type: Type.Minigame,
				title: 'KnockPVP Wars',
				subtitle: 'Wars',
				image: knockpvp_wars,
				fields: ['name', 'kills', 'deaths'],
			},
			{
				type: Type.Minigame,
				title: 'KnockPvP Lab',
				subtitle: 'LAB',
				image: knockpvp_lab,
				fields: [],
			}],
	},
	{
		type: Type.Minigame,
		title: 'Minesweeper', // TODO difficulty settings, Generator settings
		image: minesweeper,
		fields: [],
		group: Group.Featured,
	},
	{
		type: Type.Minigame,
		title: 'MLG Rush',
		image: mlgrush,
		fields: ['name', 'wins', 'loses', 'brokenBeds', 'lostBeds'],
		group: Group.Minigames,
	},
	{
		type: Type.Minigame,
		title: 'Bedwars',
		image: bedwars,
		fields: ['name', 'wins', 'loses', 'kills', 'deaths', 'brokenBeds'],
		group: Group.Minigames,
	},
	{
		type: Type.Minigame,
		title: 'Rush',
		image: rush,
		fields: ['name', 'wins', 'loses', 'kills', 'deaths', 'brokenBeds'],
		group: Group.Minigames,
	},
	{
		type: Type.Minigame,
		title: 'Skywars',
		image: skywars,
		fields: ['name', 'wins', 'loses', 'kills', 'deaths'],
		group: Group.Minigames,
	},
	{
		type: Type.Minigame,
		title: 'TnT Run',
		image: tntrun,
		fields: ['name', 'wins', 'loses'],
		group: Group.Minigames,
	},
	{
		type: Type.Minigame,
		title: 'Cores',
		image: cores,
		fields: ['name', 'wins', 'loses', 'kills', 'deaths', 'brokenCores'],
		group: Group.Minigames,
	},
	{
		type: Type.Minigame,
		title: 'QSG',
		image: qsg,
		fields: ['name', 'wins', 'loses', 'kills', 'deaths'],
		group: Group.Minigames,
	},
	{
		type: Type.Minigame,
		title: 'Quake',
		image: quake,
		fields: ['name', 'wins', 'loses', 'kills', 'deaths'],
		group: Group.Minigames,
	},
	{
		type: Type.Minigame,
		title: 'Snowballfight',
		image: snowballfight,
		fields: ['name', 'kills', 'deaths'],
		group: Group.Minigames,
	},
	{
		type: Type.Minigame,
		title: '1vs1',
		image: onevs1,
		fields: ['name', 'kills', 'deaths'],
		group: Group.Minigames,
	},
	{
		type: Type.Minigame,
		title: 'OneLine',
		image: oneline,
		fields: ['name', 'kills', 'deaths'],
		group: Group.Minigames,
	},
	{
		type: Type.Minigame,
		title: 'Sumo',
		image: sumo,
		fields: ['name', 'kills', 'deaths'],
		group: Group.Minigames,
	},
	{
		type: Type.Gamegroup,
		title: 'Spleef',
		subTitle: 'World of spleef',
		group: Group.Minigames,
		minigames: [
			{
				type: Type.Minigame,
				title: 'Spleef',
				subtitle: 'Normal',
				image: spleef_normal,
				fields: ['name', 'wins', 'loses'],
			},
			{
				type: Type.Minigame,
				title: 'Bow Spleef',
				subtitle: 'Bow Spleef',
				image: spleef_bow,
				fields: ['name', 'wins', 'loses'],
			},
		],
	},
	{
		type: Type.Minigame,
		title: 'UHC',
		image: uhc,
		fields: ['name', 'wins', 'loses', 'kills', 'deaths'],
		group: Group.Minigames,
	},
	{
		type: Type.Minigame,
		title: 'Clans',
		fields: ['name', 'tag', 'size', 'performance'],
		image: clans,
		group: Group.Misc,
	},
	{
		type: Type.Minigame,
		title: 'Performance',
		image: performance,
		fields: ['name', 'playerperformance'],
		group: Group.Misc,
	},
	{
		type: Type.Minigame,
		title: 'Tokens',
		image: tokens,
		fields: ['name', 'tokens'],
		group: Group.Misc,
	},
	{
		type: Type.Minigame,
		title: 'Loginstreak',
		image: loginstreak,
		fields: ['name', 'currentstreak', 'maxstreak'],
		group: Group.Misc,
	},
];

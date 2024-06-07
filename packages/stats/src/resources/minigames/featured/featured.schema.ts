import fastbridge_normal from 'resources/minigames/featured/media/fastbridge_normal.jpg';
import fastbridge_islands from 'resources/minigames/featured/media/fastbridge_islands.jpg';
import fastbridge_inclined from 'resources/minigames/featured/media/fastbridge_inclined.jpg';
import fastbridge_staircase from 'resources/minigames/featured/media/fastbridge_staircase.jpg';
import fastbridge_short from 'resources/minigames/featured/media/fastbridge_short.jpg';
import fastbridge_inclinedShort from 'resources/minigames/featured/media/fastbridge_inclinedShort.jpg';
import knockpvp_normal from 'resources/minigames/featured/media/knockpvp_normal.jpg';
import knockpvp_ffa from 'resources/minigames/featured/media/knockpvp_ffa.jpg';
import knockpvp_lab from 'resources/minigames/featured/media/knockpvp_lab.jpg';
import minesweeper from 'resources/minigames/featured/media/minesweeper.jpg';

import {
	ApiType,
	RenderMethod,
	MinigameSchema,
	MinigameType,
	OptionType,
} from 'resources/minigames/minigames.types.ts';

export const featuredSchema: MinigameSchema = [
	{
		type: MinigameType.Gamegroup,
		link: 'fastbridge',
		title: 'Fastbridge',
		subTitle: '7 Modes',
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
							renderMethod: RenderMethod.Player,
						},
						time: {
							display: 'Time',
							renderMethod: RenderMethod.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: RenderMethod.Raw,
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
							renderMethod: RenderMethod.Player,
						},
						time: {
							display: 'Time',
							renderMethod: RenderMethod.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: RenderMethod.Raw,
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
							renderMethod: RenderMethod.Player,
						},
						time: {
							display: 'Time',
							renderMethod: RenderMethod.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: RenderMethod.Raw,
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
							renderMethod: RenderMethod.Player,
						},
						time: {
							display: 'Time',
							renderMethod: RenderMethod.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: RenderMethod.Raw,
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
							renderMethod: RenderMethod.Player,
						},
						time: {
							display: 'Time',
							renderMethod: RenderMethod.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: RenderMethod.Raw,
						},
					},
					options: undefined,
				},
			},
			{
				type: MinigameType.Minigame,
				link: 'extra_short',
				title: 'Fastbridge Extra Short',
				subtitle: 'Extra Short',
				image: fastbridge_short,
				api: {
					type: ApiType.Normal,
					endpoint: '/stats/fastbridge_extra_short/top',
					data: {
						name: {
							display: 'Player',
							renderMethod: RenderMethod.Player,
						},
						time: {
							display: 'Time',
							renderMethod: RenderMethod.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: RenderMethod.Raw,
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
							renderMethod: RenderMethod.Player,
						},
						time: {
							display: 'Time',
							renderMethod: RenderMethod.TimeS,
						},
						replayId: {
							display: 'Replay ID',
							renderMethod: RenderMethod.Raw,
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
						kd: {
							display: 'K/D',
							renderMethod: RenderMethod.KillsDeaths,
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
						kd: {
							display: 'K/D',
							renderMethod: RenderMethod.KillsDeaths,
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
						kd: {
							display: 'K/D',
							renderMethod: RenderMethod.KillsDeaths,
						},
					},
					options: {
						experiment: {
							display: 'Experiment',
							type: OptionType.Select,
							default: 'BOW',
							options: {
								DOUBLEJUMP: 'Double Jump',
								TNTJUMP: 'TNT',
								FIREBALL: 'Fireballs',
								GRAPPLING_HOOK: 'Grappling Hook',
								SWITCHBALLS: 'Switcher',
								SUMO: 'Sumo',
								KNOCKSTICK: 'Knock Stick',
								KNOCKFFA: 'Knock FFA',
								BOW: 'Bows',
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
		api: {
			endpoint: '/stats/minesweeper/top/:difficulty/:generator',
			type: ApiType.Normal,
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
				time: {
					display: 'Time',
					renderMethod: RenderMethod.TimeMs,
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
];

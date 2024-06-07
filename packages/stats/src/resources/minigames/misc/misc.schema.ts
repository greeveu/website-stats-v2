import {
	ApiType,
	RenderMethod,
	MinigameSchema,
	MinigameType,
	OptionType,
} from 'resources/minigames/minigames.types.ts';
import clans from 'resources/minigames/misc/media/clans.jpg';
import performance from 'resources/minigames/misc/media/performance.jpg';
import tokens from 'resources/minigames/misc/media/tokens.jpg';
import loginstreak from 'resources/minigames/misc/media/loginstreak.jpg';
import knockpvp_event from 'resources/minigames/featured/media/knockpvp_normal.jpg';
import minesweeper_event from 'resources/minigames/featured/media/minesweeper.jpg';
import advent from 'resources/minigames/misc/media/advent.jpg';

export const miscSchema: MinigameSchema = [
	{
		type: MinigameType.Minigame,
		link: 'clans',
		title: 'Clans',
		image: clans,
		api: {
			type: ApiType.Normal,
			endpoint: '/clan/top',
			data: {
				name: {
					display: 'Name',
					renderMethod: RenderMethod.Clan,
				},
				size: {
					display: 'Size',
					renderMethod: RenderMethod.Raw,
				},
				playerperformance: {
					display: 'Combined PP',
					renderMethod: RenderMethod.Raw,
				},
			},
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'performance',
		title: 'Performance',
		image: performance,
		api: {
			type: ApiType.Normal,
			endpoint: '/stats/performance/top',
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
				playerperformance: {
					display: 'Performance',
					renderMethod: RenderMethod.Raw,
				},
			},
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'tokens',
		title: 'Tokens',
		image: tokens,
		api: {
			type: ApiType.Normal,
			endpoint: '/stats/tokens/top',
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
				tokens: {
					display: 'Amount',
					renderMethod: RenderMethod.Raw,
				},
			},
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'loginstreak',
		title: 'Loginstreak',
		image: loginstreak,
		api: {
			type: ApiType.Normal,
			endpoint: '/stats/loginstreak/top',
			data: {
				name: {
					display: 'Player',
					renderMethod: RenderMethod.Player,
				},
				currentstreak: {
					display: 'Current streak',
					renderMethod: RenderMethod.Raw,
				},
				maxstreak: {
					display: 'Highest streak',
					renderMethod: RenderMethod.Raw,
				},
			},
		},
	},
	{
		type: MinigameType.Gamegroup,
		link: 'events',
		title: 'Events',
		subTitle: '2 Events',
		minigames: [
			{
				type: MinigameType.Minigame,
				link: 'knockpvp_2023',
				title: 'KnockPvP Event',
				subtitle: 'KnockPVP 2023',
				image: knockpvp_event,
				api: {
					type: ApiType.WithParams,
					endpoint:
						'/stats/knockpvp/rollingTop?startTimestamp=1684108800&endTimestamp=1684713600',
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
				link: 'minesweeper_2024',
				title: 'Minesweeper Event',
				subtitle: 'Minesweeper 2024',
				image: minesweeper_event,
				api: {
					type: ApiType.WithParams,
					endpoint:
						'/stats/minesweeper/top/MEDIUM/GREEV?mode=DEFAULT&rankingCriteria=MASTERY&start=1711321200&end=1712527199',
					data: {
						name: {
							display: 'Player',
							renderMethod: RenderMethod.Player,
						},
						mastery: {
							display: 'Mastery',
							renderMethod: RenderMethod.Raw,
						},
					},
					options: undefined,
				},
			},
		],
	},
	{
		type: MinigameType.Minigame,
		link: 'advent',
		title: 'Advent Calendar',
		image: advent,
		api: {
			endpoint: '/stats/advent/top/:year/:door',
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
				fails: {
					display: 'Fails',
					renderMethod: RenderMethod.Raw,
				},
				checkpoints: {
					display: 'Checkpoints',
					renderMethod: RenderMethod.Raw,
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
];

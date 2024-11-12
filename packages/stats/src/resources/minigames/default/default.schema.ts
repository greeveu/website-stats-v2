import {
	ApiType,
	RenderMethod,
	MinigameSchema,
	MinigameType,
} from 'resources/minigames/minigames.types.ts';
import mlgrush from 'resources/minigames/default/media/mlgrush.jpg';
import bedwars from 'resources/minigames/default/media/bedwars.jpg';
import rush from 'resources/minigames/default/media/rush.jpg';
import skywars from 'resources/minigames/default/media/skywars.jpg';
import tntrun from 'resources/minigames/default/media/tntrun.jpg';
import cores from 'resources/minigames/default/media/cores.jpg';
import qsg from 'resources/minigames/default/media/qsg.jpg';
import quake from 'resources/minigames/default/media/quake.jpg';
import snowballfight from 'resources/minigames/default/media/snowballfight.jpg';
import onevs1 from 'resources/minigames/default/media/1vs1.jpg';
import oneline from 'resources/minigames/default/media/oneline.jpg';
import sumo from 'resources/minigames/default/media/sumo.jpg';
import spleef_normal from 'resources/minigames/default/media/spleef_normal.jpg';
import spleef_bow from 'resources/minigames/default/media/spleef_bow.jpg';
import uhc from 'resources/minigames/default/media/uhc.jpg';

export const defaultSchema: MinigameSchema = [
	{
		type: MinigameType.Minigame,
		link: 'mlgrush',
		title: 'MLG Rush',
		image: mlgrush,
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
				wl: {
					display: 'W/L',
					renderMethod: RenderMethod.WinsLoses,
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
		type: MinigameType.Minigame,
		link: 'bedwars',
		title: 'Bedwars',
		image: bedwars,
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
				wl: {
					display: 'W/L',
					renderMethod: RenderMethod.WinsLoses,
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
		type: MinigameType.Minigame,
		link: 'rush',
		title: 'Rush',
		image: rush,
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
				wl: {
					display: 'W/L',
					renderMethod: RenderMethod.WinsLoses,
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
				brokenBeds: {
					display: 'Broken Beds',
					renderMethod: RenderMethod.Raw,
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
				wl: {
					display: 'W/L',
					renderMethod: RenderMethod.WinsLoses,
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
			endpoint: '/stats/skywars/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'tntrun',
		title: 'TnT Run',
		image: tntrun,
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
				wl: {
					display: 'W/L',
					renderMethod: RenderMethod.WinsLoses,
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
				wl: {
					display: 'W/L',
					renderMethod: RenderMethod.WinsLoses,
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
				brokenCores: {
					display: 'Broken Cores',
					renderMethod: RenderMethod.Raw,
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
				wl: {
					display: 'W/L',
					renderMethod: RenderMethod.WinsLoses,
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
			endpoint: '/stats/qsg/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'quake',
		title: 'Quake',
		image: quake,
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
				wl: {
					display: 'W/L',
					renderMethod: RenderMethod.WinsLoses,
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
			endpoint: '/stats/quake/top',
		},
	},
	{
		type: MinigameType.Minigame,
		link: 'snowballfight',
		title: 'Snowballfight',
		image: snowballfight,
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
				kd: {
					display: 'K/D',
					renderMethod: RenderMethod.KillsDeaths,
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
				kd: {
					display: 'K/D',
					renderMethod: RenderMethod.KillsDeaths,
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
				kd: {
					display: 'K/D',
					renderMethod: RenderMethod.KillsDeaths,
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
				kd: {
					display: 'K/D',
					renderMethod: RenderMethod.KillsDeaths,
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
						wl: {
							display: 'W/L',
							renderMethod: RenderMethod.WinsLoses,
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
						wl: {
							display: 'W/L',
							renderMethod: RenderMethod.WinsLoses,
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
				wl: {
					display: 'W/L',
					renderMethod: RenderMethod.WinsLoses,
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
			endpoint: '/stats/uhc/top',
		},
	},
];

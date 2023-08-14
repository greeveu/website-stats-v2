import fastbridge from "media/fastbridge.jpg"
import uhc from "media/uhc.jpg"

export const config = {
	/**
	 * Endpoint for greev stats, excluding slash at the end e.g. `https://api.greev.eu/v2`
	 */
	endpoint: 'https://api.greev.eu/v2',
};

enum Type
{
	MiniGame,
	MiniGameGroup
}

/**
 * Clanboard - Playerboard (Primary)
 * Tokens - Loginstreak  (Secondary)
 * PReferred Minigames (Tertiary)
 * Other Stuff (Defailt)
 */
enum Index
{
	Primary,
	Secondary,
	Tertiary,
	Normal,
}

interface Minigame
{
	type: Type.MiniGame
	title: string,
	// api name?
	searchImage: string,
	backgroundImage: string,
	fields: string[]
	index: Index
}

interface MinigameGroup
{
	type: Type.MiniGameGroup
	title: string,
	// TODO api query key is needed
	searchImage: string,
	minigames: Minigame[]
	index: Index
}

export const gameDefinitions: (Minigame | MinigameGroup)[] = [
	{
		type: Type.MiniGame,
		title: 'Clans',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'tag', 'size', 'performance'],
		index: Index.Primary,
	},
	{
		type: Type.MiniGame,
		title: 'Performance',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'playerperformance'],
		index: Index.Primary,
	},
	{
		type: Type.MiniGame,
		title: 'Tokens',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'tokens'],
		index: Index.Secondary,
	},
	{
		type: Type.MiniGame,
		title: 'Loginstreak',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'currentstreak', 'maxstreak'],
		index: Index.Secondary,
	},
	{
		type: Type.MiniGameGroup,
		title: 'KnockGames',
		searchImage: '',
		index: Index.Tertiary,
		minigames: [
			{
				type: Type.MiniGame,
				title: 'KnockPvP',
				searchImage: '',
				backgroundImage: '',
				fields: ['name', 'kills', 'deaths'],
				index: Index.Normal,
			},
			{
				type: Type.MiniGame,
				title: 'KnockFFA',
				searchImage: '',
				backgroundImage: '',
				fields: ['name', 'kills', 'deaths'],
				index: Index.Normal,
			},
			{
				type: Type.MiniGame,
				title: 'KnockPvP Lab',
				searchImage: '',
				backgroundImage: '',
				fields: [],
				index: Index.Normal,
			}],
	},
	{
		type: Type.MiniGameGroup,
		title: 'Fastbridge',
		searchImage: fastbridge,
		index: Index.Tertiary,
		minigames: [
			{
				type: Type.MiniGame,
				title: 'Fastbridge',
				searchImage: '',
				backgroundImage: '',
				fields: ['name', 'time'],
				index: Index.Normal,
			},
			{
				type: Type.MiniGame,
				title: 'Fastbridge Islands',
				searchImage: '',
				backgroundImage: '',
				fields: ['name', 'time'],
				index: Index.Normal,
			},
			{
				type: Type.MiniGame,
				title: 'Fastbridge Inclined',
				searchImage: '',
				backgroundImage: '',
				fields: ['name', 'time'],
				index: Index.Normal,
			},
			{
				type: Type.MiniGame,
				title: 'Fastbridge Staircase',
				searchImage: '',
				backgroundImage: '',
				fields: ['name', 'time'],
				index: Index.Normal,
			},
			{
				type: Type.MiniGame,
				title: 'Fastbridge Short',
				searchImage: '',
				backgroundImage: '',
				fields: ['name', 'time'],
				index: Index.Normal,
			},
			{
				type: Type.MiniGame,
				title: 'Fastbridge Inclined Short',
				searchImage: '',
				backgroundImage: '',
				fields: ['name', 'time'],
				index: Index.Normal,
			},
		],
	},
	{
		type: Type.MiniGame,
		title: 'Minesweeper', // TODO difficulty settings, Generator settings
		searchImage: '',
		backgroundImage: '',
		fields: [],
		index: Index.Tertiary,
	},
	{
		type: Type.MiniGame,
		title: 'Bedwars',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'wins', 'loses', 'kills', 'deaths', 'brokenBeds'],
		index: Index.Normal,
	},
	{
		type: Type.MiniGame,
		title: 'Rush',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'wins', 'loses', 'kills', 'deaths', 'brokenBeds'],
		index: Index.Normal,
	},
	{
		type: Type.MiniGame,
		title: 'Quake',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'wins', 'loses', 'kills', 'deaths'],
		index: Index.Normal,
	},
	{
		type: Type.MiniGame,
		title: 'Skywars',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'wins', 'loses', 'kills', 'deaths'],
		index: Index.Normal,
	},
	{
		type: Type.MiniGame,
		title: 'Snowballfight',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'kills', 'deaths'],
		index: Index.Normal,
	},
	{
		type: Type.MiniGame,
		title: '1vs1',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'kills', 'deaths'],
		index: Index.Normal,
	},
	{
		type: Type.MiniGame,
		title: 'MLG Rush',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'wins', 'loses', 'brokenBeds', 'lostBeds'],
		index: Index.Normal,
	},
	{
		type: Type.MiniGame,
		title: 'OneLine',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'kills', 'deaths'],
		index: Index.Normal,
	},
	{
		type: Type.MiniGame,
		title: 'QSG',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'wins', 'loses', 'kills', 'deaths'],
		index: Index.Normal,
	},
	{
		type: Type.MiniGame,
		title: 'Sumo',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'kills', 'deaths'],
		index: Index.Normal,
	},
	{
		type: Type.MiniGameGroup,
		index: Index.Normal,
		title: 'Spleef',
		searchImage: '',
		minigames: [
			{
				type: Type.MiniGame,
				title: 'Spleef',
				searchImage: '',
				backgroundImage: '',
				fields: ['name', 'wins', 'loses'],
				index: Index.Normal,
			},
			{
				type: Type.MiniGame,
				title: 'Bow Spleef',
				searchImage: '',
				backgroundImage: '',
				fields: ['name', 'wins', 'loses'],
				index: Index.Normal,
			}
		],
	},
	{
		type: Type.MiniGame,
		title: 'TnT Run',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'wins', 'loses'],
		index: Index.Normal,
	},
	{
		type: Type.MiniGame,
		title: 'Cores',
		searchImage: '',
		backgroundImage: '',
		fields: ['name', 'wins', 'loses', 'kills', 'deaths', 'brokenCores'],
		index: Index.Normal,
	},
	{
		type: Type.MiniGame,
		title: 'UHC',
		searchImage: uhc,
		backgroundImage: '',
		fields: ['name', 'wins', 'loses', 'kills', 'deaths'],
		index: Index.Normal,
	},
];

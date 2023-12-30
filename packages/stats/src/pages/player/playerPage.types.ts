export enum Rank {
	Admin = 'admin',
	Bot = 'bot',
	Builder = 'builder',
	Default = 'default',
	Developer = 'developer',
	HeadBuilder = 'head-builder',
	LeadDeveloper = 'lead-developer',
	Moderator = 'moderator',
	Owner = 'owner',
	PremiumPlus = 'premiumplus',
	Supporter = 'supporter',
	TestSupporter = 'test-supporter',
	Vip = 'vip',
	Youtuber = 'youtuber',
}

export interface SingleStat {
	[key: string]: string | number;
}

export type MultiStat = {
	[key: string]: string | number;
}[];

export type Stats = {
	[minigame: string]: SingleStat | MultiStat;
};

export interface StatsResponse {
	uuid: string;
	name: string;
	lastOnline: number;
	firstOnline: number;
	clan?: {
		name: string;
		tag: string;
		size: number;
		role: string;
	};
	rank: {
		name: Rank;
		until: number;
	};
	tokens: number;
	playerperformance: number;
	loginstreak?: {
		maxLoginStreak: number;
		currentLoginStreak: number;
	};
	stats: Stats;
}

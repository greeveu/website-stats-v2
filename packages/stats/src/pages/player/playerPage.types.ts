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

export interface StatsResponse {
    uuid: 'string';
    name: 'string';
    lastOnline: 0;
    firstOnline: 0;
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
    tokens: 0;
    playerperformance: 0;
    loginstreak: {
        maxLoginStreak: 0;
        currentLoginStreak: 0;
    };
    stats: {
        bedwars: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
            wins: 0;
            loses: 0;
            brokenBeds: 0;
        };
        bowspleef: {
            uuid: 'string';
            name: 'string';
            wins: 0;
            loses: 0;
        };
        knockFfa: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
        };
        knockPvp: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
        };
        mlgrush: {
            uuid: 'string';
            name: 'string';
            wins: 0;
            loses: 0;
            brokenBeds: 0;
            lostBeds: 0;
        };
        cores: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
            wins: 0;
            loses: 0;
            brokenCores: 0;
        };
        oneline: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
        };
        oneVsOne: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
        };
        qsg: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
            wins: 0;
            loses: 0;
        };
        quake: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
            wins: 0;
            loses: 0;
        };
        rush: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
            wins: 0;
            loses: 0;
            brokenBeds: 0;
        };
        skywars: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
            wins: 0;
            loses: 0;
        };
        snowballFight: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
        };
        spleef: {
            uuid: 'string';
            name: 'string';
            wins: 0;
            loses: 0;
        };
        sumo: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
        };
        tntrun: {
            uuid: 'string';
            name: 'string';
            wins: 0;
            loses: 0;
        };
        uhc: {
            uuid: 'string';
            name: 'string';
            kills: 0;
            deaths: 0;
            wins: 0;
            loses: 0;
        };
        fastbridge: [
            {
                uuid: 'string';
                name: 'string';
                time: 0;
                replayId: 'string';
                map: 'string';
                mode: 'string';
                timestamp: 'string';
            },
        ];
        minesweeper: [
            {
                uuid: 'string';
                name: 'string';
                time: 0;
                mapId: 0;
                roundId: 0;
                timestamp: 'string';
                generator: 'string';
                type: 'string';
            },
        ];
        badges: [
            {
                timestamp: '2023-12-08T19:36:07.188Z';
                name: 'string';
                description: 'string';
                item: 'string';
            },
        ];
    };
}
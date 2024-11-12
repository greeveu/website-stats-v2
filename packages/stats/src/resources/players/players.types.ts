export enum StatType {
  Single = 'SINGLE',
  Multi = 'MULTI',
}

/**
 * Determine how to render the stat data
 */
export enum RenderMethod {
  Raw,
  TimeS,
  TimeMs,
  Date,
  DateTime,
  KillsDeathsRow,
  WinsLosesRow,
}

/**
 * Player statistics onf minigames without selectable options
 */
export interface PlayerStatSingle {
  type: StatType.Single;
  title: string;
  stats: {
    [stat: string]: {
      display: string;
      renderMethod: RenderMethod;
    };
  };
}

/**
 * Player statistic of minigames that has selectable options
 */
export interface PlayerStatMulti {
  type: StatType.Multi;
  title: string;
  keys: {
    [key: string]: {
      [value: string]: string;
    };
  };
  /**
   * Currently a single stat is supported
   */
  stats: {
    [stat: string]: {
      display: string;
      renderMethod: RenderMethod;
    };
  };
}

export interface PlayersSchema {
  [minigame: string]: PlayerStatSingle | PlayerStatMulti;
}

/**
 * Discriminatory type between a single minigame and a game group containing single minigames
 */
export enum MinigameType {
	Minigame,
	Gamegroup,
}

/**
 * API Types to determine how to call and parse the response properly
 */
export enum ApiType {
	Normal,
	WithParams,
}

export enum OptionType {
	Select,
}

interface SelectOption {
	display: string;
	type: OptionType.Select;
	options: Record<string, string>;
	default: string;
}

/**
 * All configurable options for a minigame the user can select
 */
export type Option = SelectOption;

/**
 * Determine how to render the column data
 */
export enum RenderMethod {
	Raw,
	Clan,
	Player,
	TimeS,
	TimeMs,
	KillsDeaths,
	WinsLoses,
}

export interface Column {
	/**
	 * Display name of the column
	 */
	display: string;
	/**
	 * Render method to determine how to render the column data
	 */
	renderMethod: RenderMethod;
}

export interface BaseMinigame {
	/**
	 * Page title & card
	 */
	title: string;
	image: string;
	link: string;
	api: {
		type: ApiType;
		endpoint: string;
		data: Record<string, Column>;
		options?: Record<string, Option>;
	};
}

export interface SingleMinigame extends BaseMinigame {
	type: MinigameType.Minigame;
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
}

export type MinigameSchema = (SingleMinigame | MinigameGroup)[];

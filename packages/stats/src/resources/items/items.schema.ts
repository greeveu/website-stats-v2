// Minecraft textures
import wooden_shovel from './textures/wooden_shovel.png';
import nether_star from './textures/nether_star.png';
import diamond from './textures/diamond.png';
import gold_ingot from './textures/gold_ingot.png';
import gold_nugget from './textures/gold_nugget.png';
import apple from './textures/apple.png';
import ink_sac from './textures/ink_sac.png';
import paper from './textures/paper.png';
import golden_apple from './textures/golden_apple.png';
import wooden_sword from './textures/wooden_sword.png';
import rabbit_foot from './textures/rabbit_foot.png';
import compass from './textures/compass.png';
import oak_sign from './textures/oak_sign.png';
import writeable_book from './textures/writable_book.png';
import map from './textures/map.png';
import ender_eye from './textures/ender_eye.png';
import diamond_boots from './textures/diamond_boots.png';
import clock from './textures/clock.png';
import snowball from './textures/snowball.png';
import name_tag from './textures/name_tag.png';
import redstone from './textures/redstone.png';
import diamond_pickaxe from './textures/diamond_pickaxe.png';
import pufferfish_bucket from './textures/pufferfish_bucket.png';
import axolotl_bucket from './textures/axolotl_bucket.png';

// Wiki Icons
import poppy from './textures/poppy.webp';
import torch from './textures/torch.webp';
import ender_chest from './textures/ender_chest.webp';
import dirt from './textures/dirt.webp';
import dandelion from './textures/dandelion.webp';
import ice from './textures/ice.webp';
import glass from './textures/glass.webp';
import rose_bush from './textures/rose_bush.webp';
import spawn_egg from './textures/spawn_egg.webp';
import skull from './textures/skull.webp';
import tnt from './textures/tnt.webp';
import dragon_egg from './textures/dragon_egg.webp';

export enum Item {
	WOODEN_SHOVEL = 'WOODEN_SHOVEL', // Used as fallback
	NETHER_STAR = 'NETHER_STAR',
	DIAMOND = 'DIAMOND',
	RED_ROSE = 'RED_ROSE',
	GOLD_INGOT = 'GOLD_INGOT',
	GOLD_NUGGET = 'GOLD_NUGGET',
	APPLE = 'APPLE',
	INK_SACK_GRAY = 'INK_SACK_GRAY',
	PAPER = 'PAPER',
	GOLDEN_APPLE = 'GOLDEN_APPLE',
	TORCH = 'TORCH',
	WOOD_SWORD = 'WOOD_SWORD',
	ENDER_CHEST = 'ENDER_CHEST',
	RABBIT_FOOT = 'RABBIT_FOOT',
	COMPASS = 'COMPASS',
	SIGN = 'SIGN',
	BOOK_AND_QUILL = 'BOOK_AND_QUILL',
	EMPTY_MAP = 'EMPTY_MAP',
	DIRT = 'DIRT',
	EYE_OF_ENDER = 'EYE_OF_ENDER',
	DIAMOND_BOOTS = 'DIAMOND_BOOTS',
	YELLOW_FLOWER = 'YELLOW_FLOWER',
	ICE = 'ICE',
	WATCH = 'WATCH',
	GLASS = 'GLASS',
	ROSE_BUSH = 'ROSE_BUSH',
	MONSTER_EGG = 'MONSTER_EGG',
	SKULL_ITEM = 'SKULL_ITEM',
	SNOW_BALL = 'SNOW_BALL',
	NAME_TAG = 'NAME_TAG',
	TNT = 'TNT',
	REDSTONE = 'REDSTONE',
	DIAMOND_PICKAXE = 'DIAMOND_PICKAXE',
	DRAGON_EGG = 'DRAGON_EGG',
	PUFFERFISH_BUCKET = 'PUFFERFISH_BUCKET',
	AXOLOTL_BUCKET = 'AXOLOTL_BUCKET',
}

export enum Glow {
	NONE = 'NONE',
	WHITE = 'WHITE',
	RAINBOW = 'RAINBOW',
	GOLD = 'GOLD',
	RED = 'RED',
	BLUE = 'BLUE',
	PURPLE = 'PURPLE',
	Brown = "BROWN"
}

export const itemSchema: { [key in Item]?: { image: string; glow: Glow } } = {
	[Item.WOODEN_SHOVEL]: {
		image: wooden_shovel,
		glow: Glow.NONE,
	},
	[Item.NETHER_STAR]: {
		image: nether_star,
		glow: Glow.RAINBOW,
	},
	[Item.DIAMOND]: {
		image: diamond,
		glow: Glow.RAINBOW,
	},
	[Item.RED_ROSE]: {
		image: poppy,
		glow: Glow.NONE,
	},
	[Item.GOLD_INGOT]: {
		image: gold_ingot,
		glow: Glow.GOLD,
	},
	[Item.GOLD_NUGGET]: {
		image: gold_nugget,
		glow: Glow.GOLD,
	},
	[Item.APPLE]: {
		image: apple,
		glow: Glow.RAINBOW,
	},
	[Item.INK_SACK_GRAY]: {
		image: ink_sac,
		glow: Glow.NONE,
	},
	[Item.PAPER]: {
		image: paper,
		glow: Glow.NONE,
	},
	[Item.GOLDEN_APPLE]: {
		image: golden_apple,
		glow: Glow.GOLD,
	},
	[Item.TORCH]: {
		image: torch,
		glow: Glow.GOLD,
	},
	[Item.WOOD_SWORD]: {
		image: wooden_sword,
		glow: Glow.Brown,
	},
	[Item.ENDER_CHEST]: {
		image: ender_chest,
		glow: Glow.PURPLE,
	},
	[Item.RABBIT_FOOT]: {
		image: rabbit_foot,
		glow: Glow.NONE,
	},
	[Item.COMPASS]: {
		image: compass,
		glow: Glow.NONE,
	},
	[Item.SIGN]: {
		image: oak_sign,
		glow: Glow.Brown,
	},
	[Item.BOOK_AND_QUILL]: {
		image: writeable_book,
		glow: Glow.NONE,
	},
	[Item.EMPTY_MAP]: {
		image: map,
		glow: Glow.NONE,
	},
	[Item.DIRT]: {
		image: dirt,
		glow: Glow.Brown,
	},
	[Item.EYE_OF_ENDER]: {
		image: ender_eye,
		glow: Glow.BLUE,
	},
	[Item.DIAMOND_BOOTS]: {
		image: diamond_boots,
		glow: Glow.PURPLE,
	},
	[Item.YELLOW_FLOWER]: {
		image: dandelion,
		glow: Glow.GOLD,
	},
	[Item.ICE]: {
		image: ice,
		glow: Glow.BLUE,
	},
	[Item.WATCH]: {
		image: clock,
		glow: Glow.GOLD,
	},
	[Item.GLASS]: {
		image: glass,
		glow: Glow.NONE,
	},
	[Item.ROSE_BUSH]: {
		image: rose_bush,
		glow: Glow.RED,
	},
	[Item.MONSTER_EGG]: {
		image: spawn_egg,
		glow: Glow.NONE,
	},
	[Item.SKULL_ITEM]: {
		image: skull,
		glow: Glow.NONE,
	},
	[Item.SNOW_BALL]: {
		image: snowball,
		glow: Glow.NONE,
	},
	[Item.NAME_TAG]: {
		image: name_tag,
		glow: Glow.NONE,
	},
	[Item.TNT]: {
		image: tnt,
		glow: Glow.RED,
	},
	[Item.REDSTONE]: {
		image: redstone,
		glow: Glow.RED,
	},
	[Item.DIAMOND_PICKAXE]: {
		image: diamond_pickaxe,
		glow: Glow.BLUE,
	},
	[Item.DRAGON_EGG]: {
		image: dragon_egg,
		glow: Glow.PURPLE,
	},
	[Item.PUFFERFISH_BUCKET]: {
		image: pufferfish_bucket,
		glow: Glow.RAINBOW,
	},
	[Item.AXOLOTL_BUCKET]: {
		image: axolotl_bucket,
		glow: Glow.RAINBOW,
	},
};

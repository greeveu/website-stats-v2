import React from 'react';
import style from './minecraftText.module.sass';

interface MinecraftTextProps {
	text: string;
}

const styles: Record<string, string> = {
	'§0': style.p0,
	'§1': style.p1,
	'§2': style.p2,
	'§3': style.p3,
	'§4': style.p4,
	'§5': style.p5,
	'§6': style.p6,
	'§7': style.p7,
	'§8': style.p8,
	'§9': style.p9,
	'§a': style.pa,
	'§b': style.pb,
	'§c': style.pc,
	'§d': style.pd,
	'§e': style.pe,
	'§f': style.pf,

	// '§k': style.pk,
	'§l': style.pl,
	'§m': style.pm,
	'§n': style.pn,
	'§o': style.po,
	'§r': style.pr,
};

/**
 * Display text in minecraft format with color and format codes <br/>
 * Warning: currently `§r` does not reset text-decorations properly (§m | §n) <br/>
 * Warning: currently `§k` (Obfuscation effect) is not yet implemented
 * @param props
 * @constructor
 */
export const MinecraftText: React.FunctionComponent<MinecraftTextProps> = (
	props,
) => {
	const result = Array.from(props.text.matchAll(/§./g));

	console.log(!result[0]);

	if (!result[0]) {
		return <span className={style.root}>{props.text}</span>;
	}

	const index: number = result[0].index!;
	const key: string = result[0]['0']!;
	const start = props.text.slice(0, index);
	const end = props.text.slice(index + 2);

	if (styles[key]) {
		return (
			<span className={style.root}>
				{start}
				<span className={styles[key]}>
					<MinecraftText text={end} />
				</span>
			</span>
		);
	}

	return (
		<span className={style.root}>
			{start}
			<MinecraftText text={end} />
		</span>
	);
};

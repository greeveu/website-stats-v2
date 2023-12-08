import React, { ReactNode } from 'react';
import style from './contentSpacing.module.sass';

interface ContentSpacingProps {
	children: ReactNode | ReactNode[];
}

/**
 * First child is centered, second child is on the left, third is on the right
 * @param props
 * @constructor
 */
export const ContentSpacing: React.FunctionComponent<ContentSpacingProps> = (
	props,
) => {
	if (!Array.isArray(props.children)) {
		return (
			<div className={style.root}>
				<div className={style.left} />
				<div className={style.mid}>{props.children}</div>
				<div className={style.right} />
			</div>
		);
	}

	return (
		<div className={style.root}>
			<div className={style.left}>{props.children[1]}</div>
			<div className={style.mid}>{props.children[0]}</div>
			<div className={style.right}>{props.children[2]}</div>
		</div>
	);
};

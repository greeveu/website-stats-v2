import React, {ReactNode} from 'react';
import style from './contentSpacing.module.sass';

interface ContentSpacingProps
{
	children: ReactNode;
}

export const ContentSpacing: React.FunctionComponent<ContentSpacingProps> = (props) =>
{
	return (
		<div className={style.root}>
			<div className={style.content}>
				{props.children}
			</div>
		</div>
	);
};

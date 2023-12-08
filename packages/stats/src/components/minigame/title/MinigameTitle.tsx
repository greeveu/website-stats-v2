import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { minigameContext } from 'components/minigame/context/MinigameContextProvider';
import { Typography } from 'antd';
import style from './minigameTitle.module.sass';

export const MinigameTitle: React.FunctionComponent = observer((props) => {
	const context = useContext(minigameContext);

	return (
		<Typography.Title className={style.root}>
			{context.config.title}
		</Typography.Title>
	);
});

import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {minigameContext} from 'components/minigame/context/MinigameContextProvider';
import {Typography} from 'antd';

export const MinigameTitle: React.FunctionComponent = observer((props) =>
{
	const context = useContext(minigameContext);

	const title = (() =>
	{
		if ('subtitle' in context.config)
		{
			return `${context.config.title} / ${context.config.subtitle}`;
		}
		return context.config.title;
	})();

	return (
		<Typography.Title>
			{title}
		</Typography.Title>
	);
});

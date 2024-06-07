import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Breadcrumb } from 'antd';
import { minigameContext } from 'components/minigame/context/MinigameContextProvider';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { MultiMinigame } from "resources/minigames/minigames.types.ts";

export const Path: React.FunctionComponent = observer(() => {
	const context = useContext(minigameContext);
	const navigate = useNavigate();

	const items: ItemType[] = (() => {
		if (context.group) {
			return [
				{
					href: '/',
					title: 'Home',
				},
				{
					title: 'Minigame',
				},
				{
					title: context.group.title,
				},
				{
					title: (context.config as MultiMinigame).subtitle,
					menu: {
						items: context.group.minigames.map((item) => {
							return { title: item.subtitle, key: item.link };
						}),
						onClick: (value) => {
							if (!context.group) {
								return;
							}
							navigate(
								`/minigame/${context.group.link}/${value.key}`,
							);
						},
					},
				},
			];
		}

		return [
			{
				href: '/',
				title: 'Home',
				onClick: () => {
					navigate('/');
				},
			},
			{
				title: 'Minigame',
			},
			{
				title: context.config.title,
			},
		];
	})();

	return (
		<div>
			<Breadcrumb items={items} />
		</div>
	);
});

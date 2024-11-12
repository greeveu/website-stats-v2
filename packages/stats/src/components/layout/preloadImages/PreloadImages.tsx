import React from 'react';
import style from './preloadImages.module.sass';
import { observer } from 'mobx-react-lite';
import { MinigameType } from 'resources/minigames/minigames.types.ts';
import { miscSchema } from 'resources/minigames/misc/misc.schema.ts';
import { featuredSchema } from 'resources/minigames/featured/featured.schema.ts';
import { defaultSchema } from 'resources/minigames/default/default.schema.ts';

/**
 * Constantly loads minigame and often used images
 */
export const PreloadImages: React.FunctionComponent = observer(() => {
	const alt = 'Image preload - this should not be visible';

	return (
		<div className={style.root}>
			{[...featuredSchema, ...defaultSchema, ...miscSchema].map(
				(item) => {
					if (item.type === MinigameType.Minigame) {
						return (
							<img src={item.image} alt={alt} key={item.link} />
						);
					}
					return (
						<React.Fragment key={item.link}>
							{item.minigames.map((minigame) => {
								return (
									<img
										src={minigame.image}
										alt={alt}
										key={minigame.link}
									/>
								);
							})}
						</React.Fragment>
					);
				},
			)}
			<img src={'https://minotar.net/armor/bust/MrKavatch'} alt={alt} />
			<img
				src={'https://minotar.net/armor/bust/MHF_Enderman'}
				alt={alt}
			/>
		</div>
	);
});

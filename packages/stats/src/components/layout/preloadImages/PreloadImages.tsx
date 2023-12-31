import React from 'react';
import style from './preloadImages.module.sass';
import { observer } from 'mobx-react-lite';
import { minigamesSchema, MinigameType } from 'resources/minigames.schema';

/**
 * Constantly loads minigame and often used images
 */
export const PreloadImages: React.FunctionComponent = observer(() => {
	const alt = 'Image preload - this should not be visible';

	return (
		<div className={style.root}>
			{minigamesSchema.map((item) => {
				if (item.type === MinigameType.Minigame) {
					return <img src={item.image} alt={alt} key={item.image} />;
				}
				return (
					<>
						{item.minigames.map((minigame) => {
							return (
								<img
									src={minigame.image}
									alt={alt}
									key={minigame.image}
								/>
							);
						})}
					</>
				);
			})}
			<img src={'https://minotar.net/bust/MrKavatch'} alt={alt} />
			<img src={'https://minotar.net/bust/MHF_Enderman'} alt={alt} />
		</div>
	);
});

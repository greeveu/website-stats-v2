import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import style from './player.module.sass';
import { Typography } from 'antd';
import { CrownFilled } from '@ant-design/icons';
import { useCachedImage } from 'hooks/useCachedImage';

export enum Crown {
	Gold,
	Silver,
	Bronze,
}

interface PlayerProps {
	name: string;
	crown?: Crown;
}

export const Player: React.FunctionComponent<PlayerProps> = (props) => {
	const image = useCachedImage(
		`https://minotar.net/avatar/${props.name}/25.png`,
	);
	const crown = useMemo(() => {
		if (props.crown === Crown.Gold) {
			return (
				<CrownFilled
					style={{ color: 'gold' }}
					className={style.crown}
				/>
			);
		}

		if (props.crown === Crown.Silver) {
			return (
				<CrownFilled
					style={{ color: 'silver' }}
					className={style.crown}
				/>
			);
		}

		if (props.crown === Crown.Bronze) {
			return (
				<CrownFilled
					style={{ color: '#CD7F32' }}
					className={style.crown}
				/>
			);
		}

		return null;
	}, [props.crown]);

	return (
		<div className={style.root}>
			<Link to={`/player/${props.name}`}>
				{crown}
				<img src={image} alt={props.name} />
			</Link>
			<Link to={`/player/${props.name}`}>
				<Typography.Text>{props.name}</Typography.Text>
			</Link>
		</div>
	);
};

import React from 'react';
import {Typography} from 'antd';
import {MinecraftText} from 'components/text/MinecraftText';
import style from './clan.module.sass';
import {Link} from 'react-router-dom';

interface ClanProps
{
	name: string,
	tag: string
}

export const Clan: React.FunctionComponent<ClanProps> = (props) =>
{

	if (props.name === 'Einhörner')
	{
		return (
			<Link to={`/clan/${props.name}`}>
				<div className={style.root}>
					<Typography.Text>{props.name}</Typography.Text>
					<Typography.Text><MinecraftText text={props.tag} /></Typography.Text>
				</div>
			</Link>
		);
	}

	return (
		<Link to={`/clan/${props.name}`}>
			<div className={style.root}>
				<Typography.Text>{props.name}</Typography.Text>
				<Typography.Text><MinecraftText text={props.tag} /></Typography.Text>
			</div>
		</Link>
	);
};

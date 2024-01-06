import React, { useMemo } from 'react';
import { MinecraftText } from '../../../components/text/MinecraftText';
import { Typography } from 'antd';
import { Rank, StatsResponse } from '../playerPage.types';
import style from './title.module.sass';
import { Link } from 'react-router-dom';

interface TitleProps {
	result: StatsResponse;
}

const ranks: Record<Rank, string | null> = {
	[Rank.Admin]: '§cAdmin',
	[Rank.Bot]: '§8Bot',
	[Rank.Builder]: '§3Builder',
	[Rank.Default]: null,
	[Rank.Developer]: '§bDeveloper',
	[Rank.HeadBuilder]: '§3Head-Builder',
	[Rank.LeadDeveloper]: '§bDeveloper',
	[Rank.Moderator]: '§2Moderator',
	[Rank.Owner]: '§4Owner',
	[Rank.PremiumPlus]: '§ePremium-Plus',
	[Rank.Supporter]: '§9Supporter',
	[Rank.TestSupporter]: '§9Test-Supporter',
	[Rank.Vip]: '§6VIP',
	[Rank.Youtuber]: '§fYou§6§lTuber',
};

export const Title: React.FunctionComponent<TitleProps> = (props) => {
	const rank = useMemo(() => {
		if (ranks[props.result.rank.name] === null) {
			return null;
		}
		return <MinecraftText text={ranks[props.result.rank.name]!} />;
	}, [props.result.rank.name]);

	const until = useMemo(() => {
		if (props.result.rank.until === 0) {
			return null;
		}

		const text = `${ranks[props.result.rank.name]!} until ${new Date(
			props.result.rank.until * 1000,
		).toLocaleDateString()} `;

		return (
			<Typography.Text>
				<MinecraftText text={text} />
			</Typography.Text>
		);
	}, [props.result.rank.until, props.result.rank.name]);

	const clan = useMemo(() => {
		if (props.result.clan) {
			return (
				<div className={style.rank}>
					<Typography.Title level={4} className={style.clan}>
						<div>{props.result.clan.role} of</div>
						<Link to={`/clan/${props.result.clan.name}`}>
							<MinecraftText
								text={`§e${props.result.clan.tag}`}
							/>
						</Link>
					</Typography.Title>
				</div>
			);
		}
		return null;
	}, [props.result.clan]);

	return (
		<div className={style.root}>
			<img
				src={`https://minotar.net/armor/bust/${props.result.name}/180.png`}
				alt={props.result.name}
				className={style.img}
			/>
			<Typography.Title className={style.heading} level={1}>
				{rank} {props.result.name}
			</Typography.Title>
			{until}
			{clan}
		</div>
	);
};

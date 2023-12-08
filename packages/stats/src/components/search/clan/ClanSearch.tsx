import React, { useContext, useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { globalContext } from 'components/context/ContextProvider';
import { NetworkRequest, NetworkStatus } from 'lib/NetworkRequest';
import { config } from 'config';
import { Typography } from 'antd';
import style from './clanSearch.module.sass';
import logo from '../../../media/logo.png';
import { Link } from 'react-router-dom';

interface Clan {
	name: string;
	tag: string;
	size: number;
	playerperformance: number;
	id: number;
}

interface State {
	title: string;
	text: string;
	disabled: boolean;

	link: string;
}

export const ClanSearch: React.FunctionComponent = observer(() => {
	const context = useContext(globalContext);
	const [request, setRequest] = useState<NetworkRequest<Clan> | null>(null);
	// Clan has a max length of 16 chars
	const clanName = context.search.searchFor
		? context.search.searchFor.substring(0, 16)
		: null;

	useEffect(() => {
		if (clanName === null) {
			setRequest(null);
			return;
		}
		setRequest(new NetworkRequest(config.endpoint + `/clan/${clanName}`));
	}, [clanName]);

	const state: State = useMemo(() => {
		const doesNotExists = {
			title: `${clanName} Clan`,
			text: 'Does not exist',
			link: '',
			disabled: true,
		};

		if (request === null) {
			return {
				title: 'Clan search',
				text: 'Awaiting input...',
				link: '',
				disabled: true,
			};
		}

		switch (request.network) {
			case NetworkStatus.Pending:
				return {
					title: 'Clan search',
					text: 'NetworkingLoading...',
					link: '',
					disabled: true,
				};
			case NetworkStatus.Error:
				return {
					title: 'Clan search',
					text: 'A networking error occurred',
					link: '',
					disabled: true,
				};
			case NetworkStatus.NotFound:
				return doesNotExists;
		}

		const clan = request.result;
		const exists = clan.id + clan.size > 0;

		if (!exists) {
			return doesNotExists;
		}

		return {
			title: `${clan.name} Clan`,
			text: clan.size === 1 ? `1 Member` : `${clan.size} Members`,
			link: clan.name,
			disabled: false,
		};
	}, [clanName, request?.network]);

	const toggleLink = state.disabled ? style.disabled : style.enabled;
	const linkTo = useMemo(() => {
		return `/clan/${state.link}`;
	}, [state.link]);

	return (
		<div className={style.root}>
			<Link to={linkTo} className={toggleLink}>
				<div
					className={style.img}
					style={{ backgroundImage: `url("${logo}")` }}
				/>
			</Link>
			<Link to={linkTo} className={toggleLink}>
				<Typography.Title
					level={4}
					className={style.title}
					disabled={state.disabled}
				>
					{state.title}
				</Typography.Title>
			</Link>
			<Link to={linkTo} className={toggleLink}>
				<Typography.Text disabled={state.disabled}>
					{state.text}
				</Typography.Text>
			</Link>
		</div>
	);
});

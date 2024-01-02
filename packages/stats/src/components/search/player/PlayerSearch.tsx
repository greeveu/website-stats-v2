import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { globalContext } from 'components/context/ContextProvider';
import { config } from 'resources/config';
import { Display } from 'components/search/player/Display';

interface PlayerUuid {
	uuid: string;
	name: string;
}

interface PlayerMeta {
	uuid: string;
	name: string;
	lastOnline: number;
	firstOnline: number;
	// Some more info we currently don't need
}

const isUUid = new RegExp(
	'^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$',
	'gm',
);

export enum PlayerSearchStatus {
	Waiting,
	Loading,
	Invalid,
	Success,
	Error,
}

interface StateSuccess {
	status: PlayerSearchStatus.Success;
	data: PlayerMeta;
}

interface StateInvalid {
	status: PlayerSearchStatus.Invalid;
	data: { name: string };
}

interface StateOther {
	status: Exclude<
		PlayerSearchStatus,
		PlayerSearchStatus.Success | PlayerSearchStatus.Invalid
	>;
}

export type PlayerSearchState = StateOther | StateSuccess | StateInvalid;

/**
 * Player search component of the search bar
 */
export const PlayerSearch: React.FunctionComponent = observer(() => {
	const context = useContext(globalContext);
	const [state, setState] = useState<PlayerSearchState>({
		status: PlayerSearchStatus.Waiting,
	});

	useEffect(() => {
		const searchFor = context.search.searchFor;

		if (searchFor === null) {
			setState({ status: PlayerSearchStatus.Waiting });
			return;
		}

		(async () => {
			setState({ status: PlayerSearchStatus.Loading });

			try {
				/**
				 * Retrieve the UUID of the player
				 */
				const uuid = await (async () => {
					// Search is already UUID
					if (searchFor.match(isUUid)) {
						return searchFor;
					}

					// Network Request UUID
					const result = await fetch(
						`${config.endpoint}/player/uuid/${searchFor}`,
					);
					if (!result.ok) {
						setState({
							status: PlayerSearchStatus.Invalid,
							data: { name: searchFor },
						});
						return;
					}
					return ((await result.json()) as PlayerUuid).uuid;
				})();

				if (!uuid) {
					return;
				}

				// Network Request Stats
				const res2 = await fetch(
					`${config.endpoint}/player/meta/${uuid}`,
				);

				// Player does not exists
				if (!res2.ok) {
					setState({
						status: PlayerSearchStatus.Invalid,
						data: { name: searchFor },
					});
					return;
				}
				const playerData = (await res2.json()) as PlayerMeta;

				// Get name / keep search value for casing
				const name = (() => {
					if (searchFor.match(isUUid)) {
						context.search.searchFor = playerData.name;
						context.search.text = playerData.name;
						return playerData.name;
					}
					return searchFor;
				})();

				// Preload image and set state after that
				await fetch(`https://minotar.net/bust/${uuid}`);
				setState({
					status: PlayerSearchStatus.Success,
					data: { ...playerData, name: name },
				});
			} catch (e: any) {
				setState({ status: PlayerSearchStatus.Error });
			}
		})();
	}, [context.search.searchFor, context.search]);

	return <Display state={state} />;
});

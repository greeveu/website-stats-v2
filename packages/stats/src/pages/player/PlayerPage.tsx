import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NetworkRequest, NetworkStatus } from '../../lib/NetworkRequest';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { config } from '../../resources/config';
import { NetworkingLoading } from '../../components/networking/loading/NetworkingLoading';
import { NetworkingError } from '../../components/networking/error/NetworkingError';
import { NetworkingNotFound } from '../../components/networking/notFound/NetworkingNotFound';
import { ContentSpacing } from '../../components/layout/contentSpacing/ContentSpacing';
import { Divider } from 'antd';
import style from './playerPage.module.sass';
import { Title } from './title/Title';
import { StatsResponse } from './playerPage.types';
import { Misc } from './misc/Misc';
import { Minigames } from './minigames/Minigames';

interface UuidResponse {
	uuid: string;
	name: string;
}

const uuidRegex =
	/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

export const PlayerPage: React.FunctionComponent = observer(() => {
	/**
	 * Identifier may be the user name or user ID
	 */
	const params = useParams<{ identifier: string }>();

	const [uuidRequest, setUuidRequest] =
		useState<NetworkRequest<UuidResponse> | null>(null);
	const [statsRequest, setStatsRequest] =
		useState<NetworkRequest<StatsResponse> | null>(null);

	/**
	 * Query for UUID of we only have the name
	 */
	useEffect(() => {
		if (!params.identifier) {
			setUuidRequest(null);
			setStatsRequest(null);
			return;
		}
		if (params.identifier.match(uuidRegex)) {
			return;
		}
		setUuidRequest(
			new NetworkRequest(
				`${config.endpoint}/player/uuid/${params.identifier}`,
			),
		);
		setStatsRequest(null);
	}, [params.identifier]);

	useEffect(() => {
		const uuid = (() => {
			if (!params.identifier) {
				return null;
			}
			if (params.identifier.match(uuidRegex)) {
				return params.identifier;
			}
			if (!uuidRequest) {
				return null;
			}
			if (uuidRequest.network === NetworkStatus.Success) {
				return uuidRequest.result.uuid;
			}
			return null;
		})();

		if (!uuid) {
			return;
		}
		setStatsRequest(
			new NetworkRequest(`${config.endpoint}/player/stats/${uuid}`),
		);
	}, [params.identifier, uuidRequest, uuidRequest?.network]);

	console.log('stats', toJS(statsRequest?.result));
	console.log('stats', toJS(statsRequest));
	console.log('uuid', toJS(uuidRequest));

	if (uuidRequest && uuidRequest.network === NetworkStatus.NotFound) {
		return <NetworkingNotFound />;
	}

	if (uuidRequest && uuidRequest.network === NetworkStatus.Error) {
		return <NetworkingError />;
	}

	if (!statsRequest || statsRequest.network === NetworkStatus.Pending) {
		return <NetworkingLoading />;
	}

	if (statsRequest.network === NetworkStatus.NotFound) {
		return <NetworkingNotFound />;
	}

	if (statsRequest.network === NetworkStatus.Error) {
		return <NetworkingError />;
	}

	return (
		<ContentSpacing>
			<div>
				<div>
					<div className={style.heading}>
						<Title result={statsRequest.result} />
					</div>

					<Divider />

					<div className={style.misc}>
						<Misc result={statsRequest.result} />
					</div>

					<Divider />

					<Minigames result={statsRequest.result.stats} />
				</div>
			</div>
		</ContentSpacing>
	);
});

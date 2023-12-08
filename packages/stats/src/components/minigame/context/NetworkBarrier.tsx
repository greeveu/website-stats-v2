import React, { ReactNode, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { minigameContext } from 'components/minigame/context/MinigameContextProvider';
import { NetworkingLoading } from 'components/networking/loading/NetworkingLoading';
import { NetworkStatus } from 'lib/NetworkRequest';
import { NetworkingError } from 'components/networking/error/NetworkingError';
import { NetworkingNoData } from 'components/networking/noData/NetworkingNoData';

interface NetworkBarrierProps {
	children: ReactNode;
}

export const NetworkBarrier: React.FunctionComponent<NetworkBarrierProps> =
	observer((props) => {
		const context = useContext(minigameContext);

		if (!context.network) {
			return <NetworkingLoading />;
		}

		if (context.network.network === NetworkStatus.Error) {
			return <NetworkingError />;
		}

		if (context.network.network !== NetworkStatus.Success) {
			return <NetworkingLoading />;
		}

		if (context.network.data?.items.length === 0) {
			context.network.playEffect(NetworkStatus.NotFound);
			return <NetworkingNoData />;
		}

		return <React.Fragment>{props.children}</React.Fragment>;
	});

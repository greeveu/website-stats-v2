import React, {ReactNode, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {minigameContext} from 'components/minigame/MinigameContextProvider';
import {NetworkingLoading} from 'components/networking/loading/NetworkingLoading';
import {NetworkStatus} from 'lib/NetworkRequest';
import {NetworkingError} from 'components/networking/error/NetworkingError';
import {NetworkingNotFound} from 'components/networking/notFound/NetworkingNotFound';

interface NetworkBarrierProps
{
	children: ReactNode;
}

export const NetworkBarrier: React.FunctionComponent<NetworkBarrierProps> = observer((props) =>
{
	const context = useContext(minigameContext);

	console.log(context.network?.network)

	if (!context.network)
	{
		return <NetworkingLoading />;
	}

	if (context.network.network === NetworkStatus.Error)
	{
		return <NetworkingError />;
	}

	if (context.network.network !== NetworkStatus.Success)
	{
		return <NetworkingLoading />;
	}

	if (context.network.result.length === 0)
	{
		context.network.playEffect(NetworkStatus.NotFound)
		return <NetworkingNotFound />;
	}

	return <React.Fragment>{props.children}</React.Fragment>;
});

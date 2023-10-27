import {makeAutoObservable} from 'mobx';
import {Context} from 'components/context/ContextProvider';
import {config} from 'config';
import {NetworkStatus} from 'lib/NetworkRequest';

interface Props
{
	url: string,
	offset: number,
	context: Context;
}

/**
 * Reworked NetworkRequest tailored to minigame page
 */
export class MinigameNetworkRequest
{
	public network: NetworkStatus = NetworkStatus.Pending;
	public data: null | { items: unknown[], nextPage: boolean } = null;
	private readonly context: Context;

	constructor(props: Props)
	{
		makeAutoObservable(this);

		this.context = props.context;
		this.setNetwork(NetworkStatus.Pending);

		(async () =>
		{
			try
			{

				const result = await fetch(`${config.endpoint}${props.url}?offset=${props.offset * config.defaultLimit}&amount=${config.defaultLimit + 1}`);

				if (result.status === 500)
				{
					return this.setNetwork(NetworkStatus.Error);
				}

				if (result.status === 404)
				{
					return this.setNetwork(NetworkStatus.NotFound);
				}

				if (!result.ok)
				{
					return this.setNetwork(NetworkStatus.Error);
				}

				const res: unknown[] = await result.json();
				this.data = {
					nextPage: res.length === config.defaultLimit + 1,
					items: res.splice(0, config.defaultLimit),
				};
				this.setNetwork(NetworkStatus.Success);
			}
			catch (e: any)
			{
				console.error('NetworkError', e);
				return this.setNetwork(NetworkStatus.Error);
			}
		})();

	}

	public playEffect(status: NetworkStatus): void
	{
		/**
		 * TODO add override logic
		 */
		this.context.effect.network = status;
	}

	private setNetwork(status: NetworkStatus): void
	{
		this.playEffect(status);
		this.network = status;
	}
}

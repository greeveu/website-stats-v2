import {makeAutoObservable} from 'mobx';
import {Context} from 'components/context/ContextProvider';

export enum NetworkStatus
{
	Pending = 'PENDING',
	Error = 'ERROR',
	Success = 'SUCCESS',
	NotFound = 'NOT_FOUND'
}

interface Props
{
	context?: Context;
	delay?: number;
}

export class NetworkRequest<T>
{
	public network: NetworkStatus = NetworkStatus.Pending;
	public result: T = null as unknown as T;
	private readonly context: Context | null = null;
	private readonly delay: number;

	constructor(input: RequestInfo | URL, init?: RequestInit, props?: Props)
	{
		makeAutoObservable(this);

		this.context = props?.context || null;
		this.delay = props?.delay || 0;
		this.setNetwork(NetworkStatus.Pending);

		(async () =>
		{
			try
			{
				const result = await fetch(input, init);
				await this.awaitDelay()

				if (result.status === 500)
				{
					return this.setNetwork(NetworkStatus.Error)
				}

				if (result.status === 404)
				{
					return this.setNetwork(NetworkStatus.NotFound)
				}

				if (!result.ok)
				{
					return this.setNetwork(NetworkStatus.Error)
				}

				this.result = await result.json();
				this.setNetwork(NetworkStatus.Success)
			}
			catch (e: any)
			{
				console.error('NetworkError', e);
				return this.setNetwork(NetworkStatus.Error)
			}
		})();

	}

	private setNetwork(status: NetworkStatus): void{
		if(!this.context){
			this.network = status;
			return;
		}
		this.context.effect.network = status;
		this.network = status;
	}

	private async awaitDelay()
	{
		if(this.delay <= 0){
			return;
		}
		return new Promise((resolve) =>
		{
			setTimeout(() =>
			{
				resolve(null);
			}, this.delay);
		});
	}
}

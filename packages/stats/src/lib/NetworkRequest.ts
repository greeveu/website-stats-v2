import {makeAutoObservable} from 'mobx';

export enum NetworkStatus
{
	Pending = 'PENDING',
	Error = 'ERROR',
	Success = 'SUCCESS',
	NotFound = 'NOT_FOUND'
}

export class NetworkRequest<T>
{
	public network: NetworkStatus = NetworkStatus.Pending;
	public result: T = null as unknown as T;

	constructor(input: RequestInfo | URL, init?: RequestInit)
	{
		makeAutoObservable(this);

		(async () =>
		{
			try
			{
				const result = await fetch(input, init);

				if (result.status === 500)
				{
					this.network = NetworkStatus.Error;
					return;
				}

				if (result.status === 404)
				{
					this.network = NetworkStatus.NotFound;
				}

				if (!result.ok)
				{
					this.network = NetworkStatus.Error;
					return;
				}

				this.result = await result.json();
				this.network = NetworkStatus.Success;
			}
			catch (e: any)
			{
				console.error('NetworkError', e);
				this.network = NetworkStatus.Error;
			}
		})();

	}
}
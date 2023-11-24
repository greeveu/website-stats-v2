import {useEffect, useState} from 'react';

interface Item
{
	ttl: Date,
	cached: string
}

/**
 * Fetches and caches images in local storage, returns an empty image during loading
 * @param url
 */
export const useCachedImage = (url: string): string =>
{
	const [state, setState] = useState<string | null>(null);
	const id = `cached-${url}`;

	useEffect(() =>
	{
		setState(null);

		try
		{
			(async () =>
			{
				const stored = localStorage.getItem(id);
				if (stored)
				{
					const item = JSON.parse(stored);
					if (new Date(item.ttl) > new Date)
					{
						setState(item.cached);
						return;
					}
					localStorage.removeItem(id);
				}

				const result = await fetch(url);
				const blob = await result.blob();

				const reader = new FileReader();
				reader.readAsDataURL(blob);
				reader.onload = function ()
				{
					const item: Item = {
						ttl: new Date(new Date().getTime() + 12 * 60 * 60 * 1000),
						cached: this.result as string,
					};
					localStorage.setItem(id, JSON.stringify(item));
					setState(this.result as string);
				};

			})();

		}
		catch (e)
		{
			console.error(e);
			setState(url);
		}

	}, [url]);

	return state || 'data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22/%3E';
};

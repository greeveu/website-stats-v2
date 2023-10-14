import {useParams} from 'react-router-dom';
import {useMemo} from 'react';

interface Current
{
	page: number,
	offset: number,
	topLevel: boolean,
}

/**
 * Returns current page number / offset data <br/>
 * Also if current page number is in the top level of the path
 * ```
 * `minigame/mlgrush/2` page = `2`, topLevel = `true`
 * `minigame/mlgrush/` page = `1`, topLevel = `false`
 * ```
 */
export const useCurrentPage = (): Current =>
{
	const params = useParams<{ page?: string }>();
	const page: number = useMemo(() =>
	{
		if (!params.page)
		{
			return 1;
		}
		const page = Number.parseInt(params.page);
		if (!Number.isSafeInteger(page))
		{
			return 1;
		}
		if (page <= 0)
		{
			return 1;
		}
		return page;
	}, [params.page]);

	return {
		page: page,
		offset: page - 1,
		topLevel: params.page !== undefined,
	};
};

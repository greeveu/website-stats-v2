import React, {useContext, useEffect} from 'react';
import {minigameContext} from 'components/minigame/MinigameContextProvider';
import {useCurrentPage} from 'hooks/useCurrentPage';
import {createSearchParams, useNavigate} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {useFilteredOptions} from 'components/minigame/options/useFilteredOptions';

/**
 * Synchronizes pagination and options between browser and state
 * @param props
 * @constructor
 */
export const PaginationSynchronizer: React.FunctionComponent = observer(() =>
{
	const context = useContext(minigameContext);
	const current = useCurrentPage();
	const navigate = useNavigate();
	const filtered = useFilteredOptions()

	useEffect(() =>
	{
		context.offset = current.offset;
	}, [context, current.offset]);

	useEffect(() =>
	{
		if (context.offset === current.offset)
		{
			return;
		}

		const search = `?${createSearchParams(filtered)}`;

		if (current.topLevel)
		{
			if (context.offset === 0)
			{
				navigate({pathname: './../', search});
				return;
			}
			navigate({pathname: `./../${context.offset}`, search});
			return;
		}

		if (context.offset === 0)
		{
			navigate({pathname: './', search});
			return;
		}
		navigate({pathname: `./${context.offset}`, search});
		return;

	}, [context.offset]);

	return null;
});

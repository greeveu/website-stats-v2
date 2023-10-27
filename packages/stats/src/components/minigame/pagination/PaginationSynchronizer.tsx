import React, {useContext, useEffect} from 'react';
import {minigameContext} from 'components/minigame/context/MinigameContextProvider';
import {useCurrentPage} from 'hooks/useCurrentPage';
import {useNavigate} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {useSearch} from 'components/minigame/sidelane/options/useSearch';

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
	const search = useSearch();

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

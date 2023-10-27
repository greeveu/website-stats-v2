import {useContext} from 'react';
import {minigameContext} from 'components/minigame/context/MinigameContextProvider';
import {createSearchParams} from 'react-router-dom';

/**
 * Returns a record of all current non default value options, parsed to the url query format
 */
export const useSearch = () =>
{
	const context = useContext(minigameContext);

	if (!context.config.api || !context.config.api.options)
	{
		return '';
	}

	const params = Object.entries(context.options).filter(([key, value]) =>
	{
		return value !== context.config.api!.options![key].default;
	});

	return `?${createSearchParams(Object.fromEntries(params))}`;
};

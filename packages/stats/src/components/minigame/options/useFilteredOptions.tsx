import {useContext} from 'react';
import {minigameContext} from 'components/minigame/MinigameContextProvider';

/**
 * Returns a record of all current non default value options
 */
export const useFilteredOptions = (): Record<string, string> =>
{

	const context = useContext(minigameContext);

	if (!context.config.api || !context.config.api.options)
	{
		return {};
	}

	const params = Object.entries(context.options).filter(([key, value]) =>
	{
		return value !== context.config.api!.options![key].default;
	});
	return Object.fromEntries(params);
};

import React, {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {minigameContext} from 'components/minigame/MinigameContextProvider';
import {useSearchParams} from 'react-router-dom';
import {useFilteredOptions} from 'components/minigame/options/useFilteredOptions';

/**
 * Synchronises all options between the browser and the context state
 * @param props
 * @constructor
 */
export const OptionSynchronizer: React.FunctionComponent = observer(() =>
{
	const context = useContext(minigameContext);
	const [searchParams, setSearchParams] = useSearchParams();
	const fitered = useFilteredOptions();

	/**
	 * Update the state
	 */
	useEffect(() =>
	{
		// Typescript check
		if (!context.config.api?.options)
		{
			return;
		}

		for (const [key, value] of Object.entries(Object.fromEntries(searchParams)))
		{

			// Option key does not exist
			if (!context.config.api.options[key])
			{
				return;
			}

			// Option key does not exist
			if (!context.config.api.options[key])
			{
				return;
			}

			// Option value does not exist
			const options = Object.keys(context.config.api.options[key].options);
			if (!options.includes(value))
			{
				return;
			}

			// Set option
			context.options[key] = value;
		}
	}, [context, searchParams]);

	/**
	 * Update the browser
	 */
	useEffect(() =>
	{
		setSearchParams(fitered);
	}, [JSON.stringify(context.options)]);

	return null;
});

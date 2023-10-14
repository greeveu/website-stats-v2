import React, {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {minigameContext} from 'components/minigame/MinigameContextProvider';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {useSearch} from 'components/minigame/options/useSearch';

/**
 * Synchronises all options between the browser and the context state
 * @param props
 * @constructor
 */
export const OptionSynchronizer: React.FunctionComponent = observer(() =>
{
	const context = useContext(minigameContext);
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const search = useSearch();

	/**
	 * Update the state
	 */
	useEffect(() =>
	{
		if (!context.config.api.options)
		{
			return;
		}

		for (const [key, value] of Object.entries(context.config.api.options))
		{

			const param = searchParams.get(key);
			if (!param)
			{
				context.options[key] = value.default;
				return;
			}

			const options = Object.keys(value.options);
			if (!options.includes(param))
			{
				context.options[key] = value.default;
				return;
			}

			context.options[key] = param;
		}
	}, [context, searchParams]);

	/**
	 * Update the browser
	 */
	useEffect(() =>
	{
		navigate({pathname: './', search});
	}, [JSON.stringify(context.options)]);

	return null;
});

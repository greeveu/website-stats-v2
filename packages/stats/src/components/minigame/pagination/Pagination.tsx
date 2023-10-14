import React, {useContext, useMemo} from 'react';
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import {createSearchParams, Link} from 'react-router-dom';
import {useCurrentPage} from 'hooks/useCurrentPage';
import style from './pagination.module.sass';
import {minigameContext} from 'components/minigame/MinigameContextProvider';
import {config} from 'config';
import {useFilteredOptions} from 'components/minigame/options/useFilteredOptions';

/**
 * Simple pagination component <br />
 * Uses {@link useCurrentPage} for navigation data.
 * @constructor
 */
export const Pagination: React.FunctionComponent = () =>
{
	const context = useContext(minigameContext);
	const current = useCurrentPage();
	const nextDisabled = Array.isArray(context.network?.result) && context.network?.result.length !== config.defaultLimit;
	const filtered = useFilteredOptions();

	const navigation = useMemo(() =>
	{

		if (current.topLevel)
		{
			return {
				prev: {
					disabled: current.page === 0,
					link: current.page === 2 ? './../' : `./../${current.page - 1}`,
				},
				next: {
					disabled: nextDisabled,
					link: `./../${current.page + 1}`,
				},
			};
		}

		return {
			prev: {
				disabled: current.page === 1,
				link: '',
			},
			next: {
				disabled: nextDisabled,
				link: `./${current.page + 1}`,
			},
		};

	}, [current.page, current.topLevel]);

	const search = `?${createSearchParams(filtered)}`;

	return (
		<div className={style.root}>
			<Link to={{pathname: navigation.prev.link, search}}>
				<Button
					size={'large'}
					icon={<CaretLeftOutlined />}
					disabled={navigation.prev.disabled}
				/>
			</Link>
			<Link to={{pathname: navigation.next.link, search}}>
				<Button
					size={'large'}
					icon={<CaretRightOutlined />}
					disabled={navigation.next.disabled}
				/>
			</Link>
		</div>
	);
};

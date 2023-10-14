import React, {useMemo} from 'react';
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import {useCurrentPage} from 'hooks/useCurrentPage';
import style from "./pagination.module.sass"

/**
 * Simple pagination component <br />
 * Uses {@link useCurrentPage} for navigation data.
 * @constructor
 */
export const Pagination: React.FunctionComponent = () =>
{
	const current = useCurrentPage();
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
					disabled: false,
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
				disabled: false,
				link: `./${current.page + 1}`,
			},
		};

	}, [current.page, current.topLevel]);

	return (
		<div className={style.root}>
			<Link to={navigation.prev.link}>
				<Button
					size={'large'}
					icon={<CaretLeftOutlined />}
					disabled={navigation.prev.disabled}
				/>
			</Link>
			<Link to={navigation.next.link}>
				<Button
					size={'large'}
					icon={<CaretRightOutlined />}
					disabled={navigation.next.disabled}
				/>
			</Link>
		</div>
	);
};

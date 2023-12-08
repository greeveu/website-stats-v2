import { Typography } from 'antd';
import React from 'react';
import style from './header.module.sass';
import logo from 'media/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from 'components/search/SearchBar';
import { ContentSpacing } from 'components/layout/contentSpacing/ContentSpacing';
import { SearchIcon } from 'components/search/SearchIcon';

export const Header: React.FunctionComponent = () => {
	const location = useLocation();
	const reload = location.pathname === '' || location.pathname === '/';

	return (
		<div className={style.root}>
			<ContentSpacing>
				<div className={style.container}>
					<Link to={'/'} reloadDocument={reload}>
						<div className={style.branding}>
							<img
								className={style.logo}
								src={logo}
								alt={'Greev.eu'}
							/>
							<Typography.Title level={4} className={style.title}>
								Greev.eu Stats
							</Typography.Title>
							<Typography.Title
								level={4}
								className={style.shortTitle}
							>
								Stats
							</Typography.Title>
						</div>
					</Link>
					<div className={style.searchBar}>
						<SearchBar />
					</div>
					<div className={style.searchIcon}>
						<SearchIcon />
					</div>
				</div>
			</ContentSpacing>
		</div>
	);
};

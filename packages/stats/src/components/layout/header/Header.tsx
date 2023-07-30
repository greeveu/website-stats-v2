import {Input, InputRef, Typography} from 'antd';
import React, {useContext, useRef} from 'react';
import style from './header.module.sass';
import logo from './logo.png';
import {Link, useLocation} from 'react-router-dom';
import {globalContext} from 'components/context/ContextProvider';
import {Searchbar} from 'components/searchbar/Searchbar';
import {observer} from 'mobx-react-lite';

// TODO GAME CLAN PLAYER

export const Header: React.FunctionComponent = observer(() =>
{
	const location = useLocation();
	const reload = location.pathname === '' || location.pathname === '/';

	const context = useContext(globalContext);
	const ref = useRef<null | InputRef>(null)

	const openSearchBar = () =>
	{
		if(ref.current){
			ref.current.blur()
		}
		context.search.open = true;
	};

	return (
		<div className={style.root}>
			<Link
				to={'/'}
				reloadDocument={reload}
			>
				<div className={style.branding}>

					<img
						className={style.logo}
						src={logo}
						alt={'Greev.eu'}
					/>
					<Typography.Title
						level={4}
						style={{margin: '0px'}}
					>
						Greev.eu Stats
					</Typography.Title>

				</div>
			</Link>

			<div>
				<Input.Search
					ref={ref}
					placeholder={'Search everything'}
					style={{width: 400}}
					value={context.search.text}
					onSearch={openSearchBar}
					onClick={openSearchBar}
					onFocus={openSearchBar}
				/>
				<Searchbar />
			</div>
		</div>
	);
});

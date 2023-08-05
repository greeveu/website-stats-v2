import React, {ChangeEvent, useContext, useEffect, useRef} from 'react';
import {Input, InputRef, Modal} from 'antd';
import {observer} from 'mobx-react-lite';
import {globalContext} from 'components/context/ContextProvider';
import style from "./searchOverlay.module.sass"
import {PlayerSearch} from 'components/search/player/PlayerSearch';
import {ClanSearch} from 'components/search/clan/ClanSearch';
import {useLocation} from 'react-router-dom';

/**
 * Portal to middle for the opening animation!
 */
export const SearchOverlay: React.FunctionComponent = observer(() =>
{
	const location = useLocation()
	const ref = useRef<null | InputRef>(null);
	const context = useContext(globalContext);

	const closeSearchBar = () =>
	{
		context.search.open = false;
		context.search.text = '';
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) =>
	{
		context.search.text = event.target.value;
	};

	/**
	 * Properly focus search on open
	 */
	useEffect(() =>
	{
		if (!context.search.open)
		{
			return;
		}
		if (!ref.current)
		{
			return;
		}
		window.setTimeout(() =>
		{
			if (!ref.current)
			{
				return;
			}
			ref.current.focus();
		}, 0);
	}, [context.search.open]);

	/**
	 * Debounce user input and search for it
	 */
	useEffect(() =>
	{
		const debounce = setTimeout(() =>
		{
			if (context.search.text === '')
			{
				context.search.searchFor = null;
				return;
			}

			context.search.searchFor = context.search.text.trim();
		}, 500);

		return () => clearTimeout(debounce);
	}, [context.search.text]);

	/**
	 * Close the search overlay after navigation
	 */
	useEffect(() => {
		context.search.open=false;
	}, [location.pathname])

	return (
		<Modal
			title={'Search everything'}
			open={context.search.open}
			onCancel={closeSearchBar}
		>
			<Input
				placeholder={'Player / Clan / Minigame'}
				value={context.search.text}
				onChange={onChange}
				ref={ref}
				autoFocus={true}
			/>
			<div className={style.container}>
				<div className={style.item}>
					<PlayerSearch/>
				</div>
				<div className={style.divider}/>
				<div className={style.item}>
					<ClanSearch/>
				</div>
			</div>
		</Modal>
	);
});
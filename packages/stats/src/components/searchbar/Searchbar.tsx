import React, {ChangeEvent, useContext, useEffect, useRef} from 'react';
import {Divider, Input, InputRef, Modal} from 'antd';
import {observer} from 'mobx-react-lite';
import {globalContext} from 'components/context/ContextProvider';
import {PlayerSearch} from 'components/searchbar/player/PlayerSearch';
import {ClanSearch} from 'components/searchbar/clan/ClanSearch';
import style from "./searchbar.module.sass"

/**
 *
 * Network abstaction object! Caching?
 *
 * CLAN // Query, player size
 * MINIGAME // LOCAL LIST
 */

/**
 * Portal to middle for the opening animation!
 */
export const Searchbar: React.FunctionComponent = observer(() =>
{

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
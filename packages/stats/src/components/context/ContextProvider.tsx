import React, {createContext, ReactNode, useState} from 'react';
import {makeAutoObservable} from 'mobx';

interface SearchContextProps
{
	children?: ReactNode;
}

export interface Context
{
	search: {
		/**
		 * Open state of the searchbar modal
		 */
		open: boolean,
		/**
		 * Current text that is entered on a search, not debounced
		 */
		text: string,
		/**
		 * Current text to search, debounced and usable for networking requesting
		 */
		searchFor: null | string,
	};
}

const initialContext: Context = makeAutoObservable({
	search: {
		open: false,
		text: '',
		searchFor: null,
	},
});

export const globalContext = createContext<Context>(initialContext);

export const ContextProvider: React.FunctionComponent<SearchContextProps> = (props) =>
{
	const [state] = useState<Context>(initialContext);

	return (
		<globalContext.Provider value={state}>
			{props.children}
		</globalContext.Provider>
	);
};
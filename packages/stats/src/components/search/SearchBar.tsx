import React, { useContext, useRef } from 'react';
import { Input, InputRef } from 'antd';
import { globalContext } from 'components/context/ContextProvider';
import { observer } from 'mobx-react-lite';

interface SearchFieldProps {
	placeholder?: string;
}

export const SearchBar: React.FunctionComponent<SearchFieldProps> = observer(
	(props) => {
		const context = useContext(globalContext);
		const ref = useRef<null | InputRef>(null);

		const openSearchBar = () => {
			if (ref.current) {
				ref.current.blur();
			}
			context.search.open = true;
		};

		return (
			<Input.Search
				ref={ref}
				placeholder={props.placeholder || 'Search everything'}
				style={{ width: 400 }}
				value={context.search.text}
				onSearch={openSearchBar}
				onClick={openSearchBar}
				onFocus={openSearchBar}
			/>
		);
	},
);

import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { globalContext } from 'components/context/ContextProvider';

export const SearchIcon: React.FunctionComponent = observer(() => {
	const context = useContext(globalContext);
	const openSearchBar = () => {
		context.search.open = true;
	};

	return (
		<Button
			icon={<SearchOutlined />}
			onClick={openSearchBar}
			style={{ color: 'rgba(255, 255, 255, 0.45)' }}
		/>
	);
});

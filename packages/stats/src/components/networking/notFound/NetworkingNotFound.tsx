import React from 'react';
import style from 'components/networking/notFound/networkingNotFound.module.sass';
import {MehOutlined} from '@ant-design/icons';
import {Typography} from 'antd';
import {SearchBar} from 'components/search/SearchBar';

export const NetworkingNotFound: React.FunctionComponent = () =>
{
	return (
		<div className={style.root}>
			<MehOutlined className={style.icon} />
			<Typography.Title
				level={3}
				type={'danger'}
			>
				This item does not exist
			</Typography.Title>
			<SearchBar placeholder={'Search everything instead'} />
		</div>
	);
};
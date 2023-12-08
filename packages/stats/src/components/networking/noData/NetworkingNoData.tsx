import React from 'react';
import style from 'components/networking/notFound/networkingNotFound.module.sass';
import { MehOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

export const NetworkingNoData: React.FunctionComponent = () => {
	return (
		<div className={style.root}>
			<MehOutlined className={style.icon} />
			<Typography.Title level={3} type={'danger'}>
				There is no data for this
			</Typography.Title>
		</div>
	);
};

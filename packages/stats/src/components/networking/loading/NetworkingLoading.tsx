import React from 'react';
import { Spin, Typography } from 'antd';
import style from './networkingLoading.module.sass';

export const NetworkingLoading: React.FunctionComponent = () => {
	return (
		<div className={style.root}>
			<Spin size={'large'} />
			<Typography.Text disabled={true}>Loading data...</Typography.Text>
		</div>
	);
};

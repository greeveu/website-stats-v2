import React from 'react';
import {Typography} from 'antd';
import style from './networkingError.module.sass';
import {ReloadOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

export const NetworkingError: React.FunctionComponent = () =>
{
	return (
		<div className={style.root}>
			<Link
				reloadDocument={true}
				to={''}
			>
				<ReloadOutlined className={style.icon} />
			</Link>
			<Typography.Title
				level={3}
				type={'danger'}
			>
				Networking error :(
			</Typography.Title>
		</div>
	);
};

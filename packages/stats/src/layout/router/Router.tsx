import React from 'react';
import {Breadcrumb} from 'antd';

export const Router: React.FunctionComponent = () =>
{
	return (
		<div>
			<Breadcrumb style={{margin: '16px 0'}}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>Player</Breadcrumb.Item>
				<Breadcrumb.Item>KuschelCreeper</Breadcrumb.Item>
			</Breadcrumb>
			<div
				className='site-layout-background'
				style={{padding: 24, minHeight: 380}}
			>
				Content
				saddasdsa
				as
				dads
				<br />
				<br />
				<br />
				card stuff ?
			</div>
		</div>
	);
};
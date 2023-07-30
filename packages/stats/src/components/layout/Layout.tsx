import React from 'react';
import {Breadcrumb, Layout as AntdLayout} from 'antd';
import {Header} from 'components/layout/header/Header';

const {Content, Footer} = AntdLayout;

export const Layout: React.FunctionComponent = () =>
{

	return (
		<AntdLayout>
			<Header />
			<Content
				className='site-layout'
				style={{padding: '0 50px'}}
			>
				<Breadcrumb style={{margin: '16px 0'}}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
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
			</Content>
			<Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
		</AntdLayout>
	);
};
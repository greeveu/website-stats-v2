import React, {ReactNode} from 'react';
import {Breadcrumb, Layout as AntdLayout} from 'antd';
import {Header} from 'layout/header/Header';
import {Router} from 'layout/router/Router';

const {Content, Footer} = AntdLayout;

interface LayoutProps {
	children: ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = (props) =>
{

	return (
		<AntdLayout>
			<Header />
			<Content
				className='site-layout'
				style={{padding: '0 50px'}}
			>
				{props.children}
			</Content>
			<Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
		</AntdLayout>
	);
};
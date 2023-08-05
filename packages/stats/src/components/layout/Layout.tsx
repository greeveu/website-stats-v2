import React, {ReactNode} from 'react';
import {Layout as AntdLayout} from 'antd';
import style from "./layout.module.sass"
import {Header} from 'components/layout/header/Header';

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
				className={style.content}
			>
				{props.children}
			</Content>
			<Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
		</AntdLayout>
	);
};
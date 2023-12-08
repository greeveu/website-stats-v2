import React, { ReactNode } from 'react';
import style from './layout.module.sass';
import { Header } from 'components/layout/header/Header';
import { Footer } from 'components/layout/footer/Footer';

interface LayoutProps {
	children: ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
	return (
		<div className={style.root}>
			<div className={style.content}>
				<Header />
				{props.children}
			</div>
			<Footer />
		</div>
	);
};

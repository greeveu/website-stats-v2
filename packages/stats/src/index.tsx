import ReactDOM from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import './index.sass';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from 'components/context/ContextProvider';
import { configure } from 'mobx';
import { RootPage } from 'pages/RootPage';
import { Layout } from 'components/layout/Layout';
import { SearchOverlay } from 'components/search/overlay/SearchOverlay';
import { clearCachedImages } from 'lib/clearCachedImages';

configure({
	enforceActions: 'never',
});

clearCachedImages();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<BrowserRouter>
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
				token: {
					colorPrimary: '#00b96b',
				},
			}}
		>
			<ContextProvider>
				<Layout>
					<SearchOverlay />
					<RootPage />
				</Layout>
			</ContextProvider>
		</ConfigProvider>
	</BrowserRouter>,
);

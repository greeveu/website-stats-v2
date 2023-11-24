import React, {useContext} from 'react';
import style from './footer.module.sass';
import {Typography} from 'antd';
import {ContentSpacing} from 'components/layout/contentSpacing/ContentSpacing';
import {NetworkStatus} from 'lib/NetworkRequest';
import {globalContext} from 'components/context/ContextProvider';
import {observer} from 'mobx-react-lite';
import {PreloadImages} from 'components/layout/preloadImages/PreloadImages';

const effect: Record<NetworkStatus, string> = {
	[NetworkStatus.Success]: style.success,
	[NetworkStatus.Pending]: style.pending,
	[NetworkStatus.NotFound]: style.notFound,
	[NetworkStatus.Error]: style.error,
};

export const Footer: React.FunctionComponent = observer(() =>
{
	const context = useContext(globalContext);

	return (
		<div>
			<div className={effect[context.effect.network]} />
			<div>
				<ContentSpacing>
					<div className={style.content}>
						<div>
							<Typography.Title level={4}>
								Contact
							</Typography.Title>
							<Typography.Text>
								admin@greev.eu
							</Typography.Text>
							<Typography.Text>
								ts.greev.eu
							</Typography.Text>
							<Typography.Text>
								<a href={'https://greev.eu/discord'}>
									Discord
								</a>
							</Typography.Text>
						</div>
						<div className={style.secondColumn}>
							<Typography.Title level={4}>
								Legal
							</Typography.Title>
							<Typography.Text>
								<a href={'https://pluoi.com/imprint/'}>
									Imprint
								</a>
							</Typography.Text>
							<Typography.Text>
								<a href={'https://pluoi.com/privacy/'}>
									Privacy
								</a>
							</Typography.Text>
						</div>
					</div>

				</ContentSpacing>
			</div>
			<PreloadImages />
		</div>
	);
});

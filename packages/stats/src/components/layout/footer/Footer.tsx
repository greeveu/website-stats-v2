import React, {useContext} from 'react';
import style from './footer.module.sass';
import {Typography} from 'antd';
import {ContentSpacing} from 'components/layout/contentSpacing/ContentSpacing';
import {NetworkStatus} from 'lib/NetworkRequest';
import {globalContext} from 'components/context/ContextProvider';
import {observer} from 'mobx-react-lite';

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
						<Typography.Text>
							WIP
						</Typography.Text>
						<Typography.Text>
							Impressum
						</Typography.Text>
						<Typography.Text>
							Datenschutz
						</Typography.Text>
					</div>
				</ContentSpacing>
			</div>
		</div>
	);
});

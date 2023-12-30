import React from 'react';
import { Input, Typography } from 'antd';
import style from './misc.module.sass';
import { StatsResponse } from '../playerPage.types';
import { observer } from 'mobx-react-lite';

interface MiscProps {
	result: StatsResponse;
}

export const Misc: React.FunctionComponent<MiscProps> = observer((props) => {
	const loginstreak = (() => {
		if (!props.result.loginstreak) {
			return null;
		}

		return (
			<>
				<div>
					<Typography.Title level={5}>
						Current Loginstreak
					</Typography.Title>
					<Input
						disabled={true}
						value={props.result.loginstreak?.currentLoginStreak}
					/>
				</div>
				<div>
					<Typography.Title level={5}>
						Highest Loginstreak
					</Typography.Title>
					<Input
						disabled={true}
						value={props.result.loginstreak?.maxLoginStreak}
					/>
				</div>
			</>
		);
	})();

	return (
		<div className={style.root}>
			<div>
				<Typography.Title level={5}>
					Player performance
				</Typography.Title>
				<Input disabled={true} value={props.result.playerperformance} />
			</div>
			<div>
				<Typography.Title level={5}>Tokens</Typography.Title>
				<Input disabled={true} value={props.result.tokens} />
			</div>
			{loginstreak}
			<div>
				<Typography.Title level={5}>First seen</Typography.Title>
				<Input
					disabled={true}
					value={new Date(
						props.result.firstOnline * 1000,
					).toLocaleDateString()}
				/>
			</div>
			<div>
				<Typography.Title level={5}>Last seen</Typography.Title>
				<Input
					disabled={true}
					value={new Date(
						props.result.lastOnline * 1000,
					).toLocaleDateString()}
				/>
			</div>
		</div>
	);
});

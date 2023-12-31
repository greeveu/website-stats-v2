import React, { useContext } from 'react';
import { minigameContext } from 'components/minigame/context/MinigameContextProvider';
import { Divider, Form, Select } from 'antd';
import { observer } from 'mobx-react-lite';
import { Option, OptionType } from 'resources/minigames.schema';
import style from './options.module.sass';

export const Options: React.FunctionComponent = observer(() => {
	const context = useContext(minigameContext);

	if (!context.config.api.options) {
		return null;
	}

	const content = Object.entries(context.config.api.options).map(
		([key, why]) => {
			const value = why as Option;

			if (value.type === OptionType.Select) {
				const options = Object.entries(value.options).map(
					([key, value]) => {
						return {
							value: key,
							label: value,
						};
					},
				);

				const onChange = (value: string) => {
					context.options[key] = value;
					context.offset = 0;
				};

				return (
					<Form.Item label={value.display} key={key}>
						<Select
							value={context.options[key]}
							options={options}
							onChange={onChange}
						/>
					</Form.Item>
				);
			}

			return null;
		},
	);

	return (
		<React.Fragment>
			<div className={style.desktop}>
				<Form
					labelCol={{ span: 10 }}
					wrapperCol={{ span: 16 }}
					className={style.form}
				>
					{content}
				</Form>
			</div>
			<div className={style.mobile}>
				<Divider />
				<Form layout={'vertical'}>{content}</Form>
			</div>
		</React.Fragment>
	);
});

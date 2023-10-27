import React, {useContext} from 'react';
import {minigameContext} from 'components/minigame/context/MinigameContextProvider';
import {Form, Select} from 'antd';
import {observer} from 'mobx-react-lite';
import {Option, OptionType} from 'minigames';
import style from './options.module.sass';

export const Options: React.FunctionComponent = observer(() =>
{
	const context = useContext(minigameContext);

	if (!context.config.api.options)
	{
		return null;
	}

	return (
		<div className={style.root}>
			<Form
				labelCol={{span: 10}}
				wrapperCol={{span: 16}}
				className={style.form}
			>
				{Object.entries(context.config.api.options).map(([key, why]) =>
				{
					const value = why as Option;

					if (value.type === OptionType.Select)
					{

						const options = Object.entries(value.options).map(([key, value]) =>
						{
							return {
								value: key,
								label: value,
							};
						});

						const onChange = (value: string) =>
						{
							context.options[key] = value;
							context.offset = 0;
						};

						return (
							<Form.Item
								label={value.display}
								key={key}
							>
								<Select
									value={context.options[key]}
									options={options}
									onChange={onChange}
								/>
							</Form.Item>
						);
					}

					return null;
				})}
			</Form>
		</div>
	);
});

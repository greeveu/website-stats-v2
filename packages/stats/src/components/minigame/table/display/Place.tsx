import React from 'react';
import {Typography} from 'antd';

interface PlaceProps
{
	place: number;
}

export const Place: React.FunctionComponent<PlaceProps> = (props) =>
{
	return (
		<Typography.Text>
			{props.place}
		</Typography.Text>
	);
};

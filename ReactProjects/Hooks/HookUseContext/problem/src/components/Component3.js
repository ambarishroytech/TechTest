import React from 'react';
import Component4 from './Component4';

const Component3 = (props) => {
	return (
		<>
			<Component4
				items={props.items}
				onAddItem={props.onAddItem}
			/>
		</>
	);
};

export default Component3;

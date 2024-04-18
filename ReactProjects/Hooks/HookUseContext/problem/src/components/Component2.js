import React from 'react';
import Component3 from './Component3';

const Component2 = (props) => {
	return (
		<>
			<Component3
				items={props.items}
				onAddItem={props.onAddItem}
			/>
		</>
	);
};

export default Component2;

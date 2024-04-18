import React from 'react';
import Component2 from './Component2';

const Component1 = (props) => {
	return (
		<>
			<Component2
				items={props.items}
				onAddItem={props.onAddItem}
			/>
		</>
	);
};

export default Component1;

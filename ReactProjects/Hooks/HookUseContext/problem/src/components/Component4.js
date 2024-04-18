import React from 'react';

const Component4 = (props) => {
	return (
		<>
			<button onClick={props.onAddItem}>Add new Item</button>
			<br />
			<ul>
				{props.items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	);
};

export default Component4;

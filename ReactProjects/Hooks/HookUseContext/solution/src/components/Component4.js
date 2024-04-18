import React from 'react';
import { TodosContext } from '../contexts/TodosContext';

const Component4 = () => {
	const { items, addItems } = React.useContext(TodosContext);

	return (
		<>
			<button onClick={addItems}>Add new Item</button>
			<br />
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	);
};

// ---------- Another new way --------------------------------

// const Component4 = () => {
// 	return (
// 		<TodosContext.Consumer>
// 			{({ items, addItems }) => {
// 				return (
// 					<>
// 						<button onClick={addItems}>Add new Item</button>
// 						<br />
// 						<ul>
// 							{items.map((item, index) => (
// 								<li key={index}>{item}</li>
// 							))}
// 						</ul>
// 					</>
// 				);
// 			}}
// 		</TodosContext.Consumer>
// 	);
// };

// ---------- Another new way --------------------------------

export default Component4;

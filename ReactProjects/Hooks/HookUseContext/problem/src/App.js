import React from 'react';
import Component1 from './components/Component1';

function App() {
	const [item, setItem] = React.useState('');
	const [todos, setTodos] = React.useState([]);

	const handleAddItem = () => {
		setTodos((prev) => [...prev, item.toUpperCase()]);
		setItem('');
		itemInput.current.focus();
	};

	const itemInput = React.useRef(null);

	return (
		<>
			<input
				ref={itemInput}
				type='text'
				value={item}
				onChange={(e) => setItem(e.target.value)}
			/>
			<Component1
				items={todos}
				onAddItem={handleAddItem}
			/>
		</>
	);
}

export default App;

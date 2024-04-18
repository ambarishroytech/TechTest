import React from 'react';
import Component1 from './components/Component1';
import { TodosContext } from './contexts/TodosContext';

function App() {
	const [item, setItem] = React.useState('');
	const [todos, setTodos] = React.useState([]);

	const handleAddItem = () => {
		setTodos((prev) => [...prev, item.toUpperCase()]);
		setItem('');
		itemInput.current.focus();
	};

	const itemInput = React.useRef(null);

	React.useEffect(() => {
		itemInput.current.focus();
	}, []);

	return (
		<TodosContext.Provider value={{ items: todos, addItems: handleAddItem }}>
			<input
				ref={itemInput}
				type='text'
				value={item}
				placeholder='Enter todo item'
				onChange={(e) => setItem(e.target.value)}
			/>
			<Component1 />
		</TodosContext.Provider>
	);
}

export default App;

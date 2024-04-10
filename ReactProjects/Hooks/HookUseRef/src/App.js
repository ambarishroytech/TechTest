import React, { useState, useEffect, useRef } from 'react';
import SpecialFormInput from './components/SpecialFormInput/SpecialFormInput';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [displayText, setDisplayText] = useState('');
	const [saveResult, setSaveResult] = useState('');

	// Use case 1: Find Render Count
	// const [count, setCount] = useState(0);
	// useEffect(() => {
	// 	setCount((prev) => prev + 1);
	// }, [inputValue]);
	//------------------------------------------------------------
	// const count = useRef(0);
	// useEffect(() => {
	// 	count.current = count.current + 1;
	// });
	//------------------------------------------------------------

	// Use case 2: Accessing DOM elements
	// const inputRef = useRef();

	// const focusInput = () => {
	// 	setDisplayText(inputValue);
	// 	setInputValue('');

	// 	inputRef.current.focus();
	// };
	//------------------------------------------------------------

	// Use case 3: Storing previous state
	// const previousInputValue = useRef('');
	// useEffect(() => {
	// 	previousInputValue.current = inputValue;
	// }, [inputValue]);
	//------------------------------------------------------------

	// Use case 4: Get input values without using state
	// const inputNameRef = useRef();
	// const inputAgeRef = useRef();
	// const inputAddressRef = useRef();

	// const saveHandle = (e) => {
	// 	e.preventDefault();

	// 	const name = inputNameRef.current.value;
	// 	const age = inputAgeRef.current.value;
	// 	const address = inputAddressRef.current.value;

	// 	alert(
	// 		`Calling Save API with -> Name: ${name}, Age: ${age}, Address: ${address}`,
	// 	);

	// 	const saveResult = `Data saved for -> Name: ${name}, Age: ${age}, Address: ${address}`;
	// 	setSaveResult(saveResult);
	// };
	//------------------------------------------------------------

	// Use case 5: forwardRef
	// const specialInputNameRef = useRef();
	// const specialInputAgeRef = useRef();
	// const specialInputAddressRef = useRef();

	// const saveSpecialFormHandle = (e) => {
	// 	e.preventDefault();

	// 	const name1 = specialInputNameRef.current.value;
	// 	const age1 = specialInputAgeRef.current.value;
	// 	const address1 = specialInputAddressRef.current.value;

	// 	alert(`Validating -> Name: ${name1}, Age: ${age1}, Address: ${address1}`);
	// };
	//------------------------------------------------------------

	return (
		<>
			<input
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>

			{/* Use case 1: Find Render Count */}
			{/* <input
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				ref={inputRef}
			/> */}
			{/* <h1>Render Count: {count.current}</h1> */}
			{/* <h1>Render Count: {count}</h1> */}
			{/* ------------------------------------------------------------ */}

			{/* Use case 2: Accessing DOM elements */}
			{/* <button onClick={focusInput}>Focus Input</button>
			<h1>{displayText}</h1> */}
			{/* ------------------------------------------------------------ */}

			{/* Use case 3: Storing previous state */}
			{/* <h2>Current Value: {inputValue}</h2>
			<h2>Previous Value: {previousInputValue.current}</h2> */}
			{/* ------------------------------------------------------------ */}

			{/* Use case 4: Get input values without using state */}
			{/* <form onSubmit={saveHandle}>
				<input
					type='text'
					placeholder='Name'
					ref={inputNameRef}
				/>
				<input
					type='text'
					placeholder='Age'
					ref={inputAgeRef}
				/>
				<input
					type='text'
					placeholder='Address'
					ref={inputAddressRef}
				/>
				<button type='submit'>Save</button>

				<h3>{`Calling Save API with -> Name: ${inputNameRef.current.value}, Age: ${inputAgeRef.current.value}, Address: ${inputAddressRef.current.value}`}</h3>
				<h2>{saveResult}</h2>
			</form> */}
			{/* ------------------------------------------------------------ */}

			{/* Use case 5: forwardRef */}
			{/* <form onSubmit={saveSpecialFormHandle}>
				<SpecialFormInput
					type='text'
					placeholder='Name'
					label='Name'
					ref={specialInputNameRef}
				/>
				<SpecialFormInput
					type='number'
					placeholder='Age'
					label='Age'
					ref={specialInputAgeRef}
				/>
				<SpecialFormInput
					type='text'
					placeholder='Address'
					label='Address'
					ref={specialInputAddressRef}
				/>
				<button type='submit'>Save</button>
			</form> */}
			{/* ------------------------------------------------------------ */}
		</>
	);
}

export default App;

import React, { useReducer, useRef } from 'react';
import './App.css';
import { INITIAL_POST_STATE, postReducer } from './reducers/postReducer';
import { INITIAL_FORM_STATE, formReducer } from './reducers/formReducer';
import { POST_ACTION_TYPES } from './reducers/postActionTypes';
import { FORM_ACTION_TYPES } from './reducers/formActionTypes';

function App() {
	const [postState, postDispatch] = useReducer(postReducer, INITIAL_POST_STATE);
	const [formState, formDispatch] = useReducer(formReducer, INITIAL_FORM_STATE);
	const tagsRef = useRef();

	const handleChange = (e) => {
		formDispatch({
			type: FORM_ACTION_TYPES.CHANGE_INPUT,
			payload: { name: e.target.name, value: e.target.value },
		  });
	};

	const handleTags = () => {
		const tags = tagsRef.current.value.split(',');
		tags.forEach((tag) => {
			formDispatch({ type: FORM_ACTION_TYPES.ADD_TAG, payload: tag });
		});
	};

	const handleRemoveTag = (tag) => {
		formDispatch({ type: FORM_ACTION_TYPES.REMOVE_TAG, payload: tag });
	};

	const handleIncrease = (e) => {
		formDispatch({ type: FORM_ACTION_TYPES.INCREASE_QTY });
	};

	const handleDecrease = (e) => {
		formDispatch({ type: FORM_ACTION_TYPES.DECREASE_QTY });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (postState.posting) return;

		postDispatch({ type: POST_ACTION_TYPES.POST_START });

		// https://jsonplaceholder.typicode.com/posts
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(formState),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				postDispatch({ type: POST_ACTION_TYPES.POST_SUCCESS, payload: data });
				formDispatch({ type: FORM_ACTION_TYPES.RESET_FORM, ref: tagsRef });
			})
			.catch((err) => {
				postDispatch({ type: POST_ACTION_TYPES.POST_ERROR });
			});
	};

	let postResultDisplay;

	if (postState.error) {
		postResultDisplay = (
			<span className='error'>{'Something went wrong in submit!'}</span>
		);
	} else if (postState.postResult && postState.postResult.id) {
		postResultDisplay = (
			<div>
				<h1>Post Result</h1>
				<p>{JSON.stringify(postState.postResult)}</p>
			</div>
		);
	}

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input
					type='text'
					name='title'
					onChange={handleChange}
					placeholder='Title'
					value={formState.title}
				/>
				<input
					type='text'
					name='desc'
					onChange={handleChange}
					placeholder='Desc'
					value={formState.desc}
				/>
				<input
					type='number'
					name='price'
					onChange={handleChange}
					placeholder='Price'
					value={formState.price}
				/>
				<p>Category:</p>
				<select
					name='category'
					id='category'
					onChange={handleChange}
					value={formState.category}>
					<option value=''>Choose one</option>
					<option value='sneakers'>Sneakers</option>
					<option value='tshirts'>T-shirts</option>
					<option value='jeans'>Jeans</option>
				</select>
				<p>Tags:</p>
				<textarea
					ref={tagsRef}
					placeholder='Seperate tags with commas...'></textarea>
				<button
					type='button'
					onClick={handleTags}>
					Add Tags
				</button>
				<div className='tags'>
					{formState.tags?.map((tag) => (
						<small
							key={tag}
							onClick={() => handleRemoveTag(tag)}>
							{tag}
						</small>
					))}
				</div>
				<div className='quantity'>
					<button
						type='button'
						onClick={handleDecrease}>
						-
					</button>
					<span>Quantity ({formState.quantity})</span>
					<button
						type='button'
						onClick={handleIncrease}>
						+
					</button>
				</div>
				<br />
				<button type='submit'>{postState.posting ? 'Wait...' : 'Submit'}</button>
				{postResultDisplay}
			</form>
		</div>
	);
}

export default App;

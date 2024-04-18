import React, { useRef, useState } from 'react';
import './App.css';

function App() {
	const emptyProduct = {
		title: '',
		desc: '',
		price: 0,
		category: '',
		tags: [],
		images: {
			sm: '',
			md: '',
			lg: '',
		},
		quantity: 0,
	};

	const [product, setProduct] = useState(emptyProduct);

	const [saving, setSaving] = useState(false);
	const [error, setError] = useState(false);
	const [postResult, setPostResult] = useState(null);

	const handleChange = (e) => {
		setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const tagRef = useRef();

	const handleTags = () => {
		const tags = tagRef.current.value.split(',');
		tags.forEach((tag) => {
			setProduct((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
		});
	};

	const handleRemoveTag = (tag) => {
		setProduct((prev) => ({
			...prev,
			tags: prev.tags.filter((t) => t !== tag),
		}));
	};

	const handleIncrease = () => {
		setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
	};

	const handleDecrease = () => {
		setProduct((prev) => ({
			...prev,
			quantity: prev.quantity - 1,
		}));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (saving) return;

		setSaving(true);
		setError(false);

		// https://jsonplaceholder.typicode.com/posts
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(product),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => {
				setSaving(false);
				setPostResult(json);
				setProduct(emptyProduct);
			})
			.catch((err) => {
				setError(true);
				setSaving(false);
				setPostResult(null);
				setProduct(emptyProduct);
			});
	};

	let postResultDisplay;
	if (error) {
		postResultDisplay = (
			<span className='error'>{'Something went wrong in submit!'}</span>
		);
	} else if (postResult && postResult.id) {
		postResultDisplay = (
			<div>
				<h1>Post Result</h1>
				<p>{JSON.stringify(postResult)}</p>
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
				/>
				<input
					type='text'
					name='desc'
					onChange={handleChange}
					placeholder='Desc'
				/>
				<input
					type='number'
					name='price'
					onChange={handleChange}
					placeholder='Price'
				/>
				<p>Category:</p>
				<select
					name='category'
					id='category'
					onChange={handleChange}>
					<option value='sneakers'>Sneakers</option>
					<option value='tshirts'>T-shirts</option>
					<option value='jeans'>Jeans</option>
				</select>
				<p>Tags:</p>
				<textarea
					ref={tagRef}
					placeholder='Seperate tags with commas...'></textarea>
				<button
					type='button'
					onClick={handleTags}>
					Add Tags
				</button>
				<div className='tags'>
					{product.tags.map((tag) => (
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
					<span>Quantity ({product.quantity})</span>
					<button
						type='button'
						onClick={handleIncrease}>
						+
					</button>
				</div>
				<br />
				<button type='submit'>{saving ? 'Wait...' : 'Submit'}</button>
				{postResultDisplay}
			</form>
		</div>
	);
}

export default App;

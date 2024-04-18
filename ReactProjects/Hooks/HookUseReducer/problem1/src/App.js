import React, { useState } from 'react';
import './App.css';

function App() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [post, setPost] = useState({});

	// https://jsonplaceholder.typicode.com/posts/1
	const handleFetch = () => {
		setLoading(true);
		setError(false);
		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setPost(data);
			})
			.catch((err) => {
				setLoading(false);
				setPost({});
				setError(true);
			});
	};

	return (
		<div>
			<button onClick={handleFetch}>
				{loading ? 'Wait...' : 'Fetch the post'}
			</button>
			<p>{post?.title}</p>
			<span>{error && 'Something went wrong!'}</span>
		</div>
	);
}

export default App;

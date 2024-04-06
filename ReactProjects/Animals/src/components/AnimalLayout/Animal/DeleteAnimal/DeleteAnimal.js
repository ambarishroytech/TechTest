import React from 'react';
import DeleteImage from '../../../../images/delete.png';

const DeleteAnimal = (props) => {
	const onDeleteClicked = (event) => {
		props.onDeleteAnimal(props.animal);
	};

	return (
		<figure className='image is-48x48'>
			<a
				href='#'
				onClick={onDeleteClicked}>
				<img
					src={DeleteImage}
					alt='Delete'
				/>
			</a>
		</figure>
	);
};

export default DeleteAnimal;

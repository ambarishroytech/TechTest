// Use case 5: forwardRef

import React, { forwardRef } from 'react';

const SpecialFormInput = (props, ref) => {
	return (
		<div>
			<label>{props.label}:</label>
			<input
				type={props.type}
				placeholder={props.placeholder}
				ref={ref}
			/>
		</div>
	);
};

export default forwardRef(SpecialFormInput);

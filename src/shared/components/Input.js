import React, { useState, useEffect } from 'react';

import './Input.css';

//Input with a common style we'll use
//runs a function on input
//Expects from props: id, label, onInput, type
// 		(OPTIONALLY): placeholder
const Input = props => {
	//takes care of its own value
	const [input, setInput] = useState('');

	const { id, onInput } = props;

	//if changing value, run parent with same values
	useEffect(() => {
		onInput(id, input)
	}, [id, input, onInput]);

	const changeHandler = event => {
		setInput(event.target.value);
	}

	return (
		<div
			className={'form-control'}
		>
			{props.label && <label htmlFor={props.id}>
				{props.label}
			</label>
			}
			<input
				id={id}
				type={props.type}
				placeholder={props.placeholder}
				onChange={changeHandler}
				value={input}
			/>
		</div>
	);
};

export default Input;

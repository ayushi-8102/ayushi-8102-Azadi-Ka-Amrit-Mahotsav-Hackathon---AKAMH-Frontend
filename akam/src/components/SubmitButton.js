import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {MdArrowForward} from 'react-icons/lib/md';

const SubmitButton = (props) => {

	let socialNets = null;

	if (props.type === 'signIn') {
		
		
	} else {
		socialNets = (
			<div className='socialNets'>
			</div>
		)
	}
	return (
		<div className={'submitButton'}>
			{socialNets}
			<button className={props.type==='signIn' ? 'submitSignIn' : 'submitSignUp'}><MdArrowForward/></button>
		</div>
	);
} 

SubmitButton.PropTypes = {
	type: PropTypes.String
};

export default SubmitButton;
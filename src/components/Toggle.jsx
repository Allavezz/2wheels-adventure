import React from 'react';


const Toggle = ({ handleChange, isChecked }) => {
	return (
		<div className='toggle'>
            <input type='checkbox' id='check' className='toggle__button' onChange={handleChange} checked={isChecked} />
            <label htmlFor="check"></label>
		</div>
	);
};

export default Toggle;

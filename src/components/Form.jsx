import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './ValidationSchema';

const Form = () => {
	const [formData, setFormData] = useState(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(validationSchema) });

	const submitForm = data => {
		setFormData(data);
		reset();
	};

	return (
		<form className='form' onSubmit={handleSubmit(submitForm)}>
			<div className='form__person-container'>
				<div className='form__wrapper'>
					<label className='form__label text' htmlFor='name'>
						Name
					</label>
					<input className='form__input' type='text' name='name' placeholder='Enter your Name' {...register('name')} />
					<p className='form__error'>{errors.name?.message || ' '}</p>
				</div>
				<div className='form__wrapper'>
					<label className='form__label text' htmlFor='email'>
						Email
					</label>
					<input className='form__input' type='text' name='email' placeholder='Enter a valid email address' {...register('email')} />
					<p className='form__error'>{errors.email?.message || ' '}</p>
				</div>
			</div>
			<div className='form__wrapper'>
				<label className='form__label text' htmlFor='message'>
					Message
				</label>
				<textarea className='form__input' name='message' placeholder='Enter your message' {...register('message')} cols='4' rows='10'></textarea>
				<p className='form__error'>{errors.message?.message || ' '}</p>
			</div>

			<input className='form__submit btn btn--med' type='submit' id='submit' value='Send' />
			{/* 
			    //Uncomment to see the form submit data
			<div>
				{formData && (
					<div className='submittedData'>
						<h2>Dados Enviados:</h2>
						<pre>{JSON.stringify(formData, null, 2)}</pre>
					</div>
				)}
			</div> */}
		</form>
	);
};

export default Form;

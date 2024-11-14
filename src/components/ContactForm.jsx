import { Link } from 'react-router-dom';
import Form from './Form';

const ContactForm = () => {
	return (
		<>
			<div className='contact-form'>
				<div className='contact-form__wrapper'>
					<div className='contact-form__text-container'>
						<p className='contact-form__text text'>
							Lorem ipsum dolor sit, amet sectetur adipi elit. Odio, piciatis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis beatae accusamus, itaque officia laudantium tempore!
							Sunt expedita molestiae sed exercitationem.
						</p>
						<p className='contact-form__text text'>
							Lorem ipsum dolor sit, amet sectetur adipi elit. Odio, piciatis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis beatae accusamus, itaque officia laudantium tempore!
							Sunt expedita molestiae sed exercitationem.
						</p>
					</div>
					<h4 className='contact-form__h4title article-title article-title--small'>Phone:</h4>
					<Link className='contact-form__link text ' to='tel:+35191xxxxxxx'>
						+351 912963775
					</Link>
					<h4 className='contact-form__h4title article-title article-title--small'>Email:</h4>
					<Link className='contact-form__link text ' to='mailto:@gmail.com'>
						2wheelsadv@gmail.com
					</Link>
				</div>

				<div className='contact-form__wrapper'>
					<Form />
				</div>
			</div>
		</>
	);
};

export default ContactForm;

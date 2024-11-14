import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Contacts = ({ backgroundImage }) => {
	const { ref, inView } = useInView({ triggerOnce: true });
	return (
		<section id='#contacts' ref={ref} className='contacts section-padding' style={{ backgroundImage: `var(--gradient-bottom--grey), url(${backgroundImage}) ` }}>
			<div className='contacts__container'>
				<h2 className={`contacts__title title title-mb tran-top1 ${inView ? 'tran-topd' : ''}`}>Get in touch</h2>
				<div className={`tran-top2 ${inView ? 'tran-topd' : ''}`}>
					<ContactForm />
				</div>
				{/* Hide the button on the /contact page */}
				<div className={`tran-top3 ${inView ? 'tran-topd' : ''}`}>
					<Link className={`contacts__btn btn btn--med ${location.pathname === '/contact' ? 'contacts__btn--hidden' : ''}`} to='/contact'>
						Contact page
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Contacts;

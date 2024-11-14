import React from 'react';
import Faq from '../../components/Faq';
import { useInView } from 'react-intersection-observer';

const ContactIntro = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section className='contact-intro section-padding'>
			<div ref={ref}>
				<h2 className={`contact-intro__title title heading tran-top1 ${inView ? 'tran-topd' : ''}`}>How to participate</h2>
				<div className='contact-intro__container'>
					<div className={`contact-intro__steps tran-top2 ${inView ? 'tran-topd' : ''}`}>
						<h3 className='contact-intro__h3 title title--med'>Follow this steps to participate</h3>
						<ul className='contact-intro__list'>
							<li className='contact-intro__item'>
								<div className='contact-intro__step-number'>
									<span>1</span>
								</div>
								<p className='contact-intro__step-text text text--big'>Browse available events</p>
							</li>
							<li className='contact-intro__item'>
								<div className='contact-intro__step-number'>
									<span>2</span>
								</div>
								<p className='contact-intro__step-text text text--big'>Learn about our packages</p>
							</li>
							<li className='contact-intro__item'>
								<div className='contact-intro__step-number'>
									<span>3</span>
								</div>
								<p className='contact-intro__step-text text text--big'>Contact us to receive detailed information</p>
							</li>
							<li className='contact-intro__item'>
								<div className='contact-intro__step-number'>
									<span>4</span>
								</div>
								<p className='contact-intro__step-text text text--big'>Reserve</p>
							</li>
						</ul>
					</div>
					<div className={`contact-intro__faq tran-top3 ${inView ? 'tran-topd' : ''}`}>
						<Faq />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactIntro;

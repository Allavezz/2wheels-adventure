import { useEffect, useState } from 'react';
import { testimonials } from '../../data/data.json';
import { useInView } from 'react-intersection-observer';

const HomeTestimonials = () => {
	const { ref, inView } = useInView({ triggerOnce: true });
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const nextSlide = (currentSlide + 1) % testimonials.length;
		const intervalId = setInterval(() => {
			setCurrentSlide(nextSlide);
		}, 5000);

		return () => clearInterval(intervalId);
	}, [currentSlide]);

	const goToSlide = index => {
		setCurrentSlide(index);
	};

	const goToPrevSlide = () => {
		const prevSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
		setCurrentSlide(prevSlide);
	};

	const goToNextSlide = () => {
		const nextSlide = (currentSlide + 1) % testimonials.length;
		setCurrentSlide(nextSlide);
	};

	return (
		<section ref={ref} className='home-testimonials section-padding'>
			<div className={`home-testimonials__container tran-top2 ${inView ? 'tran-topd' : ' '}`}>
				<h2 className='home-testimonials__title title '>Testimonials</h2>
				{testimonials.map((testimonial, index) => (
					<div key={testimonial.id} className={`home-testimonials__slide ${index === currentSlide ? 'home-testimonials__active' : ''}`}>
						<div className='home-testimonials__text-container'>
							<p className='home-testimonials__text text'>{testimonial.text}</p>
						</div>
						<div className='home-testimonials__person-container'>
							<div className='home-testimonials__person'>
								<div className='home-testimonials__picture-wrapper'>
									<img src={testimonial.image} alt={testimonial.name} />
								</div>
								<span className='home-testimonials__name'>{testimonial.name} </span>
							</div>
							<span className='home-testimonials__bike'>{testimonial.bike}</span>
						</div>
					</div>
				))}

				<div className='home-testimonials__arrows'>
					<button onClick={goToPrevSlide}>&#10094;</button>
					<button onClick={goToNextSlide}>&#10095;</button>
				</div>

				<div className='home-testimonials__dots'>
					{testimonials.map((testimonial, index) => (
						<span key={testimonial.id} className={`home-testimonials__dot ${index === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeTestimonials;

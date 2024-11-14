import { useInView } from 'react-intersection-observer';

const Hero = ({ title, backgroundImage, text }) => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section id='event-hero' ref={ref} className='hero' style={{ backgroundImage: `var(--gradient-hero--grey), url(${backgroundImage})` }}>
			<div className='hero__content'>
				<h1 className={`hero__title hero-title tran-top1 ${inView ? 'tran-topd' : ''}`}>{title}</h1>
				<p className={`hero__text text text--big tran-top2 ${inView ? 'tran-topd' : ''}`}>{text}</p>
			</div>
		</section>
	);
};

export default Hero;

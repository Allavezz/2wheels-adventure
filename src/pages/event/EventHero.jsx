import { useInView } from 'react-intersection-observer';


const EventHero = ({ hero, id }) => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section ref={ref} className='event-hero hero-image' style={{ backgroundImage: `var(--gradient-hero--grey), url(${hero})` }}>
			<div className='event-hero__heading'>
				<h2 className={`event-hero__title hero-title hero-title--small tran-top1 ${inView ? 'tran-topd' : ''}`}>{id}</h2>
			</div>
		</section>
	);
};

export default EventHero;

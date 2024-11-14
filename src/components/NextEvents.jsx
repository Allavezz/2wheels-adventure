import EventCard from './EventCard';
import { events } from '../data/data.json';
import { useInView } from 'react-intersection-observer';


const NextEvents = ({ backgroundImage, backgroundColor, cardGradient }) => {
	const { ref, inView } = useInView({ triggerOnce: true });
	return (
		<section id='next-events' ref={ref} className='next-events section-padding section-padding--small-bottom' style={{ backgroundImage: backgroundImage, backgroundColor: backgroundColor }}>
			<div className='next-events__heading heading'>
				<h2 className={`next-events__title title tran-top1 ${inView ? 'tran-topd' : ''}`}>Discover our next events</h2>
				<p className={`next-events__text text tran-top2 ${inView ? 'tran-topd' : ''}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates cumque odio!</p>
			</div>
			<div className='next-events__container'>
				{events.map((event, index) => (
					<div key={index} className={`next-events__card-wrapper tran-top3 ${inView ? 'tran-topd' : ''}`}>
						<EventCard key={event.id} id={event.id} title={event.title} cardtext={event.cardtext} image={event.image} link={`/events/${event.id}`} cardGradient={cardGradient} />
					</div>
				))}
			</div>
		</section>
	);
};

export default NextEvents;

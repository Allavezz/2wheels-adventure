import { events } from '../../data/data.json';
import EventMain from './EventMain';
import EventHero from './EventHero';
import EventIntro from './EventIntro';

import { useParams } from 'react-router-dom';

const Event = () => {
	const { eventId } = useParams();
	const event = events.find(event => event.id === eventId);

	return (
		<main className='event'>
			<EventHero hero={event.hero} id={event.id} />
			<EventIntro
				title={event.title}
				capital={event.capital}
				image={event.image}
				image2={event.image2}
				image3={event.image3}
				image4={event.image4}
				image5={event.image5}
				image6={event.image6}
				text={event.cardtext}
				name={event.imagename}
				name2={event.imagename2}
				name3={event.imagename3}
				name4={event.imagename4}
				name5={event.imagename5}
				name6={event.imagename6}
				
			/>
			<EventMain date={event.date} iframe={event.iframe} id={event.id} capital={event.capital} latitude={event.latitude} longitude={event.longitude} reference={event.reference} />
		</main>
	);
};

export default Event;


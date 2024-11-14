import Hero from '../../components/Hero';
import Contacts from '../../components/Contacts';
import EventsIntro from './EventsIntro';
/* import Perks from '../../components/Perks'; */
import Services from '../../components/Services';
import NextEvents from '../../components/NextEvents';
import eventsHero from '/public/assets/events/eventsHero.jpg';
import eventsContact from '/public/assets/events/eventsContact.jpg';
import { Outlet, useOutletContext } from 'react-router-dom';

const Events = () => {
	const isImage = useOutletContext();

	return (
		<main>
			<Hero backgroundImage={eventsHero} title='Exploration' text='Travel the unknown world with us' />

			<EventsIntro />
			{/* <Perks /> */}
			<Services />
			<NextEvents backgroundImage={'var(--gradient-section--reverse)'} cardGradient={'event-card__image-wrapper--gradient-grey'} />
			<Outlet context={isImage} />

			<Contacts backgroundImage={eventsContact} />
		</main>
	);
};

export default Events;

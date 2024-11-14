import HomeHero from './HomeHero';
import HomeIntro from './HomeIntro';
import NextEvents from '../../components/NextEvents';
import HomeTestimonials from './HomeTestimonials';
import HomeBlog from './HomeBlog';
import Contacts from '../../components/Contacts';
import Services from '../../components/Services';

import homeContact from '/public/assets/home/homeContact.jpg';

const Home = () => {
	return (
		<main>
			<HomeHero />
			<HomeIntro />
			<NextEvents backgroundColor={'var(--black2)'} cardGradient={'event-card__image-wrapper--gradient-black'} />
			<Services />
			<HomeTestimonials />
			<HomeBlog />
			<Contacts backgroundImage={homeContact} />
		</main>
	);
};

export default Home;

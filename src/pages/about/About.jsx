import Hero from '../../components/Hero';
import AboutIntro from './AboutIntro';
import AboutTeam from './AboutTeam';
import Contacts from '../../components/Contacts';
import aboutHero from '/assets/about/aboutHero.jpg';
import aboutContact from '/assets/about/aboutContact.jpg';

import { Outlet } from 'react-router-dom';

const About = () => {
	return (
		<main>
			<Hero title={'About'} backgroundImage={aboutHero} />
			<AboutIntro />
			<AboutTeam />
			<Outlet />
			<Contacts backgroundImage={aboutContact} />
		</main>
	);
};

export default About;

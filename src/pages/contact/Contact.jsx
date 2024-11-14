import Hero from '../../components/Hero';
import Contacts from '../../components/Contacts';
import ContactIntro from './ContactIntro';
import CTA from '../../components/CTA';
import contactHero from '/assets/contact/contactHero.jpg';
import contactContact from '/assets/contact/contactContact.jpg';

const Contact = () => {
	return (
		<main>
			<Hero title='Contact' backgroundImage={contactHero} />
			<ContactIntro />
			<CTA />
			<Contacts backgroundImage={contactContact} />
		</main>
	);
};

export default Contact;

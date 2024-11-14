import Hero from '../../components/Hero';
import BlogPosts from './BlogPosts';
import Contacts from '../../components/Contacts';
import BlogIntro from './BlogIntro';
import blogHero from '/2wheels-adventure/public/assets/blog/blogHero.jpg';
import blogContact from '/2wheels-adventure/public/assets/blog/blogContact.jpg';

const Blog = () => {
	return (
		<main>
			<Hero title='Experience' text='Collect your favourite moments along the way' backgroundImage={blogHero} />
			<BlogIntro />
			<BlogPosts />
			<Contacts backgroundImage={blogContact} />
		</main>
	);
};

export default Blog;

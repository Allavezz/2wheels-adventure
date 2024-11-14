/* import { blogPost } from '../../data/data.json'; */
import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import BlogCard from '../../components/BlogCard';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import { blogPost } from '../../data/data.json';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Mousewheel } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

const HomeBlog = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const { ref, inView } = useInView({ triggerOnce: true });

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch('/api/blogPost');
				const data = await res.json();
				setPosts(data);
			} catch (error) {
				console.log('Error fetching data', error);
			} finally {
				setLoading(false);
			}
		};
		fetchPosts();
	}, []);

	let reversedPosts = [...blogPost].reverse();

	if (loading) {
		return <Spinner loading={loading} />;
	}

	return (
		<section ref={ref} className='home-blog section-padding'>
			<div className='home-blog__heading heading'>
				<h2 className={`home-blog__title title title-mb tran-top1 ${inView ? 'tran-topd' : ''}`}>Latest on our blog</h2>
				<p className={`home-blog__text text tran-top2 ${inView ? 'tran-topd' : ''}`}>Lorem ipsum dolor sit amet consectetur.</p>
			</div>

			<div className={`home-blog__swiper tran-top3 ${inView ? 'tran-topd' : ''}`}>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Mousewheel]}
					slidesPerView={1}
					autoplay={{
						delay: 3000,
						pauseOnMouseEnter: true,
					}}
					spaceBetween={16}
					freeMode={{ enabled: true, sticky: true }}
					mousewheel={true}
					grabCursor={true}
					breakpoints={{
						620: {
							slidesPerView: 2,
							spaceBetween: 16,
						},
						760: {
							slidesPerView: 2,
							spaceBetween: 32,
						},
						1060: {
							slidesPerView: 3,
							spaceBetween: 48,
						},
						1300: {
							slidesPerView: 4,
							spaceBetween: 48,
						},
					}}
				>
					{reversedPosts.map(post => (
						<SwiperSlide className='home-blog__slide' key={post.id}>
							<BlogCard key={blogPost.id} id={post.id} image={post.image} topic={post.topic} title={post.title} text={post.text} picture={post.picture} name={post.name} date={post.date} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className={`home-blog__btn tran-top4 ${inView ? 'tran-topd' : ''}`}>
				<Link className='btn btn--med' to='/2wheels-adventure/blog'>
					Go to the blog <FaArrowRight className='arrow-right' />
				</Link>
			</div>
		</section>
	);
};

export default HomeBlog;

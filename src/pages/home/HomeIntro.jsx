import homeIntro from '/2wheels-adventure/public/assets/home/homeIntro.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import Stats from '../../components/Stats';
import { useInView } from 'react-intersection-observer';

const HomeIntro = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section id='home-intro' className='home-intro section-padding'>
			<div ref={ref} className='home-intro__container'>
				<div className={`home-intro__image tran-top4 ${inView ? 'tran-topd' : ''}`}>
					<img src={homeIntro} alt='motorcycles in the desert' />
				</div>
				<div className='home-intro__content'>
					<h2 className={`home-intro__title title tran-top1 ${inView ? 'tran-topd' : ''} `}>About us</h2>
					<p className={`home-intro__text section-text tran-top2 ${inView ? 'tran-topd' : ''}`}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem atque voluptates vero minus iusto perferendis. Ullam suscipit placeat reiciendis harum eius officia tempore
						consequatur magni? Magnam libero ex asperiores magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, cupiditate voluptatibus sapiente nemo quisquam modi. Lorem ipsum dolor
						sit amet consectetur adipisicing elit.
					</p>
					<p className={`home-intro__text section-text tran-top3 ${inView ? 'tran-topd' : ''}`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi at eaque, eius molestiae fuga ad itaque repudiandae delectus facilis exercitationem labore saepe, quam praesentium cum optio
						laudantium! Sit, amet asperiores? Maxime temporibus at, eius tempore ad cum eaque voluptatum autem eveniet debitis.
					</p>
					<div className={`home-intro__stats tran-top4 ${inView ? 'tran-topd' : ''}`}>
						<Stats />
					</div>
					<div className={`tran-top5 ${inView ? 'tran-topd' : ''}`}>
						<Link className='home-intro__btn btn btn--med' to='/about'>
							Read More <FaArrowRight className='arrow-right' />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeIntro;

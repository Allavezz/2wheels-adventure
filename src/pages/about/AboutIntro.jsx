import { useInView } from 'react-intersection-observer';
import Stats from '../../components/Stats';
import aboutIntro from '/public/assets/about/aboutIntro.jpg';

const AboutIntro = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section className='about-intro section-padding'>
			<div ref={ref} className='about-intro__container'>
				<div className='about-intro__heading heading'>
					<h2 className={`about-intro__title title title-mb tran-top1 ${inView ? 'tran-topd' : ''}`}> About 2Wheels Adventure</h2>
				</div>
				<div className='about-intro__flex-container'>
					<div className='about-intro__text-wrapper'>
						<p className={`about-intro__text text tran-top2 ${inView ? 'tran-topd' : ''}`}>
							Beatae vel aliquam aliquid dolorum excepturi eius consequuntur quidem vero aspernatur quaerat reiciendis possimus quod cupiditate optio alias voluptates minima eveniet libero harum
							repellat reprehenderit saepe fugiat suscipit consequatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cum sed temporibus! Velit voluptatem eligendi repudiandae libero
							quo eos, facilis atque. Nisi laborum, blanditiis illo at placeat maxime a veritatis, vel, dolorem obcaecati exercitationem consectetur eaque? Saepe architecto quam corporis voluptates.
							Reprehenderit, eos.
						</p>
						<p className={`about-intro__text text tran-top3 ${inView ? 'tran-topd' : ''}`}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, accusamus. Beatae vel aliquam aliquid dolorum excepturi eius consequuntur quidem vero aspernatur quaerat reiciendis
							possimus quod cupiditate optio alias voluptates minima eveniet libero harum repellat reprehenderit saepe fugiat suscipit consequatur. Nobis, voluptate ipsa. Omnis.
						</p>
						<p className={`about-intro__text text tran-top4 ${inView ? 'tran-topd' : ''}`}>
							Lorem ipsum dolor sit consectetur adipisicing elit. Beatae vel aliquam aliquid dolorum excepturi eius consequuntur excepturi eius consequuntur quidem vero quidem vero aspernatur quaerat
							reiciendis, at fuga necessitatibus laborum esse expedita totam harum amet consectetur adipisicing elit. Beatae vel aliquam aliquid dolorum excepturi eius consequuntur quaerat reiciendis,
							at fuga necessitatibus laborum esse expedita totam harum amet quidem vero aspernatur quaerat reiciendis, at fuga necessitatibus laborum esse expedita totam harum corrupti.
						</p>
					</div>
					<div className={`about-intro__image tran-top4 ${inView ? 'tran-topd' : ''}`}>
						<img src={aboutIntro} alt='' />
					</div>
				</div>
				<div className='about-intro__bottom'>
					<p className={`about-intro__bottom-text text tran-top5 ${inView ? 'tran-topd' : ''}`}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione delectus voluptatem quo repellendus voluptate, molestiae commodi odit officiis pariatur similique libero, deleniti enim
						fuga maxime ea magnam expedita exercitationem minus. Qui cum sed temporibus! Velit voluptatem eligendi repudiandae libero quo eos, facilis atque. Excepturi nostrum et id dolorum amet
						veniam debitis reprehenderit ipsa magnam quisquam omnis perspiciatis, assumenda rerum quaerat molestias fuga dolores quam deserunt? Dolorum quam repellendus consequuntur totam impedit
						cupiditate dolores praesentium distinctio magni non recusandae quasi quos modi porro illum fugiat, omnis in. Quia ad voluptatibus accusamus facilis totam est, excepturi neque, fuga, illum
						debitis facere commodi.
					</p>
					<div className={`about-intro__stats tran-top6 ${inView ? 'tran-topd' : ''}`}>
						<Stats />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutIntro;

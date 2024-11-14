import cta02 from '../../public/assets/cta/cta02.jpg';
import cta01 from '../../public/assets/cta/cta01.jpg';
import cta03 from '../../public/assets/cta/cta03.jpg';
import cta04 from '../../public/assets/cta/cta04.jpg';
import cta05 from '../../public/assets/cta/cta05.jpg';
import cta06 from '../../public/assets/cta/cta06.jpg';
import { useInView } from 'react-intersection-observer';
const CTA = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section className='cta section-padding section-padding--small-top'>
			<div ref={ref}>
				<h2 className={`cta__title title heading tran-top1 ${inView ? 'tran-topd' : ''}`}>Why participate?</h2>
				<div className='cta__grid'>
					<div className={`cta__grid-item tran-top2 ${inView ? 'tran-topd' : ''}`}>
						<img src={cta01} alt='road' />
						<h4 className='cta__h4'>Beautiful roads</h4>
					</div>
					<div className={`cta__grid-item tran-top2 ${inView ? 'tran-topd' : ''}`}>
						<img src={cta02} alt='camping' />
						<h4 className='cta__h4'>Wild camping</h4>
					</div>
					<div className={`cta__grid-item tran-top3 ${inView ? 'tran-topd' : ''}`}>
						<img src={cta03} alt='nature' />
						<h4 className='cta__h4'>Explore nature</h4>
					</div>
					<div className={`cta__grid-item tran-top4 ${inView ? 'tran-topd' : ''}`}>
						<img src={cta04} alt='bounding' />
						<h4 className='cta__h4'>Meet like-minded people</h4>
					</div>
					<div className={`cta__grid-item tran-top5 ${inView ? 'tran-topd' : ''}`}>
						<img src={cta05} alt='rinding motorcycles' />
						<h4 className='cta__h4'>Discover the countryside</h4>
					</div>
					<div className={`cta__grid-item tran-top5 ${inView ? 'tran-topd' : ''}`}>
						<img src={cta06} alt='monument' />
						<h4 className='cta__h4'>Visit unique monuments</h4>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;

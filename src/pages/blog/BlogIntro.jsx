
import { useInView } from 'react-intersection-observer';
const BlogIntro = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section  className='blog-intro section-padding section-padding--small-bottom'>
			<div ref={ref}>
				<div className='blog-intro__heading heading'>
					<h2 className={`blog-intro__title title tran-top1 ${inView ? 'tran-topd' : ''}`}>Our blog</h2>
					<p className={`blog-intro__text text tran-top2 ${inView ? 'tran-topd' : ''}`}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos eligendi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam facere soluta delectus cum possimus
						dignissimos, natus placeat perspiciatis deserunt accusantium. Ipsa natus, aliquam quisquam rem neque in, soluta ea eligendi nihil sit eveniet dolorum fugit fugiat ullam assumenda nam
						ipsum!
					</p>
					<p className={`blog-intro__text text tran-top3 ${inView ? 'tran-topd' : ''}`}>
						Dolores dignissimos eligendi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam facere soluta delectus cum possimus dignissimos, natus placeat perspiciatis deserunt
						accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio nisi pariatur! Quod, officia quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
			</div>
		</section>
	);
};

export default BlogIntro;

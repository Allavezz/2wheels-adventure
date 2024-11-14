import { useInView } from 'react-intersection-observer';

const EventsIntro = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section className='events-intro section-padding'>
			<div ref={ref} className='events-intro__heading'>
				<h2 className={`events-intro__title title tran-top1 ${inView ? 'tran-topd' : ''}`}>Why our events</h2>
				<div className='events-intro__text-container'>
					<p className={`events-intro__text text tran-top2 ${inView ? 'tran-topd' : ''}`}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus, aliquam quisquam rem neque in, soluta ea eligendi nihil sit eveniet dolorum fugit fugiat ullam assumenda nam ipsum.
						Eveniet maiores! Impedit veniam eos reiciendis in aliquam, dolores quibusdam, nihil molestiae doloribus. Dignissimos aliquam obcaecati nesciunt quod modi ipsa.
					</p>
					<p className={`events-intro__text text tran-top3 ${inView ? 'tran-topd' : ''}`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio nisi pariatur! Quod, officia quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam
						obcaecati nesciunt quod. Lorem ipsum dolor sit, possimus illo deserunt reprehenderit consequuntur dolor. Culpa veniam deleniti, illo repellendus nostrum at qui eum adipisci quam voluptas!
					</p>
				</div>
			</div>
		</section>
	);
};

export default EventsIntro;

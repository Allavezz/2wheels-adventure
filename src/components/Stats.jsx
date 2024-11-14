import { stats } from '../data/data.json';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
	const { ref, inView } = useInView({ triggerOnce: true });
	return (
		<div ref={ref} className={`stats tran-top2 ${inView ? 'tran-topd' : ''}`}>
			<div className='stats__slide'>
				{stats.map(stat => (
					<div className='stats__data' key={stat.id}>
						<h4 className='stats__number'>{stat.number}</h4>
						<span className='stats__text text'>{stat.text}</span>
                    </div>
                    
                    
                ))}
                </div>
                <div className='stats__slide'>
				{stats.map(stat => (
					<div className='stats__data' key={stat.id}>
						<h4 className='stats__number'>{stat.number}</h4>
						<span className='stats__text text'>{stat.text}</span>
                    </div>
                    
                    
				))}
			</div>
		</div>
	);
};

export default Stats;

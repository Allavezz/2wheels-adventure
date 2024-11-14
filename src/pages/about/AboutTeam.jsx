import { teamMembers } from '../../data/data.json';
import TeamCard from '../../components/TeamCard';
import { useInView } from 'react-intersection-observer';

const AboutTeam = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section ref={ref} className='about-team section-padding'>
			<div className='about-team__heading heading'>
				<h2 className={`about-team__title title tran-top1 ${inView ? 'tran-topd' : ''}`}>Meet our Team</h2>
				<p className={`about-team__text text tran-top2 ${inView ? 'tran-topd' : ''}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, aspernatur?</p>
			</div>

			<div className={`about-team__grid tran-top3 ${inView ? 'tran-topd' : ''}`}>
				{teamMembers.map(team => (
					<TeamCard key={team.id} id={team.id} name={team.name} role={team.role} photo={team.photo} links={team.links} />
				))}
			</div>
		</section>
	);
};

export default AboutTeam;

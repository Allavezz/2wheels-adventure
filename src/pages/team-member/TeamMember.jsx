import { teamMembers } from '../../data/data.json';
import { useParams, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';

const TeamMember = () => {
	const { teamMemberId } = useParams();
	const member = teamMembers.find(member => member.id === teamMemberId);
	const { ref, inView } = useInView({ triggerOnce: true });
	const navigate = useNavigate();

	return (
		<main className='team-member'>
			<section ref={ref} className='team-member__hero-section hero-image' style={{ backgroundImage: `var(--gradient-hero--grey), url(${member.image})` }}>
				<div className='team-member__heading heading'>
					<h2 className={`team-member__title hero-title hero-title--small tran-top1 ${inView ? 'tran-topd' : ''}`}>{member.name}</h2>
					<span className={`text text--big tran-top2 ${inView ? 'tran-topd' : ''}`}>{member.role}</span>
				</div>
			</section>
			<section className='team-member__content-section section-padding' style={{ backgroundImage: 'var(--gradient-post)' }}>
				<div className='team-member__content'>
					<div className={`team-member__photo-container tran-top3 ${inView ? 'tran-topd' : ''}`}>
						<img src={member.photo} alt={member.name} />
					</div>
					<div className={`team-member__text tran-top4 ${inView ? 'tran-topd' : ''}`}>
						<p className=' text'>{member.text1}</p>
						<p className=' text'>{member.text2}</p>
						<p className=' text'>{member.text3}</p>
						<div className={`team-member__socials tran-top5 ${inView ? 'tran-topd' : ''}`}>
							<a href={member.links.linkedin} target='/blank'>
								<FaLinkedin />
							</a>
							<a href={member.links.instagram} target='/blank'>
								<FaInstagram />
							</a>
							<a href={member.links.twitter} target='/blank'>
								<FaXTwitter />
							</a>
						</div>
					</div>
				</div>
				<div className={`tran-top6 ${inView ? 'tran-topd' : ''}`}>
					<button onClick={() => navigate(-1)} className='team-member__btn btn btn--med'>
						Back
					</button>
				</div>
			</section>
		</main>
	);
};

export default TeamMember;

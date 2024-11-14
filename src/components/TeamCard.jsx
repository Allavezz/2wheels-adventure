import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const TeamCard = ({ id, name, role, photo, links }) => {
	const { linkedin, instagram, twitter } = links;

	return (
		<div key={id}>
			<Link className='team-card' to={`/2wheels-adventure/about/${id}`}>
				<div className='team-card__image-wrapper'>
					<img src={photo} alt={name} className='team-card__image' />
				</div>
				<div className='team-card__content'>
					<h4 className='team-card__name article-title '>{name}</h4>
					<p className='team-card__role text '>{role}</p>
				</div>
				<div className='team-card__socials'>
					<a href={linkedin} target='/blank'>
						<FaLinkedin />
					</a>
					<a href={instagram} target='/blank'>
						<FaInstagram />
					</a>
					<a href={twitter} target='/blank'>
						<FaXTwitter />
					</a>
				</div>
			</Link>
		</div>
	);
};

export default TeamCard;

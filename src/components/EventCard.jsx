import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa6';

const EventCard = ({ id, cardtext, image, link, cardGradient }) => {
	const location = useLocation();
	const isIndex = location.pathname === '/';
	const showArrow = isIndex ? <FaArrowRight className='arrow-right' /> : <FaArrowDown className='arrow-right' />;
	

	return (
		<div key={id} className='event-card tran-top'>
			<div className={`event-card__image-wrapper ${cardGradient}`}>
				<img src={image} alt='' />
				<div className='event-card__content'>
					<h4 className='article-title'>{id}</h4>
					<p className='event-card__text text'>{cardtext}</p>
				</div>
			</div>

			<Link className='event-card__btn btn btn--med btn--inverse' to={link}>
				Discover More {showArrow}
			</Link>
		</div>
	);
};

export default EventCard;

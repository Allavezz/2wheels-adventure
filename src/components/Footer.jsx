import bannerWhite from '../../public/assets/bannerWhite.png';
import bannerBlack from '../../public/assets/bannerBlack.png';
import { navLinks } from '../data/data.json';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = ({ isImage }) => {
	return (
		<footer className='footer'>
			<div className='footer__navigation'>
				<div className='footer__logo'>
					<Link to='/2wheels-adventure/'>
						<img className='footer__banner' src={isImage ? bannerBlack : bannerWhite} alt='logo' />
					</Link>
				</div>
				<div className='footer__nav'>
					<ul className='footer__links'>
						{navLinks.map(nav => (
							<li className='footer__link' key={nav.id}>
								<NavLink to={nav.link} className={({ isActive }) => (isActive ? 'active' : '')}>
									{nav.title}
								</NavLink>
							</li>
						))}
					</ul>
					<ul className='footer__socials'>
						<li className='footer__social'>
							<a href='https://www.facebook.com' target='_blank'>
								<FaFacebook />
							</a>
						</li>
						<li className='footer__social'>
							<a href='https://www.instagram.com' target='_blank' title='Instagram'>
								<FaInstagram />
							</a>
						</li>
						<li className='footer__social'>
							<a to='https://www.twitter.com' target='_blank'>
								<FaXTwitter />
							</a>
						</li>
						<li className='footer__social'>
							<a href='https://www.youtube.com' target='_blank'>
								<FaYoutube />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='footer__copyright'>
				<p>Powered by Allavez &copy; 2024</p>
			</div>
		</footer>
	);
};

export default Footer;

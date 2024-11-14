import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<>
			<section className='error404'>
				<div className='error404__container section-padding'>
					<h1 className='error404__h1'>404</h1>
					<h3 className='error404__h3'>Opps! page not found</h3>
					<p className='error404__text'>Sorry, the page you're looking for does not exist, please click below to return.</p>
					<Link className='btn btn--med' to='/'>
						Home
					</Link>
				</div>
			</section>
		</>
	);
};

export default Error404;

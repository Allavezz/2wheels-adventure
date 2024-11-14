import React, { useState, useEffect } from 'react';
import { FaLocationDot, FaArrowRight } from 'react-icons/fa6';
import { useLocation, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const EventMain = ({ date, iframe, capital, id, latitude, longitude, reference }) => {
	const { ref, inView } = useInView({ triggerOnce: true });
	const [days, setDays] = useState('00');
	const [hours, setHours] = useState('00');
	const [minutes, setMinutes] = useState('00');
	const [seconds, setSeconds] = useState('00');
	const location = useLocation();

	useEffect(() => {
		const countDown = () => {
			const referenceDate = new Date(reference).getTime();
			const currentDate = new Date().getTime();
			const countDownDate = referenceDate - currentDate;

			const days = Math.floor(countDownDate / (1000 * 60 * 60 * 24));
			const hours = Math.floor((countDownDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((countDownDate % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((countDownDate % (1000 * 60)) / 1000);

			setDays(days <= 9 ? `0${days}` : days);
			setHours(hours <= 9 ? `0${hours}` : hours);
			setMinutes(minutes <= 9 ? `0${minutes}` : minutes);
			setSeconds(seconds <= 9 ? `0${seconds}` : seconds);
		};

		countDown(); // initial call
		const interval = setInterval(countDown, 1000); // call every second

		return () => clearInterval(interval); // cleanup
	}, [location.pathname, reference]);

	return (
		<section className='event-main section-padding'>
			<div ref={ref}>
				<div className='event-main__container'>
					<div className='event-main__description-container'>
						<h3 className={`event-main__description-title title  tran-top1 ${inView ? 'tran-topd' : ''}`}>Description</h3>
						<div className='event-main__description-text-wrapper'>
							<p className={`event-main__description-text tran-top2 ${inView ? 'tran-topd' : ''}`}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nam obcaecati earum doloribus excepturi eius veritatis dignissimos facere ea dolor quo nemo reiciendis odit nostrum,
								laudantium soluta sit iure eligendi corporis inventore laboriosam ipsa. Magnam facilis sint doloremque doloribus? Pariatur aspernatur eligendi placeat tenetur autem, earum maxime
								facere explicabo soluta nostrum repellendus iusto error dicta necessitatibus dolor, hic in, magnam enim reprehenderit magni! Expedita pariatur consectetur facilis minus non debitis
								architecto asperiores nostrum recusandae reprehenderit, est culpa similique itaque in. Incidunt excepturi officiis dolore quasi amet ex nesciunt magnam harum fugiat! Perspiciatis, ipsa
								veniam aliquid harum aliquam magni possimus sit eligendi vitae assumenda nihil vel culpa inventore! Facilis, laborum accusantium consectetur necessitatibus voluptatem quis, neque sint
								minus autem recusandae illo? Nostrum dolor tempore debitis repellendus eos, recusandae quis autem nobis facilis accusamus nam voluptas iste laboriosam reiciendis beatae soluta
								voluptates sint! Pariatur quae adipisci cum vel! Cumque reprehenderit quas saepe ad a eos distinctio recusandae consequuntur exercitationem voluptatibus! Unde tempore suscipit, hic,
								obcaecati ab dolor asperiores qui, repudiandae consectetur quisquam magnam vitae.
							</p>
							<p className={`event-main__description-text tran-top3 ${inView ? 'tran-topd' : ''}`}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias natus soluta similique, veniam quam animi enim et quisquam ut delectus repudiandae doloremque laudantium porro
								labore temporibus magnam magni illum fugiat autem amet voluptatem dolor expedita libero. Natus, molestiae sunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, quaerat
								doloribus excepturi nesciunt, sunt odio veniam tenetur error odit vel sit et quidem facere dolorem incidunt id deleniti ipsum itaque. Amet, facere a. Aut, veritatis? Quam quisquam
								eaque rem dolorem error dolorum dignissimos nemo enim voluptas tempore, possimus rerum recusandae esse. Error unde reiciendis itaque.
							</p>
							<div className='event-main__footer'>
								<div className={`event-main__countdown-wrapper tran-top5 ${inView ? 'tran-topd' : ''}`}>
									<h3 className='event-main__countdown-title title title--med'>Entries will end in:</h3>

									<div className='event-main__countdown'>
										<div className='event-main__countdown-info'>
											<p className='event-main__countdown-number'>{days}</p>
											<span className='event-main__countdown-text'>Days</span>
										</div>
										<div className='event-main__countdown-info'>
											<p className='event-main__countdown-number'>{hours}</p>
											<span className='event-main__countdown-text'>Hours</span>
										</div>
										<div className='event-main__countdown-info'>
											<p className='event-main__countdown-number'>{minutes}</p>
											<span className='event-main__countdown-text'>Minutes</span>
										</div>
										<div className='event-main__countdown-info'>
											<p className='event-main__countdown-number'>{seconds}</p>
											<span className='event-main__countdown-text'>Seconds</span>
										</div>
									</div>
								</div>
								<div className={`event-main__cta-container tran-top6 ${inView ? 'tran-topd' : ''}`}>
									<h3 className='event-main__cta-title title title--med'>Get yours now!</h3>
									<Link to='/contact' className='btn btn--med'>
										Contact <FaArrowRight className='arrow-right' />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='event-main__details-container'>
						<div className={`event-main__details-wrapper tran-top4 ${inView ? 'tran-topd' : ''}`}>
							<h3 className='event-main__details-title title title--med'>Details</h3>
							<h4 className='event-main__details-subtitle title title--small'>Packs & Services</h4>
							<ul className='event-main__packs'>
								<li>
									<span>&#10004;</span>
									<p>Motorcycles</p>
								</li>
								<li>
									<span>&#10004;</span>
									<p>Camping gear</p>
								</li>
								<li>
									<span>&#10004;</span>
									<p>Luggage</p>
								</li>
								<li>
									<span>&#10004;</span>
									<p>Rider gear</p>
								</li>
								<li>
									<span>&#10004;</span>
									<p>Service & repair</p>
								</li>
								<li>
									<span>&#10004;</span>
									<p>Full insurance</p>
								</li>
							</ul>

							<h4 className='event-main__details-subtitle title title--small'>Date and Time</h4>
							<div className='event-main__date'>
								<span>&#x1F5D3;</span>
								<p>{date}</p>
							</div>

							<h4 className='event-main__details-subtitle title title--small'>Location</h4>
							<div className='event-main__location'>
								<div className='event-main__location-name'>
									<FaLocationDot className='event-main__location-dot' />
									<p>
										{capital}, {id}
									</p>
								</div>
								<div className='event-main__coordinates'>
									<p>Latitude: {latitude}</p>
									<p>Longitude: {longitude}</p>
								</div>
								<iframe
									src={iframe}
									/* style={border:0};' */
									allowFullScreen=''
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
								></iframe>
							</div>
						</div>
					</div>
				</div>
				<div className={`event-main__close tran-top7 ${inView ? 'tran-topd' : ''}`}>
					<Link to='/events#next-events' className='btn btn--med'>
						Close
					</Link>
				</div>
			</div>
		</section>
	);
};

export default EventMain;

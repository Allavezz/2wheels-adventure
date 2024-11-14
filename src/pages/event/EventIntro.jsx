import logoWhite from '../../../public/assets/logoWhite.png';
import logoBlack from '../../../public/assets/logoBlack.png';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useOutletContext } from 'react-router-dom';

const EventIntro = ({ title, image, image2, image3, image4, image5, image6, name, name2, name3, name4, name5, name6, text, capital }) => {
	const isImage = useOutletContext();
	const [clickedImage, setClickedImage] = useState(image);
	const [clickedName, setClickedName] = useState(name);
	const [weatherData, setWeatherData] = useState(null);
	const { ref, inView } = useInView({ triggerOnce: true });

	useEffect(() => {
		fetchWeatherData(capital);
	}, [capital]);

	const fetchWeatherData = async city => {
		// BACKUP KEY!!!! 'd326d13f3e34eb76961dac8f1c016d15'

		const apiKey = 'e17a7c2fdd39df8ee97d2b0a25548dcf';
		const lang = 'eng';
		const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}`;

		try {
			const response = await fetch(apiUrl);
			const data = await response.json();
			setWeatherData(data);
		} catch (error) {
			console.error('Error fetching weather data:', error);
		}
	};

	const handleImageClick = (newImage, newName) => {
		setClickedImage(newImage);
		setClickedName(newName);
	};

	return (
		<section className='event-intro section-padding section-padding--small-bottom'>
			<div ref={ref} className='event-intro__container'>
				<div className='event-intro__content'>
					<div className='event-intro__description'>
						<div className={`event-intro__header tran-top1 ${inView ? 'tran-topd' : ''}`}>
							<img className='event-intro__logo' src={isImage ? logoBlack : logoWhite} alt='logo' />
							<div className='event-intro__weather-wrapper'>
								<h3 className=' event-intro__weather-capital title title--small'>{capital}</h3>
								<div className='event-intro__weather'>
									{weatherData && <img className='event-intro__weather-image' src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt='weather icon' />}
									<div className='event-intro__weather-data'>
										<div className='event-intro__temperature'>
											{weatherData && <p className='event-intro__temperature-number'>{Math.round(weatherData.main.temp - 273.15)}</p>}
											<span className='event-intro__celsius'>ºC</span>
										</div>
										<div className='event-intro__conditions'>
											{weatherData && (
												<>
													<p>
														Rain: <span>{weatherData.clouds.all}%</span>
													</p>
													<p>
														Humidity: <span>{weatherData.main.humidity}%</span>
													</p>
													<p>
														Wind: <span>{weatherData.wind.speed} km/h</span>
													</p>
												</>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='event-intro__heading'>
							<h2 className={`event-intro__title title tran-top2 ${inView ? 'tran-topd' : ''}`}>{title}</h2>
							<p className={`text event-intro__text tran-top3 ${inView ? 'tran-topd' : ''}`}>{text}</p>
						</div>
					</div>
					<div className={`event-intro__gallery tran-top4 ${inView ? 'tran-topd' : ''}`}>
						<div className='event-intro__gallery-image' onClick={() => handleImageClick(image, name)}>
							<img src={image} alt='s' />
							<h3 className='event-intro__gallery-name title title--med'>{name}</h3>
						</div>
						<div className='event-intro__gallery-image' onClick={() => handleImageClick(image2, name2)}>
							<img src={image2} alt='s' />
							<h3 className='event-intro__gallery-name title title--med'>{name2}</h3>
						</div>
						<div className='event-intro__gallery-image' onClick={() => handleImageClick(image3, name3)}>
							<img src={image3} alt='s' />
							<h3 className='event-intro__gallery-name title title--med'>{name3}</h3>
						</div>
						<div className='event-intro__gallery-image' onClick={() => handleImageClick(image4, name4)}>
							<img src={image4} alt='s' />
							<h3 className='event-intro__gallery-name title title--med'>{name4}</h3>
						</div>
						<div className='event-intro__gallery-image' onClick={() => handleImageClick(image5, name5)}>
							<img src={image5} alt='s' />
							<h3 className='event-intro__gallery-name title title--med'>{name5}</h3>
						</div>
						<div className='event-intro__gallery-image' onClick={() => handleImageClick(image6, name6)}>
							<img src={image6} alt='s' />
							<h3 className='event-intro__gallery-name title title--med'>{name6}</h3>
						</div>
					</div>
				</div>

				<div className={` tran-top5 ${inView ? 'tran-topd' : ''}`}>
					<div className='event-intro__image-wrapper'>
						<img src={clickedImage} alt='' />
						<h3 className='event-intro__image-name title title--med'>{clickedName}</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EventIntro;

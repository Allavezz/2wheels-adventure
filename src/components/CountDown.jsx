import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ reference }) => {
	const [days, setDays] = useState('00');
	const [hours, setHours] = useState('00');
	const [minutes, setMinutes] = useState('00');
	const [seconds, setSeconds] = useState('00');

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
	}, []);

	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='content'>
					<p>Website in progress</p>
					<h1>
						We're <span>Launching</span> Soon
					</h1>

					<div className='launch-time'>
						<div>
							<p className='display-days'>{days}</p>
							<span>Days</span>
						</div>
						<div>
							<p className='display-hours'>{hours}</p>
							<span>Hours</span>
						</div>
						<div>
							<p className='display-minutes'>{minutes}</p>
							<span>Minutes</span>
						</div>
						<div>
							<p className='display-seconds'>{seconds}</p>
							<span>Seconds</span>
						</div>
					</div>

					<a href='#'>
						Learn More <img src='imgs/triangle.png' alt='triangle' style={{ width: '15px', verticalAlign: 'middle', marginLeft: '8px', marginBottom: '2px' }} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default CountdownTimer;

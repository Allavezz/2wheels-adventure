import service01 from '/public/assets/services/service01.jpg';
import service02 from '/public/assets/services/service02.jpg';
import service03 from '/public/assets/services/service03.jpg';
import service04 from '/public/assets/services/service04.jpg';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaArrowDown } from 'react-icons/fa6';

const Services = () => {
	const [selectedService, setSelectedService] = useState(null);
	const { ref, inView } = useInView({ triggerOnce: true });
	const handleButtonClick = serviceName => {
		if (selectedService === serviceName) {
			setSelectedService(null);
		} else {
			setSelectedService(serviceName);
		}
	};

	return (
		<section ref={ref} className='services section-padding'>
			<div className='services__container'>
				<div className='services__heading heading'>
					<h2 className={`services__title title tran-top1 ${inView ? 'tran-topd' : ''}`}>Our Packs</h2>
					<p className={`services__text tran-top2 ${inView ? 'tran-topd' : ''}`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo vel deleniti corrupti quia? Nihil quo quis deleniti aliquam, perferendis itaque? Quis, minus placeat? Architecto sunt
						dicta consequatur ab officiis.
					</p>
				</div>
				<div className={`services__card-container tran-top3 ${inView ? 'tran-topd' : ''}`}>
					<div className='services__card'>
						<div className='services__card-image-wrapper'>
							<img className='services__card-image' src={service01} alt='motorcycle' />
							<div className='services__card-content'>
								<h3 className='title title--small services__card-title'>Motorcycles</h3>
								<p className='text   services__card-text'>Motorcycle renting</p>
								<div className='services__card-button'>
									<button className='btn btn--med' onClick={() => handleButtonClick('motorcycle')}>
										{selectedService === 'motorcycle' ? (
											'Close'
										) : (
											<>
												More <FaArrowDown className='arrow-right' />
											</>
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='services__card'>
						<div className='services__card-image-wrapper'>
							<img className='services__card-image' src={service02} alt='Camping gear' />
							<div className='services__card-content'>
								<h3 className='title title--small services__card-title'>Camping gear</h3>
								<p className='text   services__card-text'>Camping gear renting</p>
								<div className='services__card-button'>
									<button className='btn btn--med' onClick={() => handleButtonClick('campingGear')}>
										{selectedService === 'campingGear' ? (
											'Close'
										) : (
											<>
												More <FaArrowDown className='arrow-right' />
											</>
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='services__card'>
						<div className='services__card-image-wrapper'>
							<img className='services__card-image' src={service03} alt='motorcycle luggage' />
							<div className='services__card-content'>
								<h3 className='title title--small services__card-title'>Luggage</h3>
								<p className='text   services__card-text'>Motorcycle luggage renting</p>
								<div className='services__card-button'>
									<button className=' btn btn--med ' onClick={() => handleButtonClick('motorcycleLuggage')}>
										{selectedService === 'motorcycleLuggage' ? (
											'Close'
										) : (
											<>
												More <FaArrowDown className='arrow-right' />
											</>
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='services__card'>
						<div className='services__card-image-wrapper'>
							<img className='services__card-image' src={service04} alt='Rider gear' />
							<div className='services__card-content'>
								<h3 className='title title--small services__card-title'>Rider gear</h3>
								<p className='text   services__card-text'>Rider gear renting</p>
								<div className='services__card-button'>
									<button className='btn btn--med' onClick={() => handleButtonClick('riderGear')}>
										{selectedService === 'riderGear' ? (
											'Close'
										) : (
											<>
												More <FaArrowDown className='arrow-right' />
											</>
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{selectedService && (
					<div className='services__more'>
						{selectedService === 'motorcycle' && (
							<div id='service-motorcycles' className='services__more-container'>
								<div className='services__more-heading'>
									<img className='services__more-image' src={service01} alt='motorcycle' />
									<h3 className='title title--med services__more-title'>Motorcycles</h3>
									<p className='text   services__more-subtitle'>Motorcycle renting</p>
									<div className='services__more-button'>
										<button className='services__more-button btn btn--med ' onClick={() => handleButtonClick('motorcycle')}>
											{selectedService === 'motorcycle' ? 'Close' : 'More'}
										</button>
									</div>
								</div>

								<div className='services__more-content'>
									<div className='services__more-content-heading'>
										<h3 className='services__more-pack-title title title--med'>What comes in this pack:</h3>
										<p>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dolore veritatis assumenda nam quisquam cumque eum fuga, modi suscipit sint mollitia recusandae. Fugiat quisquam
											eaque molestiae laudantium sunt ducimus exercitationem.
										</p>
									</div>
									<div className='services__more-packs'>
										<div className='services__more-pack'>
											<h4 className='title title--small'>Motorcycles:</h4>
											<ul>
												<li>
													<span>&#10004;</span>
													<p>KTM Adventure 990 R</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Huqvarna Norden 901 </p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Yamaha Tenere 700 Rally</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>AJP PR7 650 Adventure</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Honda CRF 300L Rally</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Ducati Desert X</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>KTM 890 Adventure R</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>KTM EXC 500</p>
												</li>
											</ul>
										</div>
										<div className='services__more-sec-packs-wrapper'>
											<div className='services__more-pack'>
												<h4 className='title title title--small'>Adventure tyres:</h4>
												<ul>
													<li>
														<span>&#10004;</span>
														<p>Motoz Tractionator GPS</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Mitas E07+</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Motoz Tractionator RallZ</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Dunlop TrailMax Raid</p>
													</li>
												</ul>
											</div>

											<div className='services__more-pack'>
												<h4 className='title title--small'>Full luggage kit:</h4>
												<ul>
													<li>
														<span>&#10004;</span>
														<p>Mosko reckless 80L</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>LoneRider MotoBags</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Mosko Backcountry Pannier Kit</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Giant Loop Coyote Saddlebag</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
						{selectedService === 'campingGear' && (
							<div id='service-motorcycles' className='services__more-container'>
								<div className='services__more-heading'>
									<img className='services__more-image' src={service02} alt='motorcycle' />
									<h3 className='title title--med services__more-title'>Camping gear</h3>
									<p className='text   services__more-subtitle'>Camping gear renting</p>
									<div className='services__more-button'>
										<button className='services__more-button btn btn--med ' onClick={() => handleButtonClick('campingGear')}>
											{selectedService === 'campingGear' ? 'Close' : 'More'}
										</button>
									</div>
								</div>

								<div className='services__more-content'>
									<div className='services__more-content-heading'>
										<h3 className='services__more-pack-title title title--med'>What comes in this pack:</h3>
										<p>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dolore veritatis assumenda nam quisquam cumque eum fuga, modi suscipit sint mollitia recusandae. Fugiat quisquam
											eaque molestiae laudantium sunt ducimus exercitationem.
										</p>
									</div>
									<div className='services__more-packs'>
										<div className='services__more-pack'>
											<h4 className='title title--small'>Campsite:</h4>
											<ul>
												<li>
													<span>&#10004;</span>
													<p>Tent</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Sleeping bag </p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Sleeping pads</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Headlamp and lantern</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Camp chair</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Camp table</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Portable shower</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Camping pillow</p>
												</li>
											</ul>
										</div>
										<div className='services__more-sec-packs-wrapper'>
											<div className='services__more-pack'>
												<h4 className='title title title--small'>Kitchen:</h4>
												<ul>
													<li>
														<span>&#10004;</span>
														<p>Stove and fuel</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Cooking utensils</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Eating utensils</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Water bootles</p>
													</li>
												</ul>
											</div>

											<div className='services__more-pack'>
												<h4 className='title title--small'>Tools & repair items:</h4>
												<ul>
													<li>
														<span>&#10004;</span>
														<p>Multi-tool</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Duct tape & paracord</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>knife with firestarter</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Saw & axe</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
						{selectedService === 'motorcycleLuggage' && (
							<div id='service-motorcycles' className='services__more-container'>
								<div className='services__more-heading'>
									<img className='services__more-image' src={service03} alt='motorcycle' />
									<h3 className='title title--med services__more-title'>Motorcycle luggage</h3>
									<p className='text   services__more-subtitle'>Motorcycle luggage renting</p>
									<div className='services__more-button'>
										<button className='services__more-button btn btn--med ' onClick={() => handleButtonClick('motorcycleLuggage')}>
											{selectedService === 'motorcycleLuggage' ? 'Close' : 'More'}
										</button>
									</div>
								</div>

								<div className='services__more-content'>
									<div className='services__more-content-heading'>
										<h3 className='services__more-pack-title title title--med'>What comes in this pack:</h3>
										<p>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dolore veritatis assumenda nam quisquam cumque eum fuga, modi suscipit sint mollitia recusandae. Fugiat quisquam
											eaque molestiae laudantium sunt ducimus exercitationem.
										</p>
									</div>
									<div className='services__more-packs'>
										<div className='services__more-pack'>
											<h4 className='title title--small'>Luggage pieces:</h4>
											<ul>
												<li>
													<span>&#10004;</span>
													<p>Rackless system</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Soft top bag</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Hard top case</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Tank bag </p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Crashbar side bags</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Backpack</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Molle Pouches</p>
												</li>
											</ul>
										</div>
										<div className='services__more-sec-packs-wrapper'>
											<div className='services__more-pack'>
												<h4 className='title title title--small'>Must have extras:</h4>
												<ul>
													<li>
														<span>&#10004;</span>
														<p>Fuel Rotopax or bladder 10L</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>First aid Kit</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Water bottles or camelbag</p>
													</li>
												</ul>
											</div>

											<div className='services__more-pack'>
												<h4 className='title title--small'>Luggage sets:</h4>
												<ul>
													<li>
														<span>&#10004;</span>
														<p>Mosko reckless 80L</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>LoneRider MotoBags</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Mosko Backcountry Pannier Kit</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Giant Loop Coyote Saddlebag</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
						{selectedService === 'riderGear' && (
							<div id='service-motorcycles' className='services__more-container'>
								<div className='services__more-heading'>
									<img className='services__more-image' src={service04} alt='motorcycle' />
									<h3 className='title title--med services__more-title'>Rider Gear</h3>
									<p className='text   services__more-subtitle'>Rider gear renting</p>
									<div className='services__more-button'>
										<button className='services__more-button btn btn--med ' onClick={() => handleButtonClick('riderGear')}>
											{selectedService === 'riderGear' ? 'Close' : 'More'}
										</button>
									</div>
								</div>

								<div className='services__more-content'>
									<div className='services__more-content-heading'>
										<h3 className='services__more-pack-title title title--med'>What comes in this pack:</h3>
										<p>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dolore veritatis assumenda nam quisquam cumque eum fuga, modi suscipit sint mollitia recusandae. Fugiat quisquam
											eaque molestiae laudantium sunt ducimus exercitationem.
										</p>
									</div>
									<div className='services__more-packs'>
										<div className='services__more-pack'>
											<h4 className='title title--small'>Rider gear pieces:</h4>
											<ul>
												<li>
													<span>&#10004;</span>
													<p>Helmet</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Jacket</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Gloves</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Pants</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Knee braces & guards</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Boots</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Balaclava</p>
												</li>
												<li>
													<span>&#10004;</span>
													<p>Rain set</p>
												</li>
											</ul>
										</div>
										<div className='services__more-sec-packs-wrapper'>
											<div className='services__more-pack'>
												<h4 className='title title title--small'>Helmets brands:</h4>
												<ul>
													<li>
														<span>&#10004;</span>
														<p>Arai</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Shoei</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Klim</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Ls2</p>
													</li>
												</ul>
											</div>

											<div className='services__more-pack'>
												<h4 className='title title--small'>Clothes brands:</h4>
												<ul>
													<li>
														<span>&#10004;</span>
														<p>Klim</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Mosko</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Revit</p>
													</li>
													<li>
														<span>&#10004;</span>
														<p>Dainese</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	);
};

export default Services;

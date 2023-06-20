import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const OurServices = () => {
	return (
		<>
			<div className="kindergarten-services-area bg-f7ebeb pt-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Our Services</span>
						<h2 className="font-weight-black">
							Best Services for Kids
						</h2>
						<p>
							Explore all of our courses and pick your suitable ones
							to enroll and start learning with us! We ensure that you
							will never regret it!
						</p>
					</div>

					<Swiper 
						spaceBetween={30}
						navigation={true} 
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
						}}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						modules={[Navigation, Autoplay]} 
						className="services-slides"
					>
						<SwiperSlide>
							<div className="single-kindergarten-services-box">
								<img src="/images/box-shape1.png" alt="image" />

								<div className="content">
									<div className="icon">
										<i className="flaticon-guitar"></i>
									</div>
									<h3 className="font-weight-black">
										Music Training
									</h3>
									<p>
										Lorem ipsum dolor sit amet, ipsum adipiscing
										elit elit, sed do eiusmod tempor incididunt
										ut labore et dolore magna aliqua quis ipsum.
									</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-services-box">
								<img src="/images/box-shape2.png" alt="image" />

								<div className="content">
									<div className="icon">
										<i className="flaticon-experience"></i>
									</div>
									<h3 className="font-weight-black">
										Sports Training
									</h3>
									<p>
										Lorem ipsum dolor sit amet, ipsum adipiscing
										elit elit, sed do eiusmod tempor incididunt
										ut labore et dolore magna aliqua quis ipsum.
									</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-services-box">
								<img src="/images/box-shape3.png" alt="image" />

								<div className="content">
									<div className="icon">
										<i className="flaticon-artist"></i>
									</div>
									<h3 className="font-weight-black">
										Art Training
									</h3>
									<p>
										Lorem ipsum dolor sit amet, ipsum adipiscing
										elit elit, sed do eiusmod tempor incididunt
										ut labore et dolore magna aliqua quis ipsum.
									</p>
								</div>
							</div>
						</SwiperSlide>
						
						<SwiperSlide>
							<div className="single-kindergarten-services-box">
								<img src="/images/box-shape2.png" alt="image" />

								<div className="content">
									<div className="icon">
										<i className="flaticon-translation"></i>
									</div>
									<h3 className="font-weight-black">
										Language Training
									</h3>
									<p>
										Lorem ipsum dolor sit amet, ipsum adipiscing
										elit elit, sed do eiusmod tempor incididunt
										ut labore et dolore magna aliqua quis ipsum.
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>

					<div className="kids-kite-image">
						<img src="/images/kids-with-kite.png" alt="image" />
					</div>
				</div>

				<div className="kindergarten-shape9">
					<img
						src="/images/kindergarten-shape/k-shape9.png"
						alt="image"
					/>
				</div>
				<div className="kindergarten-shape10">
					<img
						src="/images/kindergarten-shape/k-shape10.png"
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default OurServices;

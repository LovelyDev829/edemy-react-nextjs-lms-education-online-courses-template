import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
	return (
		<>
			<div className="testimonials-area ptb-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Testimonials</span>
						<h2>What People Say About eDemy</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.
						</p>
					</div>

					<Swiper 
						slidesPerView={1}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						modules={[Pagination, Autoplay]}
						className="testimonials-slides"
					>
						<SwiperSlide>
							<div className="single-testimonials-item">
								<img
									src="/images/user1.jpg"
									className="client-img"
									alt="image"
								/>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum ultrices gravida. Risus commodo
									viverra maecenas accumsan lacus vel facilisis.
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed tempor incididunt ut labore
									et dolore.
								</p>
								<h3>John Smith</h3>
								<span>Python Developer</span>

								<div className="shape-img">
									<img
										src="/images/shape4.png"
										className="shape-1"
										alt="image"
									/>
									<img
										src="/images/shape14.png"
										className="shape-2"
										alt="image"
									/>
									<img
										src="/images/shape7.png"
										className="shape-3"
										alt="image"
									/>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-testimonials-item">
								<img
									src="/images/user2.jpg"
									className="client-img"
									alt="image"
								/>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum ultrices gravida. Risus commodo
									viverra maecenas accumsan lacus vel facilisis.
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed tempor incididunt ut labore
									et dolore.
								</p>
								<h3>Sarah Taylor</h3>
								<span>PHP Developer</span>

								<div className="shape-img">
									<img
										src="/images/shape4.png"
										className="shape-1"
										alt="image"
									/>
									<img
										src="/images/shape14.png"
										className="shape-2"
										alt="image"
									/>
									<img
										src="/images/shape7.png"
										className="shape-3"
										alt="image"
									/>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-testimonials-item">
								<img
									src="/images/user3.jpg"
									className="client-img"
									alt="image"
								/>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum ultrices gravida. Risus commodo
									viverra maecenas accumsan lacus vel facilisis.
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed tempor incididunt ut labore
									et dolore.
								</p>
								<h3>David Warner</h3>
								<span>QA Developer</span>

								<div className="shape-img">
									<img
										src="/images/shape4.png"
										className="shape-1"
										alt="image"
									/>
									<img
										src="/images/shape14.png"
										className="shape-2"
										alt="image"
									/>
									<img
										src="/images/shape7.png"
										className="shape-3"
										alt="image"
									/>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default Testimonials;

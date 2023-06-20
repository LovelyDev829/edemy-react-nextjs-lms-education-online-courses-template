import React from "react";
import Link from "next/link";
import FunFacts from "./FunFacts";
import IntoVideo from "./IntoVideo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackSliderWithFunFacts = () => {
	return (
		<>
			<div className="funfacts-and-feedback-area ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="feedback-content">
								<span className="sub-title">Distance learning</span>
								<h2>
									Flexible Study at Your Own Pace, According to
									Your Own Needs
								</h2>
								<p>
									With the eDemy, you can study whenever and
									wherever you choose. We have students in over
									175 countries and a global reputation as a
									pioneer in the field of flexible learning. Our
									teaching also means, if you travel often or need
									to relocate, you can continue to study wherever
									you go.
								</p>

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
									className="feedback-slides"
								>
									<SwiperSlide>
										<div className="single-feedback-item">
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore
												et dolore magna aliqua. Quis ipsum
												suspendisse ultrices gravida. Risus
												commodo viverra maecenas accumsan
												lacus vel facilisis. Lorem ipsum
												dolor sit amet, consectetur
												adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et
												dolore.
											</p>

											<div className="client-info d-flex align-items-center">
												<img
													src="/images/user1.jpg"
													className="rounded-circle"
													alt="image"
												/>
												<div className="title">
													<h3>John Smith</h3>
													<span>Python Developer</span>
												</div>
											</div>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="single-feedback-item">
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore
												et dolore magna aliqua. Quis ipsum
												suspendisse ultrices gravida. Risus
												commodo viverra maecenas accumsan
												lacus vel facilisis. Lorem ipsum
												dolor sit amet, consectetur
												adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et
												dolore.
											</p>

											<div className="client-info d-flex align-items-center">
												<img
													src="/images/user2.jpg"
													className="rounded-circle"
													alt="image"
												/>
												<div className="title">
													<h3>Sarah Taylor</h3>
													<span>PHP Developer</span>
												</div>
											</div>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="single-feedback-item">
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore
												et dolore magna aliqua. Quis ipsum
												suspendisse ultrices gravida. Risus
												commodo viverra maecenas accumsan
												lacus vel facilisis. Lorem ipsum
												dolor sit amet, consectetur
												adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et
												dolore.
											</p>

											<div className="client-info d-flex align-items-center">
												<img
													src="/images/user1.jpg"
													className="rounded-circle"
													alt="image"
												/>
												<div className="title">
													<h3>David Warner</h3>
													<span>QA Developer</span>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>

								<div className="feedback-info">
									<p>
										Not a member yet?​{" "}
										<Link href="/profile-authentication">
											<a>Register Now</a>
										</Link>
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<FunFacts />
						</div>

						<div className="col-lg-12 col-md-12">
							<IntoVideo />
						</div>
					</div>
				</div>

				<div className="shape2">
					<img src="/images/shape2.png" alt="image" />
				</div>
				<div className="shape3">
					<img src="/images/shape3.png" alt="image" />
				</div>
				<div className="shape4">
					<img src="/images/shape4.png" alt="image" />
				</div>
				<div className="shape9">
					<img src="/images/shape8.svg" alt="image" />
				</div>
			</div>
		</>
	);
};

export default FeedbackSliderWithFunFacts;

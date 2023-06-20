import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const TopSellingCourses = () => {
	return (
		<>
			<div className="courses-area pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Learn At Your Own Pace</span>
						<h2 className="font-weight-black">Top Selling Courses</h2>
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
						className="courses-slides-two pt-5"
					>
						<SwiperSlide>
							<div className="single-kindergarten-courses-box">
								<div className="courses-image">
									<div className="image">
										<img
											src="/images/courses/kindergarten-img1.jpg"
											alt="image"
										/>
									</div>
									<div className="price">
										<img
											src="/images/price-bg.png"
											alt="image"
										/>
										<span>$39</span>
									</div>
									<Link href="#">
										<a className="link-btn"></a>
									</Link>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user1.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>Alex Morgan</span>
									</div>
									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											<a>
												Equivalent fractions and comparing
												fractions
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-courses-box">
								<div className="courses-image">
									<div className="image">
										<img
											src="/images/courses/kindergarten-img2.jpg"
											alt="image"
										/>
									</div>
									<div className="price">
										<img
											src="/images/price-bg.png"
											alt="image"
										/>
										<span>$49</span>
									</div>
									<Link href="#">
										<a className="link-btn"></a>
									</Link>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user2.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>Sarah Taylor</span>
									</div>
									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											<a>
												Arithmetic patterns and problem
												solving
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-courses-box">
								<div className="courses-image">
									<div className="image">
										<img
											src="/images/courses/kindergarten-img3.jpg"
											alt="image"
										/>
									</div>
									<div className="price">
										<img
											src="/images/price-bg.png"
											alt="image"
										/>
										<span>$59</span>
									</div>
									<Link href="#">
										<a className="link-btn"></a>
									</Link>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user3.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>David Warner</span>
									</div>
									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											<a>
												The unit circle definition of sine,
												and cosine
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
								</div>
							</div>
						</SwiperSlide>
						
						<SwiperSlide>
							<div className="single-kindergarten-courses-box">
								<div className="courses-image">
									<div className="image">
										<img
											src="/images/courses/kindergarten-img4.jpg"
											alt="image"
										/>
									</div>
									<div className="price">
										<img
											src="/images/price-bg.png"
											alt="image"
										/>
										<span>$69</span>
									</div>
									<Link href="#">
										<a className="link-btn"></a>
									</Link>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user4.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>James Andy</span>
									</div>
									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											<a>
												Thinking about multivariable
												functions
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="kindergarten-shape11">
					<img
						src="/images/kindergarten-shape/k-shape11.png"
						alt="image"
					/>
				</div>
				<div className="kindergarten-shape12">
					<img
						src="/images/kindergarten-shape/k-shape12.png"
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default TopSellingCourses;

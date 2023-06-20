import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const PopularCourses = () => {
	return (
		<>
			<div className="courses-area ptb-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Go At Your Own Pace</span>
						<h2>Our Popular Courses</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.
						</p>
					</div>

					<Swiper
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
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
						modules={[Pagination, Autoplay]}
						className="courses-slides"
					>
						<SwiperSlide>
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-2">
										<a className="d-block image">
											<img
												src="/images/courses/courses1.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<a href="#" className="fav">
										<i className="flaticon-heart"></i>
									</a>
									<div className="price shadow">$39</div>
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
									<h3>
										<Link href="/single-courses-2">
											<a>
												The Data Science Course 2020:
												Complete Data Science Bootcamp
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i> 15
											Lessons
										</li>
										<li>
											<i className="flaticon-people"></i> 145
											Students
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-2">
										<a className="d-block image">
											<img
												src="/images/courses/courses2.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<a href="#" className="fav">
										<i className="flaticon-heart"></i>
									</a>
									<div className="price shadow">$49</div>
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
									<h3>
										<Link href="/single-courses-2">
											<a>
												Java Programming MasterclassName for
												Software Developers
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i> 20
											Lessons
										</li>
										<li>
											<i className="flaticon-people"></i> 100
											Students
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-2">
										<a className="d-block image">
											<img
												src="/images/courses/courses3.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<a href="#" className="fav">
										<i className="flaticon-heart"></i>
									</a>
									<div className="price shadow">$59</div>
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
									<h3>
										<Link href="/single-courses-2">
											<a>
												Deep Learning A-Z™: Hands-On
												Artificial Neural Networks
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i> 20
											Lessons
										</li>
										<li>
											<i className="flaticon-people"></i> 150
											Students
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-2">
										<a className="d-block image">
											<img
												src="/images/courses/courses4.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<a href="#" className="fav">
										<i className="flaticon-heart"></i>
									</a>
									<div className="price shadow">$54</div>
								</div>
								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user4.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>Andy Smith</span>
									</div>
									<h3>
										<Link href="/single-courses-2">
											<a>
												Python for Finance: Investment
												Fundamentals & Data Analytics
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i> 14
											Lessons
										</li>
										<li>
											<i className="flaticon-people"></i> 211
											Students
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>

					<div className="courses-info">
						<p>
							Get the most dedicated consultation for your
							life-changing course. Earn a certification for your
							effort and passion{" "}
							<Link href="/profile-authentication">
								<a>Join Free Now</a>
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default PopularCourses;

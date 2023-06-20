import React from "react";
import PageBanner from "@/components/SingleCourses/PageBanner";
import CoursesDetailsSidebar from "@/components/SingleCourses/CoursesDetailsSidebar";
import YouMightLikeTheCourses from "@/components/Courses/YouMightLikeTheCourses";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import CoursesCurriculum from "@/components/Courses/CoursesCurriculum";

const Details = ({ course, user }) => {
	// console.log(course)
	return (
		<>
			<PageBanner
				pageTitle={course.title}
				homePageUrl="/"
				homePageText="Home"
				innerPageUrl="/courses-1"
				innerPageText="Courses"
				activePageText={course.title}
			/>

			<div className="courses-details-area pb-100">
				<div className="courses-details-image">
					<img src={course.coverPhoto} alt={course.title} />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="courses-details-desc">
								<Tabs>
									<TabList>
										<Tab>Overview</Tab>
										<Tab>Curriculum</Tab>
										<Tab>Instructor</Tab>
										<Tab>Reviews</Tab>
									</TabList>

									<TabPanel>
										<div className="courses-overview">
											<h3>Course Description</h3>
											<p>{course.overview}</p>
										</div>
									</TabPanel>

									<TabPanel>
										<CoursesCurriculum
											videos={course.videos}
										/>
									</TabPanel>

									<TabPanel>
										<div className="courses-instructor">
											<div className="single-advisor-box">
												<div className="row align-items-center">
													<div className="col-lg-4 col-md-4">
														<div className="advisor-image">
															<img
																src={`${
																	course.user
																		.profilePhoto
																		? course
																				.user
																				.profilePhoto
																		: "/images/advisor/advisor2.jpg"
																}`}
																alt={
																	course.user
																		.name
																}
															/>
														</div>
													</div>

													<div className="col-lg-8 col-md-8">
														<div className="advisor-content">
															<h3>
																{
																	course.user
																		.name
																}
															</h3>
															<span className="sub-title">
																{course.user
																	.designation ||
																	"Empty"}
															</span>
															<p>
																{course.user
																	.about ||
																	"Empty"}
															</p>

															<ul className="social-link">
																<li>
																	<a
																		href={
																			course
																				.user
																				.fb_url ||
																			"#"
																		}
																		className="d-block"
																		target="_blank"
																	>
																		<i className="bx bxl-facebook"></i>
																	</a>
																</li>
																<li>
																	<a
																		href={
																			course
																				.user
																				.tw_url ||
																			"#"
																		}
																		className="d-block"
																		target="_blank"
																	>
																		<i className="bx bxl-twitter"></i>
																	</a>
																</li>
																<li>
																	<a
																		href={
																			course
																				.user
																				.insta_url ||
																			"#"
																		}
																		className="d-block"
																		target="_blank"
																	>
																		<i className="bx bxl-instagram"></i>
																	</a>
																</li>
																<li>
																	<a
																		href={
																			course
																				.user
																				.in_url ||
																			"#"
																		}
																		className="d-block"
																		target="_blank"
																	>
																		<i className="bx bxl-linkedin"></i>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</TabPanel>

									<TabPanel>
										<div className="courses-reviews">
											<h3>Course Rating</h3>
											<div className="rating">
												<span className="bx bxs-star checked"></span>
												<span className="bx bxs-star checked"></span>
												<span className="bx bxs-star checked"></span>
												<span className="bx bxs-star checked"></span>
												<span className="bx bxs-star"></span>
											</div>
											<div className="rating-count">
												<span>
													4.1 average based on 4
													reviews.
												</span>
											</div>
											<div className="row">
												<div className="side">
													<div>5 star</div>
												</div>
												<div className="middle">
													<div className="bar-container">
														<div className="bar-5"></div>
													</div>
												</div>
												<div className="side right">
													<div>02</div>
												</div>
												<div className="side">
													<div>4 star</div>
												</div>
												<div className="middle">
													<div className="bar-container">
														<div className="bar-4"></div>
													</div>
												</div>
												<div className="side right">
													<div>03</div>
												</div>
												<div className="side">
													<div>3 star</div>
												</div>
												<div className="middle">
													<div className="bar-container">
														<div className="bar-3"></div>
													</div>
												</div>
												<div className="side right">
													<div>04</div>
												</div>
												<div className="side">
													<div>2 star</div>
												</div>
												<div className="middle">
													<div className="bar-container">
														<div className="bar-2"></div>
													</div>
												</div>
												<div className="side right">
													<div>05</div>
												</div>
												<div className="side">
													<div>1 star</div>
												</div>
												<div className="middle">
													<div className="bar-container">
														<div className="bar-1"></div>
													</div>
												</div>
												<div className="side right">
													<div>00</div>
												</div>
											</div>
										</div>

										<div className="courses-review-comments">
											<h3>3 Reviews</h3>
											<div className="user-review">
												<img
													src="/images/user1.jpg"
													alt="image"
												/>

												<div className="review-rating">
													<div className="review-stars">
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
													</div>

													<span className="d-inline-block">
														James Anderson
													</span>
												</div>

												<span className="d-block sub-comment">
													Excellent
												</span>
												<p>
													Very well built theme,
													couldn't be happier with it.
													Can't wait for future
													updates to see what else
													they add in.
												</p>
											</div>

											<div className="user-review">
												<img
													src="/images/user2.jpg"
													alt="image"
												/>

												<div className="review-rating">
													<div className="review-stars">
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star"></i>
														<i className="bx bxs-star"></i>
													</div>

													<span className="d-inline-block">
														Sarah Taylor
													</span>
												</div>

												<span className="d-block sub-comment">
													Video Quality!
												</span>
												<p>
													Was really easy to implement
													and they quickly answer my
													additional questions!
												</p>
											</div>

											<div className="user-review">
												<img
													src="/images/user3.jpg"
													alt="image"
												/>

												<div className="review-rating">
													<div className="review-stars">
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
													</div>

													<span className="d-inline-block">
														David Warner
													</span>
												</div>

												<span className="d-block sub-comment">
													Perfect Coding!
												</span>
												<p>
													Stunning design, very
													dedicated crew who welcome
													new ideas suggested by
													customers, nice support.
												</p>
											</div>

											<div className="user-review">
												<img
													src="/images/user4.jpg"
													alt="image"
												/>

												<div className="review-rating">
													<div className="review-stars">
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star checked"></i>
														<i className="bx bxs-star"></i>
													</div>

													<span className="d-inline-block">
														King Kong
													</span>
												</div>

												<span className="d-block sub-comment">
													Perfect Video!
												</span>
												<p>
													Stunning design, very
													dedicated crew who welcome
													new ideas suggested by
													customers, nice support.
												</p>
											</div>
										</div>
									</TabPanel>
								</Tabs>
							</div>
						</div>

						<div className="col-lg-4 col-md-12">
							<CoursesDetailsSidebar
								{...course}
								loggedInUser={user}
							/>
						</div>
					</div>
				</div>
			</div>

			<YouMightLikeTheCourses />
		</>
	);
};

Details.getInitialProps = async (ctx) => {
	const { id } = ctx.query;
	const url = `${baseUrl}/api/v1/courses/course/${id}`;
	const response = await axios.get(url);
	// console.log(response)
	return response.data;
};

export default Details;

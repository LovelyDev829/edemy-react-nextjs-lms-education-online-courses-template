import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import BlogSidebar from "../components/Blog/BlogSidebar";
import CommentArea from "../components/Blog/CommentForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const BlogDetails = () => {
	return (
		<>
			<PageBanner
				pageTitle="Blog Details"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Blog Details"
			/>

			<div className="blog-details-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="blog-details-desc">
								<Swiper 
									navigation={true} 
									autoplay={{
										delay: 6500,
										disableOnInteraction: true,
										pauseOnMouseEnter: true,
									}}
									modules={[Navigation, Autoplay]} 
									className="article-image-slides"
								>
									<SwiperSlide>
										<div className="article-image">
											<img
												src="/images/blog/blog3.jpg"
												alt="image"
											/>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="article-image">
											<img
												src="/images/blog/blog2.jpg"
												alt="image"
											/>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="article-image">
											<img
												src="/images/blog/blog1.jpg"
												alt="image"
											/>
										</div>
									</SwiperSlide>
								</Swiper>

								<div className="article-content">
									<div className="entry-meta">
										<ul>
											<li>
												<i className="bx bx-folder-open"></i>
												<span>Category</span>

												<Link href="#">
													<a>Fashion</a>
												</Link>
											</li>
											<li>
												<i className="bx bx-group"></i>
												<span>View</span>

												<Link href="#">
													<a>813,454</a>
												</Link>
											</li>
											<li>
												<i className="bx bx-calendar"></i>
												<span>Last Updated</span>

												<Link href="#">
													<a>25/04/2020</a>
												</Link>
											</li>
										</ul>
									</div>

									<h3>
										It’s Time To Think Differently About
										Homeschooling
									</h3>

									<p>
										Quuntur magni dolores eos qui ratione
										voluptatem sequi nesciunt. Neque porro
										quia non numquam eius modi tempora
										incidunt ut labore et dolore magnam
										dolor sit amet, consectetur adipisicing.
									</p>

									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit
										in sed quia non numquam eius modi
										tempora incidunt ut labore et dolore
										magnam aliquam quaerat voluptatem.
									</p>

									<blockquote className="wp-block-quote">
										<p>
											It is a long established fact that a
											reader will be distracted by the
											readable content of a page when
											looking at its layout.
										</p>

										<cite>Tom Cruise</cite>
									</blockquote>

									<p>
										Quuntur magni dolores eos qui ratione
										voluptatem sequi nesciunt. Neque porro
										quia non numquam eius modi tempora
										incidunt ut labore et dolore magnam
										dolor sit amet, consectetur adipisicing.
									</p>

									<ul className="wp-block-gallery columns-3">
										<li className="blocks-gallery-item">
											<figure>
												<img
													src="/images/blog/blog15.jpg"
													alt="image"
												/>
											</figure>
										</li>
										<li className="blocks-gallery-item">
											<figure>
												<img
													src="/images/blog/blog14.jpg"
													alt="image"
												/>
											</figure>
										</li>
										<li className="blocks-gallery-item">
											<figure>
												<img
													src="/images/blog/blog13.jpg"
													alt="image"
												/>
											</figure>
										</li>
									</ul>

									<h3>Four major elements that we offer:</h3>

									<ul className="features-list">
										<li>
											<i className="bx bx-badge-check"></i>{" "}
											Scientific skills for getting a
											better result
										</li>
										<li>
											<i className="bx bx-badge-check"></i>{" "}
											Communication skills to getting in
											touch
										</li>
										<li>
											<i className="bx bx-badge-check"></i>{" "}
											A career overview opportunity
											available
										</li>
										<li>
											<i className="bx bx-badge-check"></i>{" "}
											A good work environment for work
										</li>
									</ul>

									<h3>Setting the mood with incense</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit
										in sed quia non numquam eius modi
										tempora incidunt ut labore et dolore
										magnam aliquam quaerat voluptatem.
									</p>

									<h3>
										The rise of marketing and why you need
										it
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud.
									</p>
								</div>

								<div className="article-footer">
									<div className="article-tags">
										<span>
											<i className="bx bx-purchase-tag"></i>
										</span>

										<a href="#">Fashion</a>
										<a href="#">Games</a>
										<a href="#">Travel</a>
									</div>

									<div className="article-share">
										<ul className="social">
											<li>
												<span>Share:</span>
											</li>
											<li>
												<a
													href="#"
													className="facebook"
													target="_blank"
												>
													<i className="bx bxl-facebook"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="twitter"
													target="_blank"
												>
													<i className="bx bxl-twitter"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="linkedin"
													target="_blank"
												>
													<i className="bx bxl-linkedin"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="instagram"
													target="_blank"
												>
													<i className="bx bxl-instagram"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="article-author">
									<div className="author-profile-header"></div>
									<div className="author-profile">
										<div className="author-profile-title">
											<img
												src="/images/user1.jpg"
												className="shadow-sm"
												alt="image"
											/>

											<div className="author-profile-title-details">
												<div className="author-profile-details">
													<h4>Chris Orwig</h4>
													<span className="d-block">
														Photographer, Author,
														Writer
													</span>
												</div>
											</div>
										</div>
										<p>
											Chris Orwig is a celebrated
											photographer, author, and writer who
											brings passion to everything he
											does.
										</p>
									</div>
								</div>

								<div className="edemy-post-navigation">
									<div className="prev-link-wrapper">
										<div className="info-prev-link-wrapper">
											<a href="#">
												<span className="image-prev">
													<img
														src="/images/blog/blog11.jpg"
														alt="image"
													/>
													<span className="post-nav-title">
														Prev
													</span>
												</span>

												<span className="prev-link-info-wrapper">
													<span className="prev-title">
														What Is The MLB Summer
														Slugger Program?
													</span>
													<span className="meta-wrapper">
														<span className="date-post">
															January 21, 2020
														</span>
													</span>
												</span>
											</a>
										</div>
									</div>

									<div className="next-link-wrapper">
										<div className="info-next-link-wrapper">
											<a href="#">
												<span className="next-link-info-wrapper">
													<span className="next-title">
														28 Student-Centered
														Instructional Strategies
													</span>
													<span className="meta-wrapper">
														<span className="date-post">
															January 19, 2020
														</span>
													</span>
												</span>

												<span className="image-next">
													<img
														src="/images/blog/blog12.jpg"
														alt="image"
													/>
													<span className="post-nav-title">
														Next
													</span>
												</span>
											</a>
										</div>
									</div>
								</div>

								<CommentArea />
							</div>
						</div>

						<div className="col-lg-4 col-md-12">
							<BlogSidebar />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogDetails;

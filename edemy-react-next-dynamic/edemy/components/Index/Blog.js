import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Blog = () => {
	const { t } = useTranslation("distance-learning");
	return (
		<div className="blog-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">{t("news-and-blog")}</span>
					<h2>{t("latest-blog")}</h2>
					<p>{t("latest-blog-desc")}</p>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="single-blog-post">
							<div className="post-image">
								<Link href="/single-blog-1">
									<a className="d-block">
										<img
											src="/images/blog/img16.jpg"
											alt="image"
										/>
									</a>
								</Link>
							</div>
							<div className="post-content">
								<Link href="#">
									<a className="category">Education</a>
								</Link>
								<h3>
									<Link href="/single-blog-1">
										<a>
											University Admissions Could Face
											Emergency Controls
										</a>
									</Link>
								</h3>
								<ul className="post-content-footer d-flex justify-content-between align-items-center">
									<li>
										<div className="post-author d-flex align-items-center">
											<img
												src="/images/user1.jpg"
												className="rounded-circle"
												alt="image"
											/>
											<span>Alex Morgan</span>
										</div>
									</li>
									<li>
										<i className="flaticon-calendar"></i>{" "}
										Feb 22, 2021
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-blog-post">
							<div className="post-image">
								<Link href="/single-blog-1">
									<a className="d-block">
										<img
											src="/images/blog/img17.jpg"
											alt="image"
										/>
									</a>
								</Link>
							</div>
							<div className="post-content">
								<Link href="#">
									<a className="category">Online</a>
								</Link>
								<h3>
									<Link href="/single-blog-1">
										<a>
											Online Learning Can Prepare Students
											For A Fast-Changing
										</a>
									</Link>
								</h3>
								<ul className="post-content-footer d-flex justify-content-between align-items-center">
									<li>
										<div className="post-author d-flex align-items-center">
											<img
												src="/images/user2.jpg"
												className="rounded-circle"
												alt="image"
											/>
											<span>Sarah Taylor</span>
										</div>
									</li>
									<li>
										<i className="flaticon-calendar"></i>{" "}
										Feb 25, 2021
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-blog-post">
							<div className="post-image">
								<Link href="/single-blog-1">
									<a className="d-block">
										<img
											src="/images/blog/img18.jpg"
											alt="image"
										/>
									</a>
								</Link>
							</div>
							<div className="post-content">
								<Link href="#">
									<a className="category">Learning</a>
								</Link>
								<h3>
									<Link href="/single-blog-1">
										<a>
											As Learning Moves Online, Trigger
											Warnings Must Too
										</a>
									</Link>
								</h3>
								<ul className="post-content-footer d-flex justify-content-between align-items-center">
									<li>
										<div className="post-author d-flex align-items-center">
											<img
												src="/images/user3.jpg"
												className="rounded-circle"
												alt="image"
											/>
											<span>David Warner</span>
										</div>
									</li>
									<li>
										<i className="flaticon-calendar"></i>{" "}
										Feb 28, 2021
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-md-12">
						<div className="blog-post-info">
							<p>
								Get into details now?​ {` `}
								<Link href="/blog-1">
									<a>View all posts</a>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;

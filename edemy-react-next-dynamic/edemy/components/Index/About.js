import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const About = () => {
	const { t } = useTranslation("distance-learning");
	return (
		<div className="about-area ptb-100 bg-f9fbff">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="about-image">
							<img src="/images/about-img12.png" alt="image" />
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="about-content">
							<span className="sub-title">
								{t("distance-learning")}
							</span>
							<h2>{t("distance-learning-heading")}</h2>
							<p>{t("distance-learning-desc")}</p>
							<ul className="features-list">
								<li>
									<span>
										<i className="flaticon-experience"></i>{" "}
										{t("expert-instruction")}
									</span>
								</li>
								<li>
									<span>
										<i className="flaticon-time-left"></i>{" "}
										{t("lifetime-access")}
									</span>
								</li>
								<li>
									<span>
										<i className="flaticon-tutorials"></i>{" "}
										{t("remote-learning")}
									</span>
								</li>
								<li>
									<span>
										<i className="flaticon-self-growth"></i>{" "}
										{t("self-development")}
									</span>
								</li>
							</ul>
							<Link href="/courses-1">
								<a className="default-btn">
									<i className="flaticon-user"></i>
									{t("view-all-courses")}
									<span></span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="bulb">
				<img src="/images/bulb.png" alt="image" />
			</div>
		</div>
	);
};

export default About;

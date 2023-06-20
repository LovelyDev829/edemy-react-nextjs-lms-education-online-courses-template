import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Features = () => {
	const { t } = useTranslation("distance-learning");
	return (
		<div className="features-area pt-100 pb-70 bg-fff8f8">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">
						{t("education-for-everyone")}
					</span>
					<h2>{t("features-heading")}​</h2>
					<p>{t("features-description")}</p>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6 col-md-6">
						<div className="features-box">
							<div className="icon">
								<i className="flaticon-brain-process"></i>
							</div>
							<h3>{t("learn-latest-skills")}</h3>
							<p>{t("skills-description")} </p>
							<Link href="/authentication">
								<a className="link-btn">{t("start-now")}</a>
							</Link>
							<div className="back-icon">
								<i className="flaticon-brain-process"></i>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-md-6">
						<div className="features-box">
							<div className="icon">
								<i className="flaticon-shield-1"></i>
							</div>
							<h3>{t("learn-industry-experts")}</h3>
							<p>{t("industry-description")} </p>
							<Link href="/authentication">
								<a className="link-btn">{t("start-now")}</a>
							</Link>
							<div className="back-icon">
								<i className="flaticon-shield-1"></i>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-md-6">
						<div className="features-box">
							<div className="icon">
								<i className="flaticon-world"></i>
							</div>
							<h3>{t("learn-anywhere")}</h3>
							<p>{t("learn-description")} </p>
							<Link href="/authentication">
								<a className="link-btn">{t("start-now")}</a>
							</Link>
							<div className="back-icon">
								<i className="flaticon-world"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;

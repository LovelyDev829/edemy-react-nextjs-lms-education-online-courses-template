import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const EdemyPremium = () => {
	const { t } = useTranslation("distance-learning");
	return (
		<div>
			<div className="view-all-courses-area-three bg-fff8f8">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="view-all-courses-image-style-two">
								<img src="/images/strategy.png" alt="image" />
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="view-all-courses-content-style-two">
								<span className="sub-title">
									{t("distance-learning")}
								</span>
								<h2>{t("go-ahead")}</h2>
								<p>{t("go-ahead-desc")}</p>
								<Link href="/courses-1">
									<a className="default-btn">
										<i className="flaticon-agenda"></i>
										{t("view-courses")}
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

			<div className="premium-access-area-two">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="premium-access-content-style-two">
								<span className="sub-title">
									{t("go-own-pace")}
								</span>
								<h2>{t("unlimited-access")}</h2>
								<p>{t("unlimited-access-desc")}</p>
								<Link href="/membership-levels">
									<a className="default-btn">
										<i className="flaticon-user"></i>
										{t("get-started-now")}
										<span></span>
									</a>
								</Link>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="premium-access-image-style-two">
								<img src="/images/security.png" alt="image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EdemyPremium;

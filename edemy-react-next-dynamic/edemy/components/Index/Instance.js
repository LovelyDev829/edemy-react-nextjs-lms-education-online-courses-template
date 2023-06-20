import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Instance = () => {
	const { t } = useTranslation("distance-learning");
	return (
		<div className="get-instant-courses-area-two bg-f9fbff">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-7 col-md-12">
						<div className="get-instant-courses-content-style-two">
							<span className="sub-title">
								{t("instant-access")}
							</span>
							<h2>{t("self-development-course")}</h2>
							<p>{t("self-development-desc")}</p>
							<Link href="/authentication">
								<a className="default-btn">
									<i className="flaticon-user"></i>
									{t("start-for-free")}
									<span></span>
								</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-5 col-md-12">
						<div className="get-instant-courses-image-style-two">
							<img src="/images/setting.png" alt="image" />
						</div>
					</div>
				</div>
			</div>
			<div className="bulb">
				<img src="/images/bulb2.png" alt="image" />
			</div>
		</div>
	);
};

export default Instance;

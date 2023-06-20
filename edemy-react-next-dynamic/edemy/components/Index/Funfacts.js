import React from "react";
import useTranslation from "next-translate/useTranslation";

const Funfacts = () => {
	const { t } = useTranslation("distance-learning");
	return (
		<div className="funfacts-area-three bg-fff8f8 pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-3 col-6">
						<div className="funfacts-box">
							<div className="content">
								<h3>
									<span className="odometer">3279</span>
								</h3>
								<p>{t("enrolled-learners")}</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-3 col-6">
						<div className="funfacts-box">
							<div className="content">
								<h3>
									<span className="odometer">250</span>
								</h3>
								<p>{t("online-instructor")}</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-3 col-6">
						<div className="funfacts-box">
							<div className="content">
								<h3>
									<span className="odometer">1926</span>
								</h3>
								<p>{t("finished-session")}</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-3 col-6">
						<div className="funfacts-box">
							<div className="content">
								<h3>
									<span className="odometer">100</span>%
								</h3>
								<p>{t("satisfaction-rate")}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Funfacts;

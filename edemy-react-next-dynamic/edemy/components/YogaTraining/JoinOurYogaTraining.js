import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(import("react-modal-video"));

const JoinOurYogaTraining = () => {
	const [display, setDisplay] = React.useState(false);
	const [isOpen, setIsOpen] = React.useState(true);

	React.useEffect(() => {
		setDisplay(true);
	}, []);
	// Popup Video

	const openModal = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<div className="experience-area ptb-100 extra-padding">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="experience-content">
								<span className="sub-title">
									Join our World Famous Yoga Teacher Training
									Course... Online!
								</span>
								<h2 className="playfair-display-font">
									200hr, 300hr & 500hr Certified Online Yoga
									courses
								</h2>
								<p>
									eCademy training programs can bring you a
									super exciting experience of learning
									through online! You never face any negative
									experience while enjoying your classNamees
									virtually by sitting in your comfort zone.
									Our flexible learning initiatives will help
									you to learn better and quicker than the
									traditional ways of learning skills.
								</p>

								<ul className="features-list">
									<li>
										<i className="bx bx-check"></i> Receive
										a Yoga Alliance Certificate
									</li>
									<li>
										<i className="bx bx-check"></i> 100hrs
										of Live Streaming Zoom classNamees
									</li>
									<li>
										<i className="bx bx-check"></i> Watch
										Video Modules in Your Free Time
									</li>
									<li>
										<i className="bx bx-check"></i> Flex
										Schedule with Extended Time from Yoga
										Alliance
									</li>
									<li>
										<i className="bx bx-check"></i> Practice
										Traditional Hatha and vinyasa Yoga
									</li>
									<li>
										<i className="bx bx-check"></i> Bonus
										Aerial & Acro Yoga Workshops
									</li>
								</ul>

								<Link href="/profile-authentication">
									<a className="default-btn">
										<i className="flaticon-user"></i> Get
										Started Now <span></span>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="experience-image">
								<img
									src="/images/experience-img1.jpg"
									alt="image"
								/>

								<div
									onClick={()=> openModal()}
									className="video-btn"
								>
									<i className="flaticon-play"></i>
								</div>
								 
								<span className="title">
									<span>15</span> Years of Experience
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* If you want to change the video need to update videoID */}
			{display ? (
				<ModalVideo
					channel="youtube"
					isOpen={!isOpen}
					videoId="bk7McNUjWgw"
					onClose={() => setIsOpen(!isOpen)}
				/>
			) : (
				""
			)}
		</>
	);
};

export default JoinOurYogaTraining;

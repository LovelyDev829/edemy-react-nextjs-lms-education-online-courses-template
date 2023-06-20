import React from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(import("react-modal-video"));

const IntroVideo = () => {
	const [display, setDisplay] = React.useState(false);

	React.useEffect(() => {
		setDisplay(true);
	}, []);
	// Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
	const openModal = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<div className="success-story-area pb-100">
				<div className="container">
					<div className="video-box mt-0">
						<div className="image">
							<img
								src="/images/success-story.jpg"
								className="shadow"
								alt="image"
							/>
						</div>

						<div
							onClick={()=> openModal()}
							className="video-btn popup-youtube"
						>
							<i className="flaticon-play"></i>
						</div>
			 

						<div className="shape10">
							<img src="/images/shape9.png" alt="image" />
						</div>
					</div>
				</div>

				<div className="shape2">
					<img src="/images/shape2.png" alt="image" />
				</div>
				<div className="shape3">
					<img src="/images/shape3.png" alt="image" />
				</div>
				<div className="shape4">
					<img src="/images/shape4.png" alt="image" />
				</div>
				<div className="shape9">
					<img src="/images/shape8.svg" alt="image" />
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

export default IntroVideo;

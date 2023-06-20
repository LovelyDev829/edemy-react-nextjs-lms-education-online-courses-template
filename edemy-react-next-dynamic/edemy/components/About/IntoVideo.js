import React from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(import("react-modal-video"));

const IntoVideo = () => {
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
			<div className="video-box">
				<div className="image">
					<img
						src="/images/video-img1.jpg"
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

export default IntoVideo;

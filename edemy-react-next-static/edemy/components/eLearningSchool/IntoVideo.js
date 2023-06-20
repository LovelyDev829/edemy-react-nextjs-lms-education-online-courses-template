import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const IntoVideo = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="video-box">
                <div className="image">
                    <img src="/images/video-img1.jpg" className="shadow" alt="image" />
                </div>
 
                <div
                    onClick={e => {e.preventDefault(); openModal()}}
                    className="video-btn"
                > 
                    <i className="flaticon-play"></i>
                </div>
          
                <div className="shape10">
                    <img src="/images/shape9.png" alt="image" />
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    )
}

export default IntoVideo;
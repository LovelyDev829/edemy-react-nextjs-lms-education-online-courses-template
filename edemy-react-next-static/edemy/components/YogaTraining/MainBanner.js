import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="yoga-main-banner">
            <div className="container-fluid">
                <div className="yoga-banner-content">
                    <img src="/images/yoga-banner.png" alt="image" className="main-image" />

                    <div className="content">
                        <img src="/images/top-img.png" className="top-image" alt="image" />
                        <h1 className="playfair-display-font">Accredited Online Yoga Teacher Training</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <Link href="/profile-authentication">
                            <a className="default-btn">
                                <i className="flaticon-user"></i> Join For Free <span></span>
                            </a>
                        </Link>

                        <br />

                        <img src="/images/bottom-img.png" className="bottom-image" alt="image" />
                    </div>
                </div>
            </div>

            <div className="banner-shape2">
                <img src="/images/banner-shape2.png" alt="image" />
            </div>
            <div className="banner-shape3">
                <img src="/images/banner-shape3.png" alt="image" />
            </div>
        </div>
    )
}

export default MainBanner;
import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="health-coaching-banner-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="health-coaching-banner-image">
                            <img src="/images/woman.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="health-coaching-banner-content">
                            <h1 className="playfair-display-font">Welcome, <br /> I am Amada, <br /> Your Nutritionist</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="btn-box">
                                <div className="d-flex align-items-center">
                                    <Link href="/profile-authentication">
                                        <a className="default-btn">
                                            <i className="flaticon-user"></i> Join For Free <span></span>
                                        </a>
                                    </Link>
                                    <img src="/images/signature.png" className="signature" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="health-coaching-shape1">
                <img src="/images/health-coaching-shape1.png" alt="image" />
            </div>
            <div className="health-coaching-shape2">
                <img src="/images/health-coaching-shape2.png" alt="image" />
            </div>
            <div className="health-coaching-shape3">
                <img src="/images/health-coaching-shape3.png" alt="image" />
            </div>
            <div className="health-coaching-shape4">
                <img src="/images/health-coaching-shape4.png" alt="image" />
            </div>
            <div className="health-coaching-shape5">
                <img src="/images/health-coaching-shape5.png" alt="image" />
            </div>
            <div className="health-coaching-shape6">
                <img src="/images/health-coaching-shape6.png" alt="image" />
            </div>
            <div className="health-coaching-shape7">
                <img src="/images/health-coaching-shape7.png" alt="image" />
            </div>

            <div className="divider"></div>
        </div>
    )
}

export default MainBanner;
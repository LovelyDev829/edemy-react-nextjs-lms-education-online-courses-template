import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner-wrapper">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="main-banner-wrapper-content">
                            <h1>Achieve the Best Results with Academy</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <Link href="/profile-authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> Join For Free <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="main-banner-wrapper-image text-center">
                            <img src="/images/banner-img3.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-shape14">
                <img src="/images/banner-shape15.png" alt="image" />
            </div>
            <div className="banner-shape15">
                <img src="/images/banner-shape16.png" alt="image" />
            </div>
            <div className="banner-shape16">
                <img src="/images/banner-shape17.png" alt="image" />
            </div>
            <div className="banner-shape17">
                <img src="/images/banner-shape18.png" alt="image" />
            </div>
            <div className="banner-shape18">
                <img src="/images/banner-shape19.png" alt="image" />
            </div>
        </div>
    )
}

export default MainBanner;
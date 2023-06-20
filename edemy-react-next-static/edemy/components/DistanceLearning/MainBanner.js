import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-wrapper jarallax">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-wrapper-text">
                            <h1>Build Skills With Experts Any Time, Anywhere</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <Link href="/courses-4">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i>View All Courses<span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-shape11">
                <img src="/images/banner-shape12.png" alt="image" />
            </div>
            <div className="banner-shape12">
                <img src="/images/banner-shape13.png" alt="image" />
            </div>
            <div className="banner-shape13">
                <img src="/images/banner-shape14.png" alt="image" />
            </div>
        </div>
    )
}

export default MainBanner;
import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-area bg-f5f7fa ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image text-center">
                            <img src="/images/about-img10.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">About Us</span>
                            <h2>Develop Your Skills, Learn Something New, and Grow Your Skills From Anywhere in the World!</h2>
                            <p>We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!</p>

                            <ul className="features-list">
                                <li><span><i className="flaticon-experience"></i> Skiled Teachers</span></li>
                                <li><span><i className="flaticon-time-left"></i> Afordable Courses</span></li>
                                <li><span><i className="flaticon-tutorials"></i> Efficient & Flexible</span></li>
                                <li><span><i className="flaticon-self-growth"></i> Lifetime Access</span></li>
                            </ul>

                            <Link href="/profile-authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> Join For Free <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
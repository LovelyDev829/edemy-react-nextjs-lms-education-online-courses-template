import React from 'react';
import Link from 'next/link';

const LifestyleCourses = () => {
    return (
        <div className="lifestyle-area bg-f6f7fb pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2 className="playfair-display-font">Inspring you to live a healthier lifestyle</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-lifestyle-box">
                            <div className="icon">
                                <i className="flaticon-diet"></i>
                            </div>

                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Nutrition Strategies</a>
                                </Link>
                            </h3>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="/courses-1">
                                <a className="link-btn">Start Now</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-lifestyle-box">
                            <div className="icon">
                                <i className="flaticon-vitamin-c"></i>
                            </div>
                     
                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Personal Program</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            
                            <Link href="/courses-1">
                                <a className="link-btn">Start Now</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-lifestyle-box">
                            <div className="icon">
                                <i className="flaticon-heart-rate-monitor"></i>
                            </div> 

                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Find Your Balance</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            
                            <Link href="/courses-1">
                                <a className="link-btn">Start Now</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LifestyleCourses;
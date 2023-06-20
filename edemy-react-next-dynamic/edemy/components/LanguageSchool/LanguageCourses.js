import React from 'react';
import Link from 'next/link';

const LanguageCourses = () => {
    return (
        <div className="courses-area pt-100 pb-70 bg-f5f7fa">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Welcome to eDemy</span>
                    <h2>Our Language Courses</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-language-courses-box">
                            <img src="/images/language-courses/language-courses1.png" alt="image" />
                            <h3>Chinese</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="/courses-1">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> View More <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-language-courses-box">
                            <img src="/images/language-courses/language-courses2.png" alt="image" />
                            <h3>Spanish</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            
                            <Link href="/courses-1">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> View More <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-language-courses-box">
                            <img src="/images/language-courses/language-courses3.png" alt="image" />
                            <h3>Japanese</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            
                            <Link href="/courses-1">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> View More <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageCourses;
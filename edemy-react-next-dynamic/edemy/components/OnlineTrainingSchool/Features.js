import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Education for everyone</span>
                    <h2>Online Coaching Lessons For Remote Learning</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box without-padding">
                            <div className="icon">
                                <i className="flaticon-brain-process"></i>
                            </div>
                            <h3>Learn the Latest Skills</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>

                            <Link href="/profile-authentication">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box without-padding">
                            <div className="icon">
                                <i className="flaticon-computer"></i>
                            </div>
                            <h3>Go at Your Own Pace</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            
                            <Link href="/profile-authentication">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-features-box without-padding">
                            <div className="icon">
                                <i className="flaticon-shield-1"></i>
                            </div>
                            <h3>Learn from Industry Experts</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            
                            <Link href="/profile-authentication">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
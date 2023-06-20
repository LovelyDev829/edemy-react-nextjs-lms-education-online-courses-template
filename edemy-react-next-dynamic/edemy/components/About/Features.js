import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="features-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Education for everyone</span>
                    <h2>Affordable Online Courses and Learning Opportunities​</h2>
                    <p>Finding your own space and utilize better learning options can result in faster than the traditional ways. Enjoy the beauty of eLearning!</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-brain-process"></i>
                            </div>
                            <h3>Learn the Latest Top Skills</h3>
                            <p>Learning top skills can bring an extra-ordinary outcome in a career.</p>

                            <Link href="/profile-authentication">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-computer"></i>
                            </div>
                            <h3>Learn in Your Own Pace</h3>
                            <p>Everyone prefers to enjoy learning at their own pace & that gives a great result.</p>
                           
                            <Link href="/profile-authentication">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-shield-1"></i>
                            </div>
                            <h3>Learn From Industry Experts</h3>
                            <p>Experienced teachers can assist in learning faster with their best approaches!</p>
                            
                            <Link href="/profile-authentication">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-world"></i>
                            </div>
                            <h3>Enjoy Learning From Anywhere</h3>
                            <p>We are delighted to give you options to enjoy learning from anywhere in the world.</p>
                            
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
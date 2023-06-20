import React from 'react';
import Link from 'next/link';

const AboutArea = () => {
    return (
        <div className="about-area-three ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="about-content-box">
                            <span className="sub-title">Distance Learning</span>
                            <h2>Build Your Skills Online, Anytime</h2>
                            <p>Want to learn and earn PDUs or CEUs on your schedule — anytime, anywhere? Or, pick up a new skill quickly like, project team leadership or agile? Browse our most popular online courses.</p>
                            <p><strong>Grow your knowledge and your opportunities with thought leadership, training and tools.</strong></p>

                            <Link href="/courses-4">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> View All Courses <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="about-img">
                            <div className="image">
                                <img src="/images/about-img7.png" alt="image" />
                                <img src="/images/about-img8.png" alt="image" />
                            </div>

                            <div className="shape17">
                                <img src="/images/shape16.png" alt="image" />
                            </div>
                            <div className="shape18">
                                <img src="/images/shape17.png" alt="image" />
                            </div>
                            <div className="shape19">
                                <img src="/images/shape18.png" alt="image" />
                            </div>
                            <div className="shape20">
                                <img src="/images/shape19.png" alt="image" />
                            </div>
                            <div className="shape21">
                                <img src="/images/shape20.png" alt="image" />
                            </div>
                            <div className="shape22">
                                <img src="/images/shape21.png" alt="image" />
                            </div>
                            <div className="shape23">
                                <img src="/images/shape22.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape3">
                <img src="/images/shape3.png" alt="image" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.png" alt="image" />
            </div>
        </div>
    )
}

export default AboutArea;
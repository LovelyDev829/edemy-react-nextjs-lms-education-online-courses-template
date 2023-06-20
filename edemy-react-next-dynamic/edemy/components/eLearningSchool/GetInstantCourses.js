import React from 'react';
import Link from 'next/link';

const GetInstantCourses = () => {
    return (
        <div className="get-instant-courses-area">
            <div className="container">
                <div className="get-instant-courses-inner-area">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="get-instant-courses-content">
                                <span className="sub-title">Get Instant Access to The Free</span>
                                <h2>Self Development Course</h2>
                                <p>eDemy Self Development Course can assist you in bringing the significant changes in personal understanding and reshaping the confidence to achieve the best from your career! We trust that learning should be enjoyable, and only that can make substantial changes to someone!</p>

                                <Link href="/profile-authentication">
                                    <a className="default-btn">
                                        <i className="flaticon-user"></i> Start For Free <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="get-instant-courses-image">
                                <img src="/images/man.jpg" alt="image" />
                                <div className="shape7">
                                    <img src="/images/shape4.png" alt="image" />
                                </div>
                                <div className="shape6">
                                    <img src="/images/shape6.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape5">
                        <img src="/images/shape5.png" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInstantCourses;
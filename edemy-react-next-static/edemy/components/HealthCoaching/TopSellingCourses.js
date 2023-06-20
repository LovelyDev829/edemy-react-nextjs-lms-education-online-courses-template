import React from 'react';
import Link from 'next/link';

const TopSellingCourses = () => {
    return (
        <div className="courses-area bg-image ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Learn At Your Own Pace</span>
                    <h2 className="playfair-display-font">Top Selling Courses</h2>
                    <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block image">
                                        <img src="/images/courses/health-img1.jpg" alt="image" />
                                    </a>
                                </Link>
                                <a href="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className="price bg-45a393 shadow">$39</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                    <span>Alex Morgan</span>
                                </div>
                                <h3 className="playfair-display-font">
                                    <Link href="/single-courses-1">
                                        <a>Diet And Nutrition Coach Certification</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block image">
                                        <img src="/images/courses/health-img2.jpg" alt="image" />
                                    </a>
                                </Link>
                                <a href="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className="price bg-45a393 shadow">$49</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                    <span>Sarah Taylor</span>
                                </div>
                                <h3 className="playfair-display-font">
                                    <Link href="/single-courses-1">
                                        <a>Internationally Accredited Diploma Certificate</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block image">
                                        <img src="/images/courses/health-img3.jpg" alt="image" />
                                    </a>
                                </Link>
                                <a href="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className="price bg-45a393 shadow">$59</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                    <span>David Warner</span>
                                </div>
                                <h3 className="playfair-display-font">
                                    <Link href="/single-courses-1">
                                        <a>Nutrition Certification Diet & Meal Panning</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="courses-info">
                            <p>Enjoy the top notch learning methods and achieve next level skills! You are the creator of your own career & we will guide you through that. <Link href="/profile-authentication"><a>Register Free Now!</a></Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSellingCourses;
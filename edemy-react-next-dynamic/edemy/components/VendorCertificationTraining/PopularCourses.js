import React from 'react';
import Link from 'next/link';

const PopularCourses = () => {
    return (
        <div className="courses-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Go at your own pace</span>
                    <h2>Popular Project Management Courses</h2>
                    <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box without-boxshadow">
                            <div className="courses-image">
                                <Link href="/single-courses-2">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses9.jpg" alt="image" />
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>

                                <div className="price shadow">$39</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                    <span>Alex Morgan</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>PRINCE2® Practitioner Certification Training</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 15 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 145 Students
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box without-boxshadow active">
                            <div className="courses-image">
                                <Link href="/single-courses-2">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses10.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>
                                <div className="price shadow">$49</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                    <span>Sarah Taylor</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>PMI-RMP® Certification Training</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 20 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 100 Students
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-courses-box without-boxshadow">
                            <div className="courses-image">
                                <Link href="/single-courses-2">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses11.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>
                                <div className="price shadow">$59</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>PRINCE2® Foundation Certification Training</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 20 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 150 Students
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="courses-info">
                            <Link href="/courses-2">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> View All Courses <span></span>
                                </a>
                            </Link>

                            <p>Get into details now?​ <Link href="/courses-2"><a>PM Master’s Program</a></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularCourses;
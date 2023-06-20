import React from 'react';
import Link from 'next/link';

const CoursesDetailsSidebarTwo = () => {
    return (
        <div className="courses-sidebar-sticky">
            <div className="courses-sidebar-information">
                <ul className="info">
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-teacher"></i> Instructor</span>
                            James Anderson
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-time"></i> Duration</span>
                            7 weeks
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-distance-learning"></i> Lessons</span>
                            25
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-web"></i> Enrolled</span>
                            255 students
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-html"></i> Language</span>
                            English
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-caption"></i> Video Subtitle</span>
                            English
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-lock"></i> Access</span>
                            Lifetime
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-quiz"></i> Quizzes</span>
                            Yes
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-certification"></i> Certificate</span>
                            Yes
                        </div>
                    </li>
                </ul>

                <div className="btn-box">
                    <Link href="#">
                        <a className="default-btn">
                            <i className="flaticon-shopping-cart"></i> Add to Cart <span></span>
                        </a>
                    </Link>
                </div>

                <div className="courses-share">
                    <div className="share-info">
                        <span>Share This Course <i className="flaticon-share"></i></span>

                        <ul className="social-link">
                            <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                            <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                            <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                            <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesDetailsSidebarTwo;
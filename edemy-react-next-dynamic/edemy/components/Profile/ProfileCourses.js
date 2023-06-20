import React from 'react';
import Link from 'next/link';

const ProfileCourses = () => {
    return (
        <div className="profile-courses pb-70">
            <h3 className="title">Courses</h3>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/courses1.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$39</div>
                        </div>

                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                <span>Alex Morgan</span>
                            </div>

                            <h3>
                                <Link href="/single-courses-1">
                                    <a>The Data Science Course 2020: Complete Data Science Bootcamp</a>
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
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/courses2.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$49</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                <span>Sarah Taylor</span>
                            </div>
                            
                            <h3>
                                <Link href="/single-courses-1">
                                    <a>Java Programming MasterclassName for Software Developers</a>
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

                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/courses3.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$59</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                <span>David Warner</span>
                            </div>
                        
                            <h3>
                                <Link href="/single-courses-1">
                                    <a>Deep Learning A-Z™: Hands-On Artificial Neural Networks</a>
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

                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/courses4.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$39</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user6.jpg" className="rounded-circle" alt="image" />
                                <span>Alex Morgan</span>
                            </div>
                    
                            <h3>
                                <Link href="/single-courses-1">
                                    <a>Python for Finance: Investment Fundamentals & Data Analytics</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
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
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/courses5.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$49</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user5.jpg" className="rounded-circle" alt="image" />
                                <span>Sarah Taylor</span>
                            </div>
        
                            <h3>
                                <Link href="/single-courses-1">
                                    <a>Machine Learning A-Z™: Hands-On Python & R In Data Science</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
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

                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/courses6.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$99</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user4.jpg" className="rounded-circle" alt="image" />
                                <span>James Anderson</span>
                            </div>
                        
                            <h3>
                                <Link href="/single-courses-1">
                                    <a>R Programming A-Z™: R For Data Science With Real Exercises!</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <i className='flaticon-agenda'></i> 44 Lessons
                                </li>
                                <li>
                                    <i className='flaticon-people'></i> 440 Students
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/courses10.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$39</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                <span>Alex Morgan</span>
                            </div>
                        
                            <h3>
                                <Link href="/single-courses-1">
                                    <a>Deep Learning The Numpy Stack in Python</a>
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
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/courses11.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$49</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                <span>Sarah Taylor</span>
                            </div>
                        
                            <h3>
                                <Link href="/single-courses-1">
                                    <a>Statistics for Data Science and Business Analysis</a>
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

                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/courses12.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$59</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                <span>David Warner</span>
                            </div>
                        
                            <h3>
                                <Link href="/single-courses-1">
                                    <a>Microsoft Excel - Excel from Beginner to Advanced</a>
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

                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/courses13.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$39</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user6.jpg" className="rounded-circle" alt="image" />
                                <span>Alex Morgan</span>
                            </div>

                            <h3>
                                <Link href="/single-courses-1">
                                    <a>Python Django Web Development: To-Do App</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
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
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/courses14.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$49</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user5.jpg" className="rounded-circle" alt="image" />
                                <span>Sarah Taylor</span>
                            </div>

                            <h3>
                                <Link href="/single-courses-1">
                                    <a>Oracle SQL Developer : Essentials, Tips and Tricks</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
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

                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/courses15.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$99</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user4.jpg" className="rounded-circle" alt="image" />
                                <span>James Anderson</span>
                            </div>

                            <h3>
                                <Link href="/single-courses-1">
                                    <a>Learning A-Z™: Hands-On Python In Data Science</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <i className='flaticon-agenda'></i> 44 Lessons
                                </li>
                                <li>
                                    <i className='flaticon-people'></i> 440 Students
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCourses;
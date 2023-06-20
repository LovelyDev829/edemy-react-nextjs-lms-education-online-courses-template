import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';

const CoursesGrid02 = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Courses Grid 02" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Courses Grid 02" 
            />  

            <div className="courses-area courses-section pt-100 pb-70">
                <div className="container">
                    <div className="edemy-grid-sorting row align-items-center">
                        <div className="col-lg-8 col-md-6 result-count">
                            <p>We found <span className="count">12</span> courses available for you</p>
                        </div>

                        <div className="col-lg-4 col-md-6 ordering">
                            <div className="select-box">
                                <select className="form-control">
                                    <option>Sort By</option>
                                    <option>Popularity</option>
                                    <option>Latest</option>
                                    <option>Price: low to high</option>
                                    <option>Price: high to low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box without-boxshadow">
                                <div className="courses-image">
                                    <Link href="#">
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
                                        <Link href="#">
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
                            <div className="single-courses-box without-boxshadow">
                                <div className="courses-image">
                                    <Link href="#">
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
                                        <Link href="#">
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
                            <div className="single-courses-box without-boxshadow">
                                <div className="courses-image">
                                    <Link href="#">
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
                                        <Link href="#">
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
                            <div className="single-courses-box without-boxshadow">
                                <div className="courses-image">
                                    <Link href="#">
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
                                        <Link href="#">
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
                            <div className="single-courses-box without-boxshadow">
                                <div className="courses-image">
                                    <Link href="#">
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
                                        <Link href="#">
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
                            <div className="single-courses-box without-boxshadow">
                                <div className="courses-image">
                                    <Link href="#">
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
                                        <Link href="#">
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

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box without-boxshadow">
                                <div className="courses-image">
                                    <Link href="#">
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
                                        <Link href="#">
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
                            <div className="single-courses-box without-boxshadow">
                                <div className="courses-image">
                                    <Link href="#">
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
                                        <Link href="#">
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
                            <div className="single-courses-box without-boxshadow">
                                <div className="courses-image">
                                    <Link href="#">
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
                                        <Link href="#">
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
                            <div className="single-courses-box without-boxshadow">
                                <div className="courses-image">
                                    <Link href="#">
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
                                        <Link href="#">
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
                            <div className="single-courses-box without-boxshadow">
                                <div className="courses-image">
                                    <Link href="#">
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
                                        <Link href="#">
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
                            <div className="single-courses-box without-boxshadow">
                                <div className="courses-image">
                                    <Link href="#">
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
                                        <Link href="#">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesGrid02;
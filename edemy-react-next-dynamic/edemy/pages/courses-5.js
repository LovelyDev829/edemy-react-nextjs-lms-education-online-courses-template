import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';

const CoursesList01 = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Courses List 01" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Courses List 01" 
            />  

            <div className="courses-area ptb-100 bg-f5f7fa">
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
                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small1.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav">
                                                <i className="flaticon-heart"></i>
                                            </a>
                                            <span className="price">$39</span>
                                            <h3>
                                                <Link href="#">
                                                    <a>Agile Crash Course: Agile Project Management</a>
                                                </Link>
                                            </h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
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
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small2.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav">
                                                <i className="flaticon-heart"></i>
                                            </a>
                                            <span className="price">$99</span>
                                            <h3>
                                                <Link href="#">
                                                    <a>Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)</a>
                                                </Link>
                                            </h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 14 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 100 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small3.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav">
                                                <i className="flaticon-heart"></i>
                                            </a>
                                            <span className="price">$49</span>
                                            <h3>
                                                <Link href="#">
                                                    <a>The Python Bible™ | Everything You Need to Program in Python</a>
                                                </Link>
                                            </h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 11 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 104 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small4.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$79</span>
                                            <h3>
                                                <Link href="#">
                                                    <a>Mathematical Foundation For Machine Learning and AI</a>
                                                </Link>
                                            </h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 14 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 100 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small5.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$59</span>
                                            <h3><a href="#">The Ultimate Drawing Course - Beginner to Advanced</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 09 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 150 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small6.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$89</span>
                                            <h3><a href="#">PyTorch: Deep Learning and Artificial Intelligence</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 20 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 200 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small7.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$39</span>
                                            <h3><a href="#">Data Visualization with Python and Matplotlib</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
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
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small8.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$99</span>
                                            <h3><a href="#">Static and Interactive Data Visualizations in R</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 14 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 100 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small9.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$49</span>
                                            <h3><a href="#">R for Data Science: Learn R Programming in 2 Hours</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 11 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 104 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small10.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$79</span>
                                            <h3><a href="#">Complete Python Developer in 2020: Zero to Mastery</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 14 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 100 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small1.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$59</span>
                                            <h3><a href="#">Python for Beginners with Examples</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 09 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 150 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="single-courses-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="courses-image">
                                            <img src="/images/courses-small/courses-small12.jpg" alt="image" />

                                            <Link href="#">
                                                <a className="link-btn"></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8">
                                        <div className="courses-content">
                                            <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                            <span className="price">$89</span>
                                            <h3><a href="#">Python Django Web Development: To-Do App</a></h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 20 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 200 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers">
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesList01;
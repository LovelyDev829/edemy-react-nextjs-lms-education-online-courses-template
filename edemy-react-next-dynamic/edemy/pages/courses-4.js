import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';

const CoursesGrid04 = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Courses Grid 04" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Courses Grid 04" 
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
                            <div className="single-courses-item-box">
                                <div className="courses-image">
                                    <a href="/single-courses-1" className="d-block image">
                                        <img src="/images/courses/courses12.jpg" alt="image" />
                                    </a>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$39</div>
                                </div>
                                <div className="courses-content">
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Agile Crash Course: Agile Project Management</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <div className="rating-total">
                                            5.0 (1 rating)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-item-box">
                                <div className="courses-image">
                                    <a href="/single-courses-1" className="d-block image">
                                        <img src="/images/courses/courses13.jpg" alt="image" />
                                    </a>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$59</div>
                                </div>
                                <div className="courses-content">
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <div className="rating-total">
                                            5.0 (2 rating)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-item-box">
                                <div className="courses-image">
                                    <a href="/single-courses-1" className="d-block image">
                                        <img src="/images/courses/courses14.jpg" alt="image" />
                                    </a>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$69</div>
                                </div>
                                <div className="courses-content">
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>The Python Bible™ | Everything You Need to Program in Python</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <div className="rating-total">
                                            5.0 (3 rating)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-item-box">
                                <div className="courses-image">
                                    <a href="/single-courses-1" className="d-block image">
                                        <img src="/images/courses/courses15.jpg" alt="image" />
                                    </a>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$79</div>
                                </div>
                                <div className="courses-content">
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Mathematical Foundation For Machine Learning and AI</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <div className="rating-total">
                                            5.0 (4 rating)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-item-box">
                                <div className="courses-image">
                                    <a href="/single-courses-1" className="d-block image">
                                        <img src="/images/courses/courses16.jpg" alt="image" />
                                    </a>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$89</div>
                                </div>
                                <div className="courses-content">
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>The Ultimate Drawing Course - Beginner to Advanced</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <div className="rating-total">
                                            5.0 (5 rating)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-item-box">
                                <div className="courses-image">
                                    <a href="/single-courses-1" className="d-block image">
                                        <img src="/images/courses/courses17.jpg" alt="image" />
                                    </a>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$99</div>
                                </div>
                                <div className="courses-content">
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>PyTorch: Deep Learning and Artificial Intelligence</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <div className="rating-total">
                                            5.0 (6 rating)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-item-box">
                                <div className="courses-image">
                                    <a href="/single-courses-1" className="d-block image">
                                        <img src="/images/courses/courses1.jpg" alt="image" />
                                    </a>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$39</div>
                                </div>
                                <div className="courses-content">
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Azure Machine Learning Certification- AZ AI100</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <div className="rating-total">
                                            5.0 (1 rating)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-item-box">
                                <div className="courses-image">
                                    <a href="/single-courses-1" className="d-block image">
                                        <img src="/images/courses/courses2.jpg" alt="image" />
                                    </a>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$59</div>
                                </div>
                                <div className="courses-content">
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Statistics for Data Science and Business Analysis</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <div className="rating-total">
                                            5.0 (2 rating)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-item-box">
                                <div className="courses-image">
                                    <a href="/single-courses-1" className="d-block image">
                                        <img src="/images/courses/courses3.jpg" alt="image" />
                                    </a>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$69</div>
                                </div>
                                <div className="courses-content">
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Data Science & Deep Learning for Business™ 20 Case Studies</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <div className="rating-total">
                                            5.0 (3 rating)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-item-box">
                                <div className="courses-image">
                                    <a href="/single-courses-1" className="d-block image">
                                        <img src="/images/courses/courses4.jpg" alt="image" />
                                    </a>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$79</div>
                                </div>
                                <div className="courses-content">
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Introduction to Machine Learning for Data Science</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <div className="rating-total">
                                            5.0 (4 rating)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-item-box">
                                <div className="courses-image">
                                    <a href="/single-courses-1" className="d-block image">
                                        <img src="/images/courses/courses5.jpg" alt="image" />
                                    </a>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$89</div>
                                </div>
                                <div className="courses-content">
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Microsoft Excel - Excel from Beginner to Advanced</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <div className="rating-total">
                                            5.0 (5 rating)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-item-box">
                                <div className="courses-image">
                                    <a href="/single-courses-1" className="d-block image">
                                        <img src="/images/courses/courses6.jpg" alt="image" />
                                    </a>
                                    <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$99</div>
                                </div>
                                <div className="courses-content">
                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Python Django Web Development: To-Do App</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <div className="rating-total">
                                            5.0 (6 rating)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesGrid04;
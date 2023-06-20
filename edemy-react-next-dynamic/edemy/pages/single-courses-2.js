import React from 'react';
import PageBanner from '@/components/SingleCoursesTwo/PageBanner';
import YouMightLikeTheCourses from '@/components/Courses/YouMightLikeTheCourses';
import CoursesDetailsSidebar from '@/components/SingleCoursesTwo/CoursesDetailsSidebar';
import Link from 'next/link';

const SingleCourses = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Python for Finance: Investment Fundamentals & Data Analytics" 
                homePageUrl="/" 
                homePageText="Home" 
                innerPageUrl="/courses-1" 
                innerPageText="Courses" 
                activePageText="Python for Finance: Investment Fundamentals & Data Analytics" 
            />  

            <div className="courses-details-area ptb-100">
                <div className="container">
                    <div className="courses-details-header">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="courses-title">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>
                                <div className="courses-meta">
                                    <ul>
                                        <li>
                                            <i className='bx bx-folder-open'></i>
                                            <span>Category</span>
                                            <Link href="#"><a>Photography</a></Link>
                                        </li>
                                        <li>
                                            <i className='bx bx-group'></i>
                                            <span>Students Enrolled</span>
                                            <Link href="#"><a>541,214</a></Link>
                                        </li>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            <span>Last Updated</span>
                                            <Link href="#"><a>01/14/2020</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="courses-price">
                                    <div className="courses-review">
                                        <div className="review-stars">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </div>
                                        <span className="reviews-total d-inline-block">(3 reviews)</span>
                                    </div>

                                    <div className="price">$150</div>

                                    <Link href="#">
                                        <a className="default-btn">
                                            <i className="flaticon-user"></i> Buy Course <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="courses-details-image-style-two text-center">
                                <img src="/images/courses/courses2.jpg" alt="image" />
                            </div>

                            <div className="courses-details-desc-style-two">
                                <h3>Description</h3>
                                <p><strong>Hi! Welcome to Photography Crash Course for Photographer, the only course you need to become a BI Analyst.</strong></p>
                                <p>Here are some more details of what you get with The Business Intelligence Analyst Course:</p>
                                <ul className="description-features-list">
                                    <li><strong>Introduction to Data and Data Science</strong> – Make sense of terms like business intelligence, traditional and big data, traditional statistical methods, machine learning, predictive analytics, supervised learning, unsupervised learning, reinforcement learning, and many more;</li>
                                    <li><strong>Database theory</strong> – Before you start using SQL, it is highly beneficial to learn about the underlying database theory and acquire an understanding of why databases are created and how they can help us manage data;</li>
                                    <li><strong>SQL</strong> – when you can work with SQL, it means you don’t have to rely on others sending you data and executing queries for you. You can do that on your own. This allows you to be independent and dig deeper into the data to obtain the answers to questions that might improve the way your company does its business;</li>
                                </ul>

                                <h3>Courses Video</h3>
                                <div className="courses-curriculum">
                                    <h3>Python Introduction</h3>
                                    <ul>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Python Introduction</span>
                                                <div className="courses-meta">
                                                    <span className="questions">5 questions</span>
                                                    <span className="duration">01 Hour</span>
                                                    <span className="status">Preview</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <h3>Stepping into the World of Python</h3>
                                    <ul>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">NumPy Introduction</span>
                                                <div className="courses-meta">
                                                    <span className="duration">15 Min</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">NumPy Getting Started</span>
                                                <div className="courses-meta">
                                                    <span className="duration">30 Min</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">NumPy Creating Arrays</span>
                                                <div className="courses-meta">
                                                    <span className="duration">45 Min</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">NumPy Array Indexing</span>
                                                <div className="courses-meta">
                                                    <span className="questions">4 questions</span>
                                                    <span className="duration">1 Hour</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">NumPy Array Slicing</span>
                                                <div className="courses-meta">
                                                    <span className="duration">1.5 Hour</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>

                                    <h3>Python MySQL</h3>
                                    <ul>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Python MySQL</span>
                                                <div className="courses-meta">
                                                    <span className="duration">01 Hour</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Python MySQL Create Database</span>
                                                <div className="courses-meta">
                                                    <span className="questions">3 questions</span>
                                                    <span className="duration">1.1 Hour</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Python MySQL Create Table</span>
                                                <div className="courses-meta">
                                                    <span className="duration">1.5 Hour</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <h3>What you'll learn</h3>
                                <div className="why-you-learn">
                                    <ul>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Become an expert in Statistics
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Boost your resume with skills
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Gather, organize, data
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Use data for improved
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Present information KPIs
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Perform quantitative
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Analyze current data
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Discover how to find trends
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Understand the fundamentals
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Use SQL to create, design
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <h3>Requirements</h3>
                                <ul className="requirements-list">
                                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</li>
                                    <li>The standard Lorem Ipsum passage, used since the 1500s.</li>
                                </ul>

                                <h3>Who this course is for:</h3>
                                <ul className="audience-list">
                                    <li>Beginners to programming and data science</li>
                                    <li>Students eager to learn about job opportunities in the field of data science</li>
                                    <li>Candidates willing to boost their resume by learning how to combine the knowledge of Statistics, SQL, and Tableau in a real-world working environment</li>
                                    <li>People interested in a Business Intelligence Analyst career</li>
                                </ul>

                                <h3>Meet Your Instructors</h3>
                                <div className="courses-author">
                                    <div className="author-profile-header"></div>
                                    <div className="author-profile">
                                        <div className="author-profile-title">
                                            <img src="/images/user1.jpg" className="shadow-sm rounded-circle" alt="image" />
                                            <div className="author-profile-title-details">
                                                <div className="author-profile-details">
                                                    <h4>James Anderson</h4>
                                                    <span className="d-block">Photographer, Author, Teacher</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p>James Anderson is a celebrated photographer, author, and teacher who brings passion to everything he does.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </div>
                                </div>

                                <div className="courses-reviews">
                                    <h3>Course Rating</h3>

                                    <div className="rating">
                                        <span className="bx bxs-star checked"></span>
                                        <span className="bx bxs-star checked"></span>
                                        <span className="bx bxs-star checked"></span>
                                        <span className="bx bxs-star checked"></span>
                                        <span className="bx bxs-star"></span>
                                    </div>

                                    <div className="rating-count">
                                        <span>4.1 average based on 4 reviews.</span>
                                    </div>

                                    <div className="row">
                                        <div className="side">
                                            <div>5 star</div>
                                        </div>
                                        <div className="middle">
                                            <div className="bar-container">
                                                <div className="bar-5"></div>
                                            </div>
                                        </div>
                                        <div className="side right">
                                            <div>02</div>
                                        </div>
                                        <div className="side">
                                            <div>4 star</div>
                                        </div>
                                        <div className="middle">
                                            <div className="bar-container">
                                                <div className="bar-4"></div>
                                            </div>
                                        </div>
                                        <div className="side right">
                                            <div>03</div>
                                        </div>
                                        <div className="side">
                                            <div>3 star</div>
                                        </div>
                                        <div className="middle">
                                            <div className="bar-container">
                                                <div className="bar-3"></div>
                                            </div>
                                        </div>
                                        <div className="side right">
                                            <div>04</div>
                                        </div>
                                        <div className="side">
                                            <div>2 star</div>
                                        </div>
                                        <div className="middle">
                                            <div className="bar-container">
                                                <div className="bar-2"></div>
                                            </div>
                                        </div>
                                        <div className="side right">
                                            <div>05</div>
                                        </div>
                                        <div className="side">
                                            <div>1 star</div>
                                        </div>
                                        <div className="middle">
                                            <div className="bar-container">
                                                <div className="bar-1"></div>
                                            </div>
                                        </div>
                                        <div className="side right">
                                            <div>00</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="courses-review-comments">
                                    <h3>3 Reviews</h3>
                                    <div className="user-review">
                                        <img src="/images/user1.jpg" alt="image" />
                                        
                                        <div className="review-rating">
                                            <div className="review-stars">
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                            </div>

                                            <span className="d-inline-block">James Anderson</span>
                                        </div>

                                        <span className="d-block sub-comment">Excellent</span>
                                        <p>Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.</p>
                                    </div>

                                    <div className="user-review">
                                        <img src="/images/user2.jpg" alt="image" />
                                        <div className="review-rating">
                                            <div className="review-stars">
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>

                                            <span className="d-inline-block">Sarah Taylor</span>
                                        </div>
                                        <span className="d-block sub-comment">Video Quality!</span>
                                        <p>Was really easy to implement and they quickly answer my additional questions!</p>
                                    </div>

                                    <div className="user-review">
                                        <img src="/images/user3.jpg" alt="image" />
                                        <div className="review-rating">
                                            <div className="review-stars">
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                            </div>
                                            <span className="d-inline-block">David Warner</span>
                                        </div>
                                        <span className="d-block sub-comment">Perfect Coding!</span>
                                        <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                    </div>

                                    <div className="user-review">
                                        <img src="/images/user4.jpg" alt="image" />
                                        <div className="review-rating">
                                            <div className="review-stars">
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <span className="d-inline-block">King Kong</span>
                                        </div>
                                        <span className="d-block sub-comment">Perfect Video!</span>
                                        <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <CoursesDetailsSidebar />
                        </div>
                    </div>
                </div>
            </div>
 
            <YouMightLikeTheCourses />
        </>
    )
}

export default SingleCourses;
import React from 'react';
import Link from 'next/link';

const MainBanner = ({ courses }) => {
    // console.log(courses)
    return (
        <div className="main-banner">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <h1>The World’s Leading Distance Learning Provider</h1>
                            <p>Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The eDemy can offer you to enjoy the beauty of eLearning!</p>

                            <Link href="/profile-authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> Join For Free <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-courses-list">
                            <div className="row">

                                {courses.map(course => (
                                    <div className="col-lg-6 col-md-6" key={course.id}>
                                        <div className="single-courses-box">
                                            <div className="courses-image">
                                                <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                                                    <a className="d-block image">
                                                        <img src={course.profilePhoto} alt={course.title} />
                                                    </a>
                                                </Link>

                                                <Link href="#">
                                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                                </Link>

                                                <div className="price shadow">${course.price}</div>
                                            </div>

                                            <div className="courses-content">
                                                <div className="course-author d-flex align-items-center">
                                                <img src={`${course.user.profilePhoto ? course.user.profilePhoto : "/images/user1.jpg"}`} className="rounded-circle" alt={course.user.name} />
                                                <span>{course.user.name}</span>
                                                </div>

                                                <h3>
                                                    <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                                                        <a>{course.title}</a>
                                                    </Link>
                                                </h3>

                                                <p>{course.overview.slice(0, 100)}</p>

                                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                                    <li>
                                                        <i className='flaticon-agenda'></i> {parseInt(course.lessons)} Lessons
                                                    </li>
                                                    <li>
                                                        <i className='flaticon-people'></i> {course.enroled_courses.length} Students
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            <div className="banner-shape1">
                                <img src="/images/banner-shape1.png" alt="image" />
                            </div>
                            <div className="banner-shape2">
                                <img src="/images/banner-shape2.png" alt="image" />
                            </div>
                            <div className="banner-shape3">
                                <img src="/images/banner-shape3.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;
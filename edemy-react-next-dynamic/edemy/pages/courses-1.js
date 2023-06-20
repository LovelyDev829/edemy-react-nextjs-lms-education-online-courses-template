import React from 'react'
import PageBanner from '@/components/Common/PageBanner'
import Link from 'next/link'
import axios from 'axios'
import baseUrl from '@/utils/baseUrl'

const CoursesGrid01 = ({ courses }) => {
    return (
        <>
            <PageBanner 
                pageTitle="Courses Grid 01" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Courses Grid 01" 
            />  

            <div className="courses-area courses-section pt-100 pb-70">
                <div className="container">
                    <div className="edemy-grid-sorting row align-items-center">
                        <div className="col-lg-8 col-md-6 result-count">
                            <p>We found <span className="count">{courses.length}</span> courses available for you</p>
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

                        {courses ? courses.map(course => (
                            <div className="col-lg-4 col-md-6" key={course.id}>
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

                                        <h3 title={course.title}>
                                            <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                                                <a>{course.title.slice(0, 20)}...</a>
                                            </Link>
                                        </h3>
                                        
                                        <p>{course.overview.slice(0, 100)}...</p>

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
                        )) : (
                            <h2>Empty</h2>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

CoursesGrid01.getInitialProps = async () => {
    const url = `${baseUrl}/api/v1/courses/homepage-courses`
    const response = await axios.get(url)
    // console.log(response)
    return response.data
}

export default CoursesGrid01
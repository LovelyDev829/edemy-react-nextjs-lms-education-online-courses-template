import React from 'react'
import PageBanner from '@/components/Common/PageBanner'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import axios from 'axios'
import baseUrl from '@/utils/baseUrl'

const MyCourses = ({enrolled}) => {
    console.log(enrolled)
    return (
        <>
            <PageBanner 
                pageTitle="My Courses" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="My Courses" 
            />  

            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {enrolled.length > 0 ? enrolled.map(enrolledCourse => (
                            <div className="col-lg-4 col-md-6" key={enrolledCourse.id}>
                                <div className="single-courses-box">
                                    <div className="courses-image">
                                        <Link href="/single-courses-1">
                                            <a className="d-block image">
                                                <img src={enrolledCourse.course.profilePhoto} alt={enrolledCourse.course.title} />
                                            </a>
                                        </Link>

                                        <Link href="#">
                                            <a className="fav"><i className="flaticon-heart"></i></a>
                                        </Link>

                                        <div className="price shadow">${enrolledCourse.course.price}</div>
                                    </div>

                                    <div className="courses-content">
                                        <div className="course-author d-flex align-items-center">
                                            <img src={`${enrolledCourse.user.profilePhoto ? enrolledCourse.user.profilePhoto : "/images/user1.jpg"}`} className="rounded-circle" alt={enrolledCourse.user.name} />
                                            <span>{enrolledCourse.user.name}</span>
                                        </div>

                                        <h3>
                                            <Link href="/my-courses/view/[id]" as={`/my-courses/view/${enrolledCourse.course.id}`}>
                                                <a>{enrolledCourse.course.title}</a>
                                            </Link>
                                        </h3>

                                        <p>{enrolledCourse.course.overview.slice(0, 100)}</p>

                                        <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                            <li>
                                                <i className='flaticon-agenda'></i> {parseInt(enrolledCourse.course.lessons)} Lessons
                                            </li>
                                            <li>
                                                <i className='flaticon-people'></i> {enrolledCourse.course.duration}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="col-lg-12">
                                <h2 className="empty-content">Empty</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

MyCourses.getInitialProps = async ctx => {
    const { token } = parseCookies(ctx)
    if(!token){
        return {enrolled: []}
    }

    const payload = {
        headers: {Authorization: token}
    }

    const url = `${baseUrl}/api/v1/courses/enrolled`
    const response = await axios.get(url, payload)
    // console.log(response.data)
    return response.data
}

export default MyCourses
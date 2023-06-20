import React from 'react'
import PageBanner from '@/components/Common/PageBanner'
import axios from 'axios'
import baseUrl from '@/utils/baseUrl'
import CourseCard from '@/components/Courses/CourseCard'

const Index = ({ courses }) => {
    // console.log(courses)
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
                            <p>We found <span className="count">12</span> courses available for you</p>
                        </div>

                        <div className="col-lg-4 col-md-6 ordering">
                            <div className="select-box">
                                <select className="form-select">
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

                        {courses.length ? courses.map(course => (
                            <CourseCard {...course} key={course.id} />
                        )) : (
                            <h1>Not Found</h1>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

Index.getInitialProps = async () => {
    const url = `${baseUrl}/api/v1/courses`
    const response = await axios.get(url)
    // console.log(response)
    return response.data
}

export default Index;
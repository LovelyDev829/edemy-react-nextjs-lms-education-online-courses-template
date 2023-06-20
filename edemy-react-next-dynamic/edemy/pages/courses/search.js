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
                pageTitle="Search" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Search" 
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

Index.getInitialProps = async (ctx) => {
    const {q} = ctx.query
    const payload = {
        params: {
            keyword: q
        }
    }
    const url = `${baseUrl}/api/v1/courses/search`
    const response = await axios.get(url, payload)
    // console.log(response)
    return response.data
}

export default Index;
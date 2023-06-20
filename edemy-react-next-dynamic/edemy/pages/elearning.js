import React from 'react'
import MainBanner from '@/components/eLearningSchool/MainBanner'
import Partner from '@/components/eLearningSchool/Partner'
import Features from '@/components/eLearningSchool/Features'
import AboutUs from '@/components/eLearningSchool/AboutUs'
import PopularCourses from '@/components/eLearningSchool/PopularCourses'
import FeedbackSliderWithFunFacts from '@/components/eLearningSchool/FeedbackSliderWithFunFacts'
import GetInstantCourses from '@/components/eLearningSchool/GetInstantCourses'
import LatestNews from '@/components/Common/LatestNews'
import ViewAllCourses from '@/components/eLearningSchool/ViewAllCourses'
import AffordableCertification from '@/components/eLearningSchool/AffordableCertification'
import axios from 'axios'
import baseUrl from '@/utils/baseUrl'

const index = ({ courses }) => {
    // console.log(courses)
    return (
        <>
            <MainBanner courses={courses.slice(0, 2)} />
            <Partner />
            <Features />
            <AboutUs />
            <PopularCourses courses={courses} />
            <FeedbackSliderWithFunFacts />
            <GetInstantCourses />
            <LatestNews />
            <ViewAllCourses />
            <AffordableCertification />
        </>
    )
}

index.getInitialProps = async () => {
    const url = `${baseUrl}/api/v1/courses/homepage-courses`
    const response = await axios.get(url)
    // console.log(response)
    return response.data
}

export default index
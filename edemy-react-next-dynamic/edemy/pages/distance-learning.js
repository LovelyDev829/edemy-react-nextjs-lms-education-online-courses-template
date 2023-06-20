import React from 'react';
import MainBanner from '../components/DistanceLearning/MainBanner';
import Features from '../components/DistanceLearning/Features';
import CoursesArea from '../components/DistanceLearning/CoursesArea';
import AboutArea from '../components/DistanceLearning/AboutArea';
import FunFactsThree from '../components/Common/FunFactsThree';
import PopularCourses from '../components/DistanceLearning/PopularCourses';
import FeedbackSlider from '../components/DistanceLearning/FeedbackSlider';
import CourseAdvisor from '../components/DistanceLearning/CourseAdvisor';
import GetPremiumAccess from '../components/DistanceLearning/GetPremiumAccess';
import PartnerStyleTwo from '../components/Common/PartnerStyleTwo';
import LatestNews from '../components/DistanceLearning/LatestNews';
import SubscribeForm from '../components/Common/SubscribeForm';

const DistanceLearning = () => {
    return (
        <>
            <MainBanner />
            <Features />
            <CoursesArea />
            <AboutArea />
            <FunFactsThree />
            <PopularCourses />
            <FeedbackSlider />
            <CourseAdvisor />
            <GetPremiumAccess />
            <PartnerStyleTwo />
            <LatestNews />
            <SubscribeForm />
        </>
    )
}

export default DistanceLearning;
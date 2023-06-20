import React from 'react';
import MainBanner from '../components/OnlineTrainingSchool/MainBanner';
import CoursesArea from '../components/OnlineTrainingSchool/CoursesArea';
import Features from '../components/OnlineTrainingSchool/Features';
import AboutArea from '../components/OnlineTrainingSchool/AboutArea';
import FeedbackSlider from '../components/OnlineTrainingSchool/FeedbackSlider';
import TopCategories from '../components/OnlineTrainingSchool/TopCategories';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import CourseAdvisor from '../components/OnlineTrainingSchool/CourseAdvisor';
import PremiumAccess from '../components/OnlineTrainingSchool/PremiumAccess';
import LatestNewsTwo from '../components/Common/LatestNewsTwo';
import SubscribeForm from '../components/Common/SubscribeForm';
import Partner from '../components/Common/Partner';

const OnlineTraining = () => {
    return (
        <>
            <MainBanner />
            <CoursesArea />
            <Features />
            <AboutArea />
            <FeedbackSlider />
            <TopCategories />
            <FunFactsTwo />
            <CourseAdvisor />
            <PremiumAccess />
            <LatestNewsTwo />
            <SubscribeForm />
            <Partner />
        </>
    )
}

export default OnlineTraining;
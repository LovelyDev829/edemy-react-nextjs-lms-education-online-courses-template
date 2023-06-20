import React from 'react';
import MainBanner from '../components/YogaTraining/MainBanner'; 
import YogaTraining from '../components/YogaTraining/YogaTraining';
import AboutUs from '../components/YogaTraining/AboutUs';
import Courses from '../components/YogaTraining/Courses';
import FeedbackSlider from '../components/YogaTraining/FeedbackSlider';
import JoinOurYogaTraining from '../components/YogaTraining/JoinOurYogaTraining';
import FunFacts from '../components/YogaTraining/FunFacts';
import DownloadCoursesSyllabus from '../components/YogaTraining/DownloadCoursesSyllabus';
import Pricing from '../components/YogaTraining/Pricing';
import LatestBlog from '../components/YogaTraining/LatestBlog';
import Subscribe from '../components/YogaTraining/Subscribe';
import Partner from '../components/YogaTraining/Partner';

const YogaTrainingHome = () => {
    return (
        <>
            <MainBanner />
            <YogaTraining />
            <AboutUs />
            <Courses />
            <FeedbackSlider />
            <JoinOurYogaTraining />
            <FunFacts />
            <DownloadCoursesSyllabus />
            <Pricing />
            <LatestBlog />
            <Subscribe />
            <Partner />
        </>
    )
}

export default YogaTrainingHome;
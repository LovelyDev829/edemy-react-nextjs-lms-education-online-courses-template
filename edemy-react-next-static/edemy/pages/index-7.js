import React from 'react';
import Navbar from '../components/_App/Navbar';
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
import Footer from '../components/_App/Footer';

const Index7 = () => {
    return (
        <>
            <Navbar />
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
            <Footer />
        </>
    )
}

export default Index7;
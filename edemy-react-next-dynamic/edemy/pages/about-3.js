import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Features from '../components/Common/Features';
import AboutUsContentThree from '../components/About/AboutUsContentThree';
import FeedbackSlider from '../components/OnlineTrainingSchool/FeedbackSlider';
import CoursesAreaStyleTwo from '../components/Common/CoursesAreaStyleTwo';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import PremiumAccessTwo from '../components/Common/PremiumAccessTwo';

const About3 = () => {
    return (
        <>
            <PageBanner 
                pageTitle="About Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About Us" 
            />  
            <Features />
            <AboutUsContentThree />
            <FeedbackSlider />
            <CoursesAreaStyleTwo />
            <FunFactsTwo />

            <div className="ptb-100">
                <PremiumAccessTwo />
            </div>
        </>
    )
}

export default About3;
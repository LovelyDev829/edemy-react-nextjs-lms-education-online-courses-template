import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContentTwo from '../components/About/AboutUsContentTwo';
import FunFacts from '../components/Common/FunFacts';
import Testimonials from '../components/Common/Testimonials';
import CourseAdvisor from '../components/Common/CourseAdvisor';
import Partner from '../components/Common/Partner';

const About2 = () => {
    return (
        <>
            <PageBanner 
                pageTitle="About Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About Us" 
            />  
            <AboutUsContentTwo />
            <FunFacts />
            <Testimonials />
            <CourseAdvisor />
            <Partner />
        </>
    )
}

export default About2;
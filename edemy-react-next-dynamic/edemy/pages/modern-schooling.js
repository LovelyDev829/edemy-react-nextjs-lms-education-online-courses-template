import React from 'react';
import MainBanner from '../components/ModernSchooling/MainBanner'; 
import FeaturedCourses from '../components/ModernSchooling/FeaturedCourses';
import AboutUs from '../components/ModernSchooling/AboutUs';
import Courses from '../components/ModernSchooling/Courses';
import FeedbackSlider from '../components/ModernSchooling/FeedbackSlider';
import TopCategories from '../components/ModernSchooling/TopCategories';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import DistanceLearning from '../components/ModernSchooling/DistanceLearning';
import UpcomingEvents from '../components/ModernSchooling/UpcomingEvents';
import SubscribeForm from '../components/ModernSchooling/SubscribeForm';
import Partner from '../components/ModernSchooling/Partner';

const ModernSchooling = () => {
    return (
        <>
            <MainBanner />
            <FeaturedCourses />
            <AboutUs />
            <Courses />
            <FeedbackSlider />
            <TopCategories />
            <FunFactsTwo />
            <DistanceLearning />
            <UpcomingEvents />
            <SubscribeForm />
            <Partner />
        </>
    )
}

export default ModernSchooling;
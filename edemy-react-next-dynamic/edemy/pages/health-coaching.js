import React from 'react';
import MainBanner from '../components/HealthCoaching/MainBanner'; 
import LifestyleCourses from '../components/HealthCoaching/LifestyleCourses';
import ChooseProgram from '../components/HealthCoaching/ChooseProgram';
import HealthServices from '../components/HealthCoaching/HealthServices';
import AboutUs from '../components/HealthCoaching/AboutUs';
import TopSellingCourses from '../components/HealthCoaching/TopSellingCourses';
import Feedback from '../components/HealthCoaching/Feedback';
import UpcomingEvents from '../components/HealthCoaching/UpcomingEvents';
import LatestBlog from '../components/HealthCoaching/LatestBlog';
import SubscribeForm from '../components/HealthCoaching/SubscribeForm';
 
const HealthCoaching = () => {
    return (
        <>
            <MainBanner />
            <LifestyleCourses />
            <ChooseProgram />
            <HealthServices />
            <AboutUs />
            <TopSellingCourses />
            <Feedback />
            <UpcomingEvents />
            <LatestBlog />
            <SubscribeForm />
        </>
    )
}

export default HealthCoaching;
import React from 'react';
import MainBanner from '../components/VendorCertificationTraining/MainBanner';
import Partner from '../components/VendorCertificationTraining/Partner';
import SloganArea from '../components/VendorCertificationTraining/SloganArea';
import PopularCourses from '../components/VendorCertificationTraining/PopularCourses';
import AboutArea from '../components/VendorCertificationTraining/AboutArea';
import FunFacts from '../components/Common/FunFacts';
import PopularCoursesTwo from '../components/VendorCertificationTraining/PopularCoursesTwo';
import CourseAdvisor from '../components/VendorCertificationTraining/CourseAdvisor';
import PremiumAccess from '../components/VendorCertificationTraining/PremiumAccess';
import Testimonials from '../components/Common/Testimonials';
import ViewAllCourses from '../components/VendorCertificationTraining/ViewAllCourses';
import LatestNews from '../components/Common/LatestNews';
import SubscribeForm from '../components/Common/SubscribeForm';

const VendorCertification = () => {
    return (
        <>
            <MainBanner />
            <Partner />
            <SloganArea />
            <PopularCourses />
            <AboutArea /> 
            <FunFacts />
            <PopularCoursesTwo />
            <CourseAdvisor /> 
            <PremiumAccess />
            <Testimonials />
            <ViewAllCourses />
            <LatestNews />
            <SubscribeForm />
        </>
    )
}

export default VendorCertification;
import React from 'react';
import MainBanner from '../components/LanguageSchool/MainBanner';
import LanguageCourses from '../components/LanguageSchool/LanguageCourses';
import WhyChooseUs from '../components/LanguageSchool/WhyChooseUs';
import FeedbackSlider from '../components/LanguageSchool/FeedbackSlider';
import TopSellingCourses from '../components/LanguageSchool/TopSellingCourses';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import HowToApply from '../components/LanguageSchool/HowToApply';
import SignUpForm from '../components/LanguageSchool/SignUpForm';
import UpcomingEvents from '../components/LanguageSchool/UpcomingEvents';
import Partner from '../components/LanguageSchool/Partner';
import SubscribeForm from '../components/Common/SubscribeForm';

const LanguageSchool = () => {
    return (
        <>
            <MainBanner />
            <LanguageCourses />
            <WhyChooseUs />
            <FeedbackSlider />
            <TopSellingCourses />
            <FunFactsTwo />
            <HowToApply />
            <SignUpForm />
            <UpcomingEvents />
            <SubscribeForm />
            <Partner />
        </>
    )
}

export default LanguageSchool;
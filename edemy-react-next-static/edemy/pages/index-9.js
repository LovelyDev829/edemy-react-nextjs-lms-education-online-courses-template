import React from 'react';
import Navbar from '../components/_App/Navbar';

import Footer from '../components/_App/Footer';

import MainBanner from '../components/Kindergaten/MainBanner';
import AboutUs from '../components/Kindergaten/AboutUs';
import OurServices from '../components/Kindergaten/OurServices';
import TopSellingCourses from '../components/Kindergaten/TopSellingCourses';
import FeedbackSlider from '../components/Kindergaten/FeedbackSlider';
import SelectedAgesArea from '../components/Kindergaten/SelectedAgesArea';
import UpcomingEvents from '../components/Kindergaten/UpcomingEvents';
import LatestBlog from '../components/Kindergaten/LatestBlog';
import SubscribeForm from '../components/Kindergaten/SubscribeForm';
 
const Index9 = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <AboutUs />
            <OurServices />
            <TopSellingCourses />
            <FeedbackSlider />
            <SelectedAgesArea />
            <UpcomingEvents />
            <LatestBlog />
            <SubscribeForm />
            <Footer />
        </>
    )
}

export default Index9;
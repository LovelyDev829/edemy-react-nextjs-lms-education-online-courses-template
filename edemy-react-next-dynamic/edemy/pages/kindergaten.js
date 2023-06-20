import React from 'react';
import MainBanner from '../components/Kindergaten/MainBanner';
import AboutUs from '../components/Kindergaten/AboutUs';
import OurServices from '../components/Kindergaten/OurServices';
import TopSellingCourses from '../components/Kindergaten/TopSellingCourses';
import FeedbackSlider from '../components/Kindergaten/FeedbackSlider';
import SelectedAgesArea from '../components/Kindergaten/SelectedAgesArea';
import UpcomingEvents from '../components/Kindergaten/UpcomingEvents';
import LatestBlog from '../components/Kindergaten/LatestBlog';
import SubscribeForm from '../components/Kindergaten/SubscribeForm';
 
const Kindergaten = () => {
    return (
        <>
            <MainBanner />
            <AboutUs />
            <OurServices />
            <TopSellingCourses />
            <FeedbackSlider />
            <SelectedAgesArea />
            <UpcomingEvents />
            <LatestBlog />
            <SubscribeForm />
        </>
    )
}

export default Kindergaten;
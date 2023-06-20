import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutUs from "../components/About/AboutUs";
import FeedbackSliderWithFunFacts from "../components/About/FeedbackSliderWithFunFacts";
import Features from "../components/About/Features";
import CourseAdvisor from "../components/Common/CourseAdvisor";
import Partner from "../components/Common/Partner";
import PremiumAccess from "../components/Common/PremiumAccess";
import Footer from "../components/_App/Footer";

const About1 = () => {
	return (
		<>
			<Navbar />
			<PageBanner
				pageTitle="About Us"
				homePageUrl="/"
				homePageText="Home"
				activePageText="About Us"
			/>
			<AboutUs />
			<FeedbackSliderWithFunFacts />
			<Features />
			<CourseAdvisor />
			<PremiumAccess />
			<Partner />
			<Footer />
		</>
	);
};

export default About1;

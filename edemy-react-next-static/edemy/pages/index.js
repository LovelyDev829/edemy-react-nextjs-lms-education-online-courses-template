import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/eLearningSchool/MainBanner";
import Partner from "../components/eLearningSchool/Partner";
import Features from "../components/eLearningSchool/Features";
import AboutUs from "../components/eLearningSchool/AboutUs";
import PopularCourses from "../components/eLearningSchool/PopularCourses";
import FeedbackSliderWithFunFacts from "../components/eLearningSchool/FeedbackSliderWithFunFacts";
import GetInstantCourses from "../components/eLearningSchool/GetInstantCourses";
import LatestNews from "../components/Common/LatestNews";
import ViewAllCourses from "../components/eLearningSchool/ViewAllCourses";
import AffordableCertification from "../components/eLearningSchool/AffordableCertification";
import Footer from "../components/_App/Footer";

const Index = () => {
	return (
		<>
			<Navbar />
			<MainBanner />
			<Partner />
			<Features />
			<AboutUs />
			<PopularCourses />
			<FeedbackSliderWithFunFacts />
			<GetInstantCourses />
			<LatestNews />
			<ViewAllCourses />
			<AffordableCertification />
			<Footer />
		</>
	);
};

export default Index;

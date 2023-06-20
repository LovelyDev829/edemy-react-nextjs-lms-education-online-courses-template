import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import PremiumAccessTwo from '../components/Common/PremiumAccessTwo';
import FunFactsThree from '../components/Common/FunFactsThree';
import ApplyAsInstructor from '../components/BecomeATeacher/ApplyAsInstructor';
import RegisterForm from '../components/BecomeATeacher/RegisterForm';

const BecomeATeacher = ({ user }) => {
    return (
        <>
            <PageBanner 
                pageTitle="Become A Teacher" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Become A Teacher" 
            />  

            <div className="ptb-100">
                <PremiumAccessTwo />
            </div>

            <FunFactsThree />

            <ApplyAsInstructor />

            <RegisterForm user={user} />
        </>
    )
}

export default BecomeATeacher;
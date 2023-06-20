import React from 'react'
import PageBanner from '../components/Common/PageBanner'
import LoginForm from '../components/Authentication/LoginForm'
import RegisterForm from '../components/Authentication/RegisterForm'

const Authentication = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Authentication" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Authentication" 
            />  

            <div className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <LoginForm />
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Authentication;
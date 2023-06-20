import React from 'react';
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';

const MyProfile = () => {
    return (
        <>
            <PageBanner 
                pageTitle="My Profile" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="My Profile" 
            />  

            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-profile">
                                <img src="/images/success-people/success-people3.jpg" />
                                <h3>Jones Taylor</h3>
                                <p>jonestaylor@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="user-profile-table">
                                <div className="table-responsive">
                                    <table className="table table-bordered vertical-align-top">
                                        <tbody>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile;
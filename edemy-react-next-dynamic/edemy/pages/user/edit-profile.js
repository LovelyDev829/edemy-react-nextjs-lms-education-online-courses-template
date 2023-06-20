import React from 'react';
import PageBanner from '@/components/Common/PageBanner';

const EditProfile = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Edit Profile" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Edit Profile" 
            />  

            <div className="ptb-100">
                <div className="container">
                    <div className="border-box">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" id="email" />
                            </div> 

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" id="email" />
                            </div>

                            <button type="submit" className="default-btn mt-10">
                                <i className='flaticon-right-chevron'></i> Update

                                <span></span>
                            </button> 
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile;
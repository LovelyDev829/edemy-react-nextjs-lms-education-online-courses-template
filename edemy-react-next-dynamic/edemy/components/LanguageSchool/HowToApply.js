import React from 'react';

const HowToApply = () => {
    return (
        <div className="information-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="information-content">
                            <span className="sub-title">Information</span>
                            <h2>How To Apply?</h2>

                            <ul className="apply-details">
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-checkmark"></i>
                                    </div>
                                    <h3>Select Suitable Course</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="flaticon-webinar"></i>
                                    </div>
                                    <h3>Student Information</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </li>
                                
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-credit-card-1"></i>
                                    </div>
                                    <h3>Payment Information</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </li>
                                
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-verify"></i>
                                    </div>
                                    <h3>Register Now</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="information-image text-center">
                            <img src="/images/information-img.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToApply;
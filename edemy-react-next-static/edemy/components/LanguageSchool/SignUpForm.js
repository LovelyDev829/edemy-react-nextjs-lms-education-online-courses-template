import React from 'react';

const SignUpForm = () => {
    return (
        <div className="free-trial-area ptb-100 bg-fffaf3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="free-trial-image text-center">
                            <img src="/images/free-trial-img.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="free-trial-form">
                            <span className="sub-title">Free Trial</span>
                            <h2>Sign Up For A Free Trial</h2>

                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name *" />
                                </div>

                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email *" />
                                </div>
                                
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Phone *" />
                                </div>
                                
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Subject *" />
                                </div>

                                <button type="submit">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;
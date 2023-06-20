import React from 'react';

const SubscribeForm = () => {
    return (
        <div className="subscribe-area bg-eee8df ptb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="subscribe-image">
                            <img src="/images/subscribe-img3.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="subscribe-content text-left">
                            <h2 className="font-weight-black">Subscribe To Our Newsletter</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <form className="newsletter-form">
                                <input type="text" className="input-newsletter" placeholder="Enter your email address" name="EMAIL" required />
                                <button type="submit" className="default-btn">
                                    <i className="flaticon-user"></i> Subscribe Now <span></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kindergarten-shape19"><img src="/images/kindergarten-shape/k-shape19.png" alt="image" /></div>
            <div className="kindergarten-shape20"><img src="/images/kindergarten-shape/k-shape20.png" alt="image" /></div>
        </div>
    )
}

export default SubscribeForm;
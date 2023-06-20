import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="kindergarten-about-image">
                            <div className="main-image">
                                <img src="/images/kindergarten-about-img1.png" alt="image" />
                                <img src="/images/kindergarten-about-img2.png" alt="image" />
                            </div>
                            <div className="shape">
                                <img src="/images/kite1.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">About Us</span>
                            <h2 className="font-weight-black">We are Kindergarten & Childhood is our Passion</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                            <ul className="about-list">
                                <li><span><i className='bx bx-check'></i> Transportation</span></li>
                                <li><span><i className='bx bx-check'></i> Outdoor Games</span></li>
                                <li><span><i className='bx bx-check'></i> Nutritious Food</span></li>
                                <li><span><i className='bx bx-check'></i> Best Care</span></li>
                            </ul>

                            <Link href="/about-5" >
                                <a className="default-btn-style-two">
                                    <i className="flaticon-user"></i> More About Us
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kindergarten-shape7">
                <img src="/images/kindergarten-shape/k-shape7.png" alt="image" />
            </div>
            <div className="kindergarten-shape8">
                <img src="/images/kindergarten-shape/k-shape8.png" alt="image" />
            </div>
        </div>
    )
}

export default AboutUs;
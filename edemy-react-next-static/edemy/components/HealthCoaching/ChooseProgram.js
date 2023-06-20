import React from 'react';
import Link from 'next/link';

const ChooseProgram = () => {
    return (
        <div className="program-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="program-section-title">
                            <h2 className="playfair-display-font">Choose Your Program Bellow to See How We Can Help</h2>
                            <p>eDemy training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classNamees virtually by sitting in your comfort zone. Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills.</p>

                            <Link href="/profile-authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> Get Started Now <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="program-list">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-program-box">
                                        <div className="shape">
                                            <img src="/images/list-shape1.png" alt="image" />
                                        </div>

                                        <div className="icon">
                                            <i className="flaticon-diet"></i>
                                        </div>

                                        <h3 className="playfair-display-font">
                                            <Link href="/about-1">
                                                <a>Certification Courses</a>
                                            </Link>
                                        </h3>

                                        <p>Lorem ipsum dolor sit amet ut, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                        <Link href="#">
                                            <a className="link-btn">Read More</a>
                                        </Link>
                                    </div>

                                    <div className="single-program-box">
                                        <div className="shape">
                                            <img src="/images/list-shape2.png" alt="image" />
                                        </div>

                                        <div className="icon">
                                            <i className="flaticon-healthy-food"></i>
                                        </div>
 
                                        <h3 className="playfair-display-font">
                                            <Link href="/about-1">
                                                <a>Mens’s Coaching</a>
                                            </Link>
                                        </h3>
                                        
                                        <p>Lorem ipsum dolor sit amet ut, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        
                                        <Link href="#">
                                            <a className="link-btn">Read More</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-program-box">
                                        <div className="shape">
                                            <img src="/images/list-shape3.png" alt="image" />
                                        </div>

                                        <div className="icon">
                                            <i className="flaticon-pineapple"></i>
                                        </div>
 
                                        <h3 className="playfair-display-font">
                                            <Link href="/about-1">
                                                <a>Women’s Coaching</a>
                                            </Link>
                                        </h3>

                                        <p>Lorem ipsum dolor sit amet ut, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        
                                        <Link href="#">
                                            <a className="link-btn">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="program-circle-shape">
                                <img src="/images/circle-shape.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseProgram;
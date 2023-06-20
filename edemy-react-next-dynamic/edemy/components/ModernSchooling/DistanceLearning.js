import React from 'react';
import Link from 'next/link';

const DistanceLearning = () => {
    return (
        <div className="overview-area ptb-100">
            <div className="container">
                <div className="overview-box">
                    <div className="overview-content">
                        <span className="sub-title">Distance Learning</span>
                        <h2>Feel Like You Are Attending Your classNamees Physically!</h2>
                        <p>eCademy training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classNamees virtually by sitting in your comfort zone. Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills.</p>

                        <Link href="#">
                            <a className="default-btn">
                                <i className="flaticon-user"></i> Get Started Now <span></span>
                            </a>
                        </Link>
                    </div>

                    <div className="overview-image">
                        <img src="/images/overview-img1.png" alt="image" />
                    </div>
                </div>

                <div className="overview-box">
                    <div className="overview-image">
                        <img src="/images/overview-img2.png" alt="image" />
                    </div>

                    <div className="overview-content">
                        <span className="sub-title">eCademy Mobile App</span>
                        <h2>Access From Your Mobile, Learn Any Time Any Where</h2>
                        <p>eCademy training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classNamees virtually by sitting in your comfort zone. Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills.</p>

                        <div className="btn-box">
                            <Link href="#">
                                <a className="playstore-btn">
                                    <img src="/images/playstore.png" alt="image" />
                                    GET IT ON
                                    <span>Google Play</span>
                                </a>
                            </Link>
                            
                            <Link href="#">
                                <a className="applestore-btn">
                                    <img src="/images/applestore.png" alt="image" />
                                    GET IT ON
                                    <span>Apple Store</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape2">
                <img src="/images/shape2.png" alt="image" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.png" alt="image" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.png" alt="image" />
            </div>
            <div className="shape9">
                <img src="/images/shape8.svg" alt="image" />
            </div>
        </div>
    )
}

export default DistanceLearning;
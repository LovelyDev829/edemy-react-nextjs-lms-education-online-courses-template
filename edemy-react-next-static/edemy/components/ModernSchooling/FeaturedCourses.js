import React from 'react';
import Link from 'next/link';

const FeaturedCourses = () => {
    return (
        <div className="boxes-area boxes-style-two bg-f5f7fa">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-box-item">
                            <div className="image">
                                <img src="/images/boxes-img1.png" alt="image" />
                            </div>
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor.</p>

                            <Link href="/courses-1">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-box-item">
                            <div className="image">
                                <img src="/images/boxes-img2.png" alt="image" />
                            </div>
                            <h3>UX/UI Design</h3>
                            <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor.</p>
                            
                            <Link href="/courses-1">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-box-item">
                            <div className="image">
                                <img src="/images/boxes-img3.png" alt="image" />
                            </div>
                            <h3>App Development</h3>
                            <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor.</p>
                            
                            <Link href="/courses-1">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="boxes-info">
                    <p>If you want more? <Link href="/courses-1"><a>View More Courses</a></Link></p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses;
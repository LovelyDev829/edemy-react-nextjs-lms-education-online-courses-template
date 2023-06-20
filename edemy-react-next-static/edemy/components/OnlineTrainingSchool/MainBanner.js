import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-wrapper-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <h1>Build Skills With Experts Any Time, Anywhere</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <form>
                                <label><i className="flaticon-search"></i></label>
                                <input type="text" className="input-search" placeholder="What do you want to learn?" />
                                <button type="submit">Search Now</button>
                            </form>

                            <ul className="popular-search-list">
                                <li><span>Popular:</span></li>
                                <li><Link href="#"><a>Development</a></Link></li>
                                <li><Link href="#"><a>Marketing</a></Link></li>
                                <li><Link href="#"><a>Illustration</a></Link></li>
                                <li><Link href="#"><a>UX/UI</a></Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-image">
                            <img src="/images/banner-img2.png" alt="image" />

                            <div className="banner-shape8">
                                <img src="/images/banner-shape8.png" alt="image" />
                            </div>
                            <div className="banner-shape9">
                                <img src="/images/banner-shape9.png" alt="image" />
                            </div>
                            <div className="banner-shape10">
                                <img src="/images/banner-shape10.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-inner-area">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-banner-box">
                                <div className="icon">
                                    <i className="flaticon-brain-process"></i>
                                </div>
                                <h3>10,000 Online Courses</h3>
                                <p>Lorem ipsum dolor sit amet consectets.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-banner-box">
                                <div className="icon">
                                    <i className="flaticon-people"></i>
                                </div>
                                <h3>Experts Teachers</h3>
                                <p>Lorem ipsum dolor sit amet consectets.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-banner-box">
                                <div className="icon">
                                    <i className="flaticon-world"></i>
                                </div>
                                <h3>Lifetime Access</h3>
                                <p>Lorem ipsum dolor sit amet consectets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider"></div>
        </div>
    )
}

export default MainBanner;
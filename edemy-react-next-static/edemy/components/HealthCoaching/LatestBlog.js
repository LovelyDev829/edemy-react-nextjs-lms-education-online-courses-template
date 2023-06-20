import React from 'react';
import Link from 'next/link';

const LatestBlog = () => {
    return (
        <div className="blog-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our New</span>
                    <h2 className="playfair-display-font">Check Out Our Latest Blog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post-box">
                            <div className="post-image">
                                <Link href="#">
                                    <a className="d-block">
                                        <img src="/images/health-blog-img1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="post-content">
                                <Link href="#">
                                    <a className="category">Yoga</a>
                                </Link>
                                <h3 className="playfair-display-font">
                                    <Link href="#">
                                        <a>Surprising SUP Yoga Poses You’ll Want to Try This Summer</a>
                                    </Link>
                                </h3>
                                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                            <span>Alex Morgan</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 30, 2020
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post-box">
                            <div className="post-image">
                                <Link href="#">
                                    <a className="d-block">
                                        <img src="/images/health-blog-img2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="post-content">
                                <Link href="#">
                                    <a className="category">YTT</a>
                                </Link>
                                <h3 className="playfair-display-font">
                                    <Link href="#">
                                        <a>7 Things I Learned From Doing One of Those Social Media Yoga</a>
                                    </Link>
                                </h3>
                                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                            <span>Sarah Taylor</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 29, 2020
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-blog-post-box">
                            <div className="post-image">
                                <Link href="#">
                                    <a className="d-block">
                                        <img src="/images/health-blog-img3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="post-content">
                                <Link href="#">
                                    <a className="category">Yoga</a>
                                </Link>
                                <h3 className="playfair-display-font">
                                    <Link href="#">
                                        <a>10 Ways to Get Real About Your Body’s Limitations & Avoid</a>
                                    </Link>
                                </h3>
                                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                            <span>David Warner</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 28, 2020
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="blog-post-info">
                            <p>Get into details now?​ <Link href="/blog-1"><a>View all posts</a></Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-shape1">
                <img src="/images/blog-shape1.png" alt="image" />
            </div>
            <div className="blog-shape2">
                <img src="/images/blog-shape2.png" alt="image" />
            </div>
        </div>
    )
}

export default LatestBlog;
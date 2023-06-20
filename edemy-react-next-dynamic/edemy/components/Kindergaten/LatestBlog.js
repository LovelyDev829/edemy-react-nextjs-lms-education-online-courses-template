import React from 'react';
import Link from 'next/link';

const LatestBlog = () => {
    return (
        <div className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our News</span>
                    <h2 className="font-weight-black">Check Out Our Latest Blog</h2>
                    <p>We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-blog-item">
                            <div className="post-image">
                                <Link href="/single-blog-1">
                                    <a className="d-block">
                                        <img src="/images/blog/kindergarten-img1.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <Link href="#">
                                    <a className="category">Preschool</a>
                                </Link>
                                <h3 className="font-weight-black">
                                    <Link href="/single-blog-1">
                                        <a>Why Play Is Important in Preschool and Early</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-blog-item">
                            <div className="post-image">
                                <Link href="/single-blog-1">
                                    <a className="d-block">
                                        <img src="/images/blog/kindergarten-img2.jpg" alt="image" />
                                    </a>
                                </Link>
                                
                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <a href="#" className="category">Books</a>
                                <h3 className="font-weight-black">
                                    <Link href="/single-blog-1">
                                        <a>Best Three Billy Goats Gruff Books for Preschool</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-blog-item">
                            <div className="post-image">
                                <Link href="/single-blog-1">
                                    <a className="d-block">
                                        <img src="/images/blog/kindergarten-img3.jpg" alt="image" />
                                    </a>
                                </Link>
                                
                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <a href="#" className="category">Theme</a>
                                <h3 className="font-weight-black">
                                    <Link href="/single-blog-1">
                                        <a>Flashlight Literacy Activity for Your Camping Theme</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog;
import React from 'react';
import Link from 'next/link';

const SuccessfulStudents = () => {
    return (
        <div className="start-with-success-area pt-100 bg-f8f9f8 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Education For Everyone</span>
                    <h2>Start writing your own success story with a good beginning from eDemy help</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="start-with-success-box">
                            <div className="image">
                                <Link href="#">
                                    <a>
                                        <img src="/images/success-people/success-people1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <Link href="#">
                                    <a className="link-btn">
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                                <h3>Sarah Taylor</h3>
                                <span>Web Developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="start-with-success-box">
                            <div className="image">
                                <Link href="#">
                                    <a>
                                        <img src="/images/success-people/success-people2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <Link href="#">
                                    <a className="link-btn">
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                                <h3>Alex Maxwell</h3>
                                <span>Tutor</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="start-with-success-box">
                            <div className="image">
                                <Link href="#">
                                    <a>
                                        <img src="/images/success-people/success-people3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <Link href="#">
                                    <a className="link-btn">
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                                <h3>Eva Lucy</h3>
                                <span>UX/UI Designer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="start-with-success-box">
                            <div className="image">
                                <Link href="#">
                                    <a>
                                        <img src="/images/success-people/success-people4.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <Link href="#">
                                    <a className="link-btn">
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                                <h3>Alina Smith</h3>
                                <span>Author</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="start-with-success-box">
                            <div className="image">
                                <Link href="#">
                                    <a>
                                        <img src="/images/success-people/success-people5.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <Link href="#">
                                    <a className="link-btn">
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                                <h3>James Anderson</h3>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="start-with-success-box">
                            <div className="image">
                                <Link href="#">
                                    <a>
                                        <img src="/images/success-people/success-people6.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <Link href="#">
                                    <a className="link-btn">
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                                <h3>Meg Lanning</h3>
                                <span>Writer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessfulStudents;
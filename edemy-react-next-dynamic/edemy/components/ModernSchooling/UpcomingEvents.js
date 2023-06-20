import React from 'react';
import Link from 'next/link';

const UpcomingEvents = () => {
    return (
        <div className="events-area bg-fffaf3 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Events</span>
                    <h2>Our Upcoming Events</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="#">
                                    <a className="d-block">
                                        <img src="/images/events/events1.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Wed, 20 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="#">
                                        <a>Global Conference on Business Management</a>
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Vancover, Canada
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="#">
                                    <a className="d-block">
                                        <img src="/images/events/events2.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Tue, 19 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="#">
                                        <a>International Conference on Teacher Education</a>
                                    </Link>
                                </h3> 
                                <span className="location">
                                    <i className="bx bx-map"></i>Sydney, Australia
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="#">
                                    <a className="d-block">
                                        <img src="/images/events/events3.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Mon, 18 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="#">
                                        <a>International Conference on Special Needs Education</a>
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i>Istanbul, Turkey
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="#">
                                    <a className="d-block">
                                        <img src="/images/events/events4.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Sun, 17 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3><a href="#">Global Conference on Business Management</a></h3>

                                <span className="location">
                                    <i className="bx bx-map"></i>Athens, Greece
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="#">
                                    <a className="d-block">
                                        <img src="/images/events/events5.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Sat, 16 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="#">
                                        <a>International Conference on Educational Administration</a>
                                    </Link>
                                </h3>

                                <span className="location">
                                    <i className="bx bx-map"></i>Rome, Italy
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="#">
                                    <a className="d-block">
                                        <img src="/images/events/events6.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Fri, 15 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="#">
                                        <a>International Conference on Education and Pedagogy</a>
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i>Athens, Greece
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvents;
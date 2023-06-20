import React from 'react';
import Link from 'next/link';

const UpcomingEvents = () => {
    return (
        <div className="events-area bg-shape bg-eee8df">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Events</span>
                    <h2 className="font-weight-black">Our Upcoming Events</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-6">
                        <div className="events-box">
                            <div className="row m-0">
                                <div className="col-lg-4 col-md-5 p-0">
                                    <div className="image bg1">
                                        <img src="/images/events/kindergarten-img1.jpg" alt="image" /> 
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-7 p-0">
                                    <div className="content">
                                        <div className="date">
                                            <img src="/images/rectangle1.png" alt="image" />
                                            <span>Wed, 03 June, 2020</span>
                                        </div>
                                        <h3 className="font-weight-black">
                                            <Link href="#">
                                                <a>Music Conference</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                        <span className="location"><i className="bx bx-map"></i>Vancover, Canada</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-6">
                        <div className="events-box">
                            <div className="row m-0">
                                <div className="col-lg-4 col-md-5 p-0">
                                    <div className="image bg2">
                                        <img src="/images/events/kindergarten-img2.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-7 p-0">
                                    <div className="content">
                                        <div className="date">
                                            <img src="/images/rectangle2.png" alt="image" />
                                            <span>Thu, 04 June, 2020</span>
                                        </div>
                                        <h3 className="font-weight-black">
                                            <Link href="#">
                                                <a>Paper Plates Art</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                        <span className="location"><i className="bx bx-map"></i>Sydney, Australia</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-6">
                        <div className="events-box">
                            <div className="row m-0">
                                <div className="col-lg-4 col-md-5 p-0">
                                    <div className="image bg3">
                                        <img src="/images/events/kindergarten-img3.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-7 p-0">
                                    <div className="content">
                                        <div className="date">
                                            <img src="/images/rectangle3.png" alt="image" />
                                            <span>Fri, 05 June, 2020</span>
                                        </div>
                                        <h3 className="font-weight-black">
                                            <Link href="#">
                                                <a>Imagination classNamees</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                        <span className="location"><i className="bx bx-map"></i>Istanbul, Turkey</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-6">
                        <div className="events-box">
                            <div className="row m-0">
                                <div className="col-lg-4 col-md-5 p-0">
                                    <div className="image bg4">
                                        <img src="/images/events/kindergarten-img4.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-7 p-0">
                                    <div className="content">
                                        <div className="date">
                                            <img src="/images/rectangle4.png" alt="image" />
                                            <span>Sat, 06 June, 2020</span>
                                        </div>
                                        <h3 className="font-weight-black">
                                            <Link href="#">
                                                <a>Number Matching</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                        <span className="location"><i className="bx bx-map"></i> New York, USA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kindergarten-shape17">
                <img src="/images/kindergarten-shape/k-shape17.png" alt="image" />
            </div>
            <div className="kindergarten-shape18">
                <img src="/images/kindergarten-shape/k-shape18.png" alt="image" />
            </div>
        </div>
    )
}

export default UpcomingEvents;
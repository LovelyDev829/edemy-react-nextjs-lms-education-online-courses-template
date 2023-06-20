import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import SubscribeForm from '../components/Common/SubscribeForm';

const Events = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Events" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Events" 
            />  

            <div className="events-area pt-100 pb-70">
                <div className="container">
                    <div className="shorting">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/single-events">
                                            <a className="d-block">
                                                <img src="/images/events/events1.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Wed, 20 May, 2020</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/single-events">
                                                <a>Global Conference on Business Management</a>
                                            </Link>
                                        </h3>
                                        <span className="location"><i className="bx bx-map"></i>Vancover, Canada</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/single-events">
                                            <a className="d-block">
                                                <img src="/images/events/events2.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Tue, 19 May, 2020</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/single-events">
                                                <a>International Conference on Teacher Education</a>
                                            </Link>
                                        </h3>
                                        <span className="location"><i className="bx bx-map"></i>Sydney, Australia</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/single-events">
                                            <a className="d-block">
                                                <img src="/images/events/events3.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Mon, 18 May, 2020</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/single-events">
                                                <a>International Conference on Special Needs Education</a>
                                            </Link>
                                        </h3>
                                        <span className="location"><i className="bx bx-map"></i>Istanbul, Turkey</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/single-events">
                                            <a className="d-block">
                                                <img src="/images/events/events4.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Sun, 17 May, 2020</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/single-events">
                                                <a>International Conference on Literacy Teaching</a>
                                            </Link>
                                        </h3>
                                        <span className="location"><i className="bx bx-map"></i>Athens, Greece</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/single-events">
                                            <a className="d-block">
                                                <img src="/images/events/events5.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Sat, 16 May, 2020</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/single-events">
                                                <a>International Conference on Educational Administration</a>
                                            </Link>
                                        </h3>
                                        <span className="location"><i className="bx bx-map"></i>Rome, Italy</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/single-events">
                                            <a className="d-block">
                                                <img src="/images/events/events6.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Fri, 15 May, 2020</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/single-events">
                                                <a>International Conference on Education and Pedagogy</a>
                                            </Link>
                                        </h3>
                                        <span className="location"><i className="bx bx-map"></i>Athens, Greece</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/single-events">
                                            <a className="d-block">
                                                <img src="/images/events/events7.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Thu, 14 May, 2020</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/single-events">
                                                <a>Research Conference Aims and Objectives</a>
                                            </Link>
                                        </h3>
                                        <span className="location"><i className="bx bx-map"></i>Tokyo, Japan</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/single-events">
                                            <a className="d-block">
                                                <img src="/images/events/events8.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Wed, 13 May, 2020</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/single-events">
                                                <a>Conference on Gender Discrimination in Education</a>
                                            </Link>
                                        </h3>
                                        <span className="location"><i className="bx bx-map"></i>Oslo, Norway</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link href="/single-events">
                                            <a className="d-block">
                                                <img src="/images/events/events9.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <span className="date">Tue, 12 May, 2020</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/single-events">
                                                <a>Quality and Improvement in Education Conference</a>
                                            </Link>
                                        </h3>
                                        <span className="location"><i className="bx bx-map"></i>Tokyo, Japan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SubscribeForm />
        </>
    )
}

export default Events;
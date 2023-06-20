import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import EventsTimer from '../components/SingleEvents/EventsTimer';
import EventsSidebar from '../components/SingleEvents/EventsSidebar';
import EventParticipants from '../components/SingleEvents/EventParticipants';

const SingleEvents = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Global Conference on Business Management and Economics" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Global Conference on Business Management and Economics" 
            />  

            <div className="events-details-area pb-100">
                <div className="events-details-image">
                    <img src="/images/events/events-details.jpg" alt="image" />

                    <EventsTimer />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="events-details-header">
                                <ul>
                                    <li><i className='bx bx-calendar'></i>Wed, 20 May, 2020</li>
                                    <li><i className='bx bx-map'></i>Wed, 20 May, 2020</li>
                                    <li><i className='bx bx-time'></i>Wed, 20 May, 2020</li>
                                </ul>
                            </div>

                            <div className="events-details-location">
                                <div id="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105913.76628212207!2d-117.46956773183814!3d33.946138126927174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dca6df7ff47dbb%3A0xf7a1d705135e0ae8!2sRiverside%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1592581354634!5m2!1sen!2sbd"></iframe>
                                </div>
                            </div>

                            <div className="events-details-desc">
                                <h3>About The Event</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <h3>Where the event?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <h3>Who this event is for?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <EventsSidebar />
                        </div>
                    </div>
                </div>
            </div>

            <EventParticipants />
        </>
    )
}

export default SingleEvents;
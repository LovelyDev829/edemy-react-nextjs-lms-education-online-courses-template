import React from 'react';
import Link from 'next/link';

const Pricing = () => {
    return (
        <div className="pricing-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Pricing</span>
                    <h2 className="playfair-display-font">Our Flexible Pricing Plan</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                <img src="/images/yoga-pricing-img1.png" alt="image" />
                                <h3>200 Hour TTC</h3>
                            </div>

                            <div className="pricing-features">
                                <ul>
                                    <li>Examine traditional yoga asanas</li>
                                    <li>Learn meditation and philosophy</li>
                                    <li>Connect energetics and anatomy</li>
                                    <li>Practice teaching for confidence</li>
                                    <li>Become a Yoga Alliance RYT200</li>
                                </ul>
                            </div>

                            <div className="price">
                                $499.99
                                <span>Yoga Alliance Certified</span>
                            </div>

                            <Link href="#">
                                <a className="default-btn">Book Now<span></span></a>
                            </Link>

                            <div className="pricing-shape1">
                                <img src="/images/pricing-shape1.png" alt="image" />
                            </div>
                            <div className="pricing-shape2">
                                <img src="/images/pricing-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                <img src="/images/yoga-pricing-img2.png" alt="image" />
                                <h3>200 Hour TTC</h3>
                            </div>

                            <div className="pricing-features">
                                <ul>
                                    <li>Fine tune yoga alignment and form</li>
                                    <li>Explore the fine art of sequencing</li>
                                    <li>Delve deeper into ancient scripture</li>
                                    <li>Study therapeutic based anatomy</li>
                                    <li>Become a Yoga Alliance RYT300</li>
                                </ul>
                            </div>

                            <div className="price">
                                $599.99
                                <span>Yoga Alliance Certified</span>
                            </div>

                            <Link href="#">
                                <a className="default-btn">Book Now<span></span></a>
                            </Link>

                            <div className="pricing-shape1">
                                <img src="/images/pricing-shape1.png" alt="image" />
                            </div>
                            <div className="pricing-shape2">
                                <img src="/images/pricing-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                <img src="/images/yoga-pricing-img3.png" alt="image" />
                                <h3>500 Hour TTC</h3>
                            </div>

                            <div className="pricing-features">
                                <ul>
                                    <li>Get the highest level certification</li>
                                    <li>Become a respected yoga master</li>
                                    <li>Work at luxury resorts and retreats</li>
                                    <li>Lead your own teacher trainings</li>
                                    <li>Become a Yoga Alliance RYT500</li>
                                </ul>
                            </div>

                            <div className="price">
                                $699.99
                                <span>Yoga Alliance Certified</span>
                            </div>

                            <Link href="#">
                                <a className="default-btn">Book Now<span></span></a>
                            </Link>

                            <div className="pricing-shape1">
                                <img src="/images/pricing-shape1.png" alt="image" />
                            </div>
                            <div className="pricing-shape2">
                                <img src="/images/pricing-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;
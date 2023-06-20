import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ProductsDetailsTabs = () => {
    return (
        <div className="products-details-tabs">
            <Tabs>
                <TabList>
                    <Tab>Description</Tab>
                    <Tab>Reviews (2)</Tab>
                </TabList>
            
                <TabPanel>
                    <p>This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit.</p>
                    <ul>
                        <li>Instant eDemy bestseller</li>
                        <li>Translated into 18 languages</li>
                        <li>#1 Most Recommended Book of the year.</li>
                        <li>A neglected project, widely dismissed, its champion written off as unhinged.</li>
                        <li>Yields a negative result in an experiment because of a flaw in the design of the experiment.</li>
                        <li>An Amazon, Bloomberg, Financial Times, Forbes, Inc., Newsweek, Strategy + Business, Tech Crunch, Washington Post Best Business Book of the year</li>
                    </ul>
                </TabPanel>

                <TabPanel>
                    <div className="products-reviews">
                        <h3>Course Rating</h3>

                        <div className="rating">
                            <span className="bx bxs-star checked"></span>
                            <span className="bx bxs-star checked"></span>
                            <span className="bx bxs-star checked"></span>
                            <span className="bx bxs-star checked"></span>
                            <span className="bx bxs-star"></span>
                        </div>

                        <div className="rating-count">
                            <span>4.1 average based on 4 reviews.</span>
                        </div>

                        <div className="row">
                            <div className="side">
                                <div>5 star</div>
                            </div>
                            <div className="middle">
                                <div className="bar-container">
                                    <div className="bar-5"></div>
                                </div>
                            </div>
                            <div className="side right">
                                <div>02</div>
                            </div>
                            <div className="side">
                                <div>4 star</div>
                            </div>
                            <div className="middle">
                                <div className="bar-container">
                                    <div className="bar-4"></div>
                                </div>
                            </div>
                            <div className="side right">
                                <div>03</div>
                            </div>
                            <div className="side">
                                <div>3 star</div>
                            </div>
                            <div className="middle">
                                <div className="bar-container">
                                    <div className="bar-3"></div>
                                </div>
                            </div>
                            <div className="side right">
                                <div>04</div>
                            </div>
                            <div className="side">
                                <div>2 star</div>
                            </div>
                            <div className="middle">
                                <div className="bar-container">
                                    <div className="bar-2"></div>
                                </div>
                            </div>
                            <div className="side right">
                                <div>05</div>
                            </div>
                            <div className="side">
                                <div>1 star</div>
                            </div>
                            <div className="middle">
                                <div className="bar-container">
                                    <div className="bar-1"></div>
                                </div>
                            </div>
                            <div className="side right">
                                <div>00</div>
                            </div>
                        </div>
                    </div>

                    <div className="products-review-comments">
                        <h3>3 Reviews</h3>
                        <div className="user-review">
                            <img src="/images/user1.jpg" alt="image" />
                            
                            <div className="review-rating">
                                <div className="review-stars">
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                </div>

                                <span className="d-inline-block">James Anderson</span>
                            </div>

                            <span className="d-block sub-comment">Excellent</span>
                            <p>Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.</p>
                        </div>

                        <div className="user-review">
                            <img src="/images/user2.jpg" alt="image" />
                            <div className="review-rating">
                                <div className="review-stars">
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </div>

                                <span className="d-inline-block">Sarah Taylor</span>
                            </div>
                            <span className="d-block sub-comment">Video Quality!</span>
                            <p>Was really easy to implement and they quickly answer my additional questions!</p>
                        </div>

                        <div className="user-review">
                            <img src="/images/user3.jpg" alt="image" />
                            <div className="review-rating">
                                <div className="review-stars">
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                </div>
                                <span className="d-inline-block">David Warner</span>
                            </div>
                            <span className="d-block sub-comment">Perfect Coding!</span>
                            <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                        </div>

                        <div className="user-review">
                            <img src="/images/user4.jpg" alt="image" />
                            <div className="review-rating">
                                <div className="review-stars">
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star checked'></i>
                                    <i className='bx bxs-star'></i>
                                </div>
                                <span className="d-inline-block">King Kong</span>
                            </div>
                            <span className="d-block sub-comment">Perfect Video!</span>
                            <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                        </div>
                    </div>
                    
                    <div className="review-form-wrapper">
                        <h3>Add a review</h3>
                        <p className="comment-notes">Your email address will not be published. Required fields are marked <span>*</span></p>

                        <form>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="rating">
                                        <input type="radio" id="star5" name="rating" value="5" />
                                        <label htmlFor="star5"></label>
                                        <input type="radio" id="star4" name="rating" value="4" />
                                        <label htmlFor="star4"></label>
                                        <input type="radio" id="star3" name="rating" value="3" />
                                        <label htmlFor="star3"></label>
                                        <input type="radio" id="star2" name="rating" value="2" />
                                        <label htmlFor="star2"></label>
                                        <input type="radio" id="star1" name="rating" value="1" />
                                        <label htmlFor="star1"></label>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name *" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email *" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea placeholder="Your review" className="form-control" cols="30" rows="6"></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <p className="comment-form-cookies-consent">
                                        <input type="checkbox" id="test1" />
                                        <label htmlFor="test1">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </p>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ProductsDetailsTabs;
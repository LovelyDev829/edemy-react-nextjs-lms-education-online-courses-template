import React from 'react'; 

const DownloadCoursesSyllabus = () => {
    return (
        <div className="download-syllabus-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="download-syllabus-image">
                            <img src="/images/download.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="download-syllabus-form">
                            <h2 className="playfair-display-font">Download Courses Syllabus</h2>
                            <p>Your email address will not be published. Required fields are marked *</p>

                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name *" />
                                </div>

                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email *" />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Phone *" />
                                </div>

                                <div className="form-group">
                                    <select className="form-control">
                                        <option>200 Hour YTT Course *</option>
                                        <option>300 Hour YTT Course *</option>
                                        <option>400 Hour YTT Course *</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <select className="form-control">
                                        <option>How Did You Hear About Us? *</option>
                                        <option>How Did You Hear About Us? *</option>
                                        <option>How Did You Hear About Us? *</option>
                                    </select>
                                </div>

                                <button className="default-btn">
                                    <i className="flaticon-tick"></i >Submit Now <span></span>
                                </button>
                            </form>
                            
                            <div className="syllabus-shape1">
                                <img src="/images/syllabus-shape1.png" alt="image" />
                            </div>
                            <div className="syllabus-shape2">
                                <img src="/images/syllabus-shape2.png" alt="image" />
                            </div>
                            <div className="syllabus-shape3">
                                <img src="/images/syllabus-shape3.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadCoursesSyllabus;
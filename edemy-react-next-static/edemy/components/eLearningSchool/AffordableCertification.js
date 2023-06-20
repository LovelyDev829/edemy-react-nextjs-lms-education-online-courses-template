import React from 'react';
import Link from 'next/link';

const AffordableCertification = () => {
    return (
        <div className="premium-access-area ptb-100">
            <div className="container">
                <div className="premium-access-content">
                    <span className="sub-title">Affordable Certification</span>
                    <h2>Get Your Quality Skills Certificate Through Online Exam</h2>
                    <p>Students friendly pricing for the certificate programs helps individuals to get their skill certificate easier than ever!</p>
                    
                    <Link href="/membership-levels">
                        <a className="default-btn">
                            <i className="flaticon-user"></i> Get Started Now <span></span>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="shape3">
                <img src="/images/shape3.png" alt="image" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.png" alt="image" />
            </div>
            <div className="shape8">
                <img src="/images/shape7.png" alt="image" />
            </div>
        </div>
    )
}

export default AffordableCertification;
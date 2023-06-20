import React from 'react';
import Link from 'next/link';

const PremiumAccessTwo = () => {
    return (
        <div className="premium-access-area">
            <div className="container">
                <div className="premium-access-content">
                    <span className="sub-title">Go at your own pace</span>
                    <h2>Give their limitless potential unlimited access</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                    <Link href="/membership-levels">
                        <a className="default-btn">
                            <i className="flaticon-user"></i> Give Premium Access <span></span>
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

export default PremiumAccessTwo;
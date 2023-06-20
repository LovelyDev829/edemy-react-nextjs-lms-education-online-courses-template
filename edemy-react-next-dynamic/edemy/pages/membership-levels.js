import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';

const MembershipLevels = () => {
    return (
        <>

            <PageBanner 
                pageTitle="Membership Levels" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Membership Levels" 
            />

            <div className="membership-levels-area ptb-100">
                <div className="container">
                    <div className="membership-levels-table table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        <h2>$500</h2>
                                        <h3>Silver Membership</h3>
                                        <span className="desc">You can view few of courses</span>
                                    </th>
                                    <th>
                                        <h2>$1,000</h2>
                                        <h3>Gold Membership</h3>
                                        <span className="desc">You can view most of courses</span>
                                    </th>
                                    <th>
                                        <h2>$1,500</h2>
                                        <h3>Diamond Membership</h3>
                                        <span className="desc">You can view all of courses</span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Number of courses</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Investment Fundamentals & Data Analytics</a>
                                        </Link>
                                    </td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Hands-On Python & R In Data Science</a>
                                        </Link>
                                    </td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Complete Data Science Bootcamp</a>
                                        </Link>
                                    </td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Programming MasterclassName for Developers</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Hands-On Artificial Neural Networks</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>PRINCE2® Practitioner Certification Training</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>PMI-RMP® Certification Training</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>PRINCE2® Foundation Certification Training</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>PMP® Plus</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>PMP® Renewal Pack</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Digital Project Manager</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Agile Project Management; Agile Delivery</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Vue JS 2 - The Complete Guide</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Everything You Need to Program in Python</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Mathematical Foundation For Machine Learning</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Drawing Course - Beginner to Advanced</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Deep Learning and Artificial Intelligence</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Information About UI/UX Design Degree</a>
                                        </Link>
                                    </td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Photography Photo modify and Beautiful</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href="#">
                                            <a>Professional IT Expert Certificate Course</a>
                                        </Link>
                                    </td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-none"><i className='bx bx-x'></i></td>
                                    <td className="item-check"><i className='bx bx-check'></i></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <Link href="#">
                                            <a className="select-btn">Get it now</a>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href="#">
                                            <a className="select-btn">Get it now</a>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href="#">
                                            <a className="select-btn">Get it now</a>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MembershipLevels;
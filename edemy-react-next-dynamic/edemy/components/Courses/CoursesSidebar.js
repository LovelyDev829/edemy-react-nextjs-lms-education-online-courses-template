import React from 'react';
import Link from 'next/link';

const CoursesSidebar = () => {
    return (
        <div className="widget-area">
            <div className="widget widget_search">
                <h3 className="widget-title">Search</h3>

                <form className="search-form">
                    <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input type="search" className="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit">
                        <i className="bx bx-search-alt"></i>
                    </button>
                </form>
            </div>
 
            <div className="widget widget_recent_courses">
                <h3 className="widget-title">Recent Courses</h3>

                <div className="item">
                    <Link href="#">
                        <a className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>$49.00</span>
                        <h4 className="title usmall">
                            <Link href="#">
                                <a>The Data Science Course 2020: Complete Data Science Bootcamp</a>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </div>

                <div className="item">
                    <Link href="#">
                        <a className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>$59.00</span>
                        <h4 className="title usmall">
                            <Link href="#">
                                <a>Java Programming MasterclassName for Software Developers</a>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </div>

                <div className="item">
                    <Link href="#">
                        <a className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>$69.00</span>
                        <h4 className="title usmall">
                            <Link href="#">
                                <a>Deep Learning A-Z™: Hands-On Artificial Neural Networks</a>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>

                <div className="tagcloud">
                    <Link href="#">
                        <a>Business <span className="tag-link-count">(3)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Design <span className="tag-link-count">(3)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Digital <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>SEO <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Braike <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Fashion <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Software <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Travel <span className="tag-link-count">(1)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Smart <span className="tag-link-count">(1)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Marketing <span className="tag-link-count">(1)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Tips <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Website <span className="tag-link-count">(2)</span></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CoursesSidebar;
import React from 'react';
import Link from 'next/link';

const Quizzes = () => {
    return (
        <div className="profile-quizzes pb-70">
            <h3 className="title">Quizzes</h3>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Quiz</th>
                            <th>Date</th>
                            <th>Progress</th>
                            <th>Interval</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <Link href="#">
                                    <a>Introduction to Python for Beginners</a>
                                </Link>
                            </td>
                            <td>Lesson 1 Term Test</td>
                            <td>May 20, 2020</td>
                            <td>25% <span className="progress">In Progress</span></td>
                            <td>15:30</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="#">
                                    <a>Python for Data Science and Machine Learning Bootcamp</a>
                                </Link>
                            </td>
                            <td>Lesson 2 Term Test</td>
                            <td>May 21, 2020</td>
                            <td>0% <span className="progress pending">Pending</span></td>
                            <td>20:20</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="#">
                                    <a>The Modern Python 3 Bootcamp</a>
                                </Link>
                            </td>
                            <td>Lesson 5 Term Test</td>
                            <td>May 22, 2020</td>
                            <td>100% <span className="progress completed">Completed</span></td>
                            <td>10:10</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="#">
                                    <a>REST APIs with Flask and Python</a>
                                </Link>
                            </td>
                            <td>Lesson 1 Term Test</td>
                            <td>May 23, 2020</td>
                            <td>30% <span className="progress">In Progress</span></td>
                            <td>15:30</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="#">
                                    <a>Reinforcement Learning in Python</a>
                                </Link>
                            </td>
                            <td>Lesson 1 Term Test</td>
                            <td>May 24, 2020</td>
                            <td>35% <span className="progress failed">Failed</span></td>
                            <td>15:30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Quizzes;
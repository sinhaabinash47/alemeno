import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
import dummyApi from '../data/dummyApi';
import { Link } from 'react-router-dom';

const CourseDetailsPage = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                const courseData = await dummyApi.getCourseById(courseId);
                setCourse(courseData);
            } catch (error) {
                console.error('Error fetching course details:', error);
            }
        };

        fetchCourseDetails();
    }, [courseId]);


    if (!course) {
        return <p>Loading...</p>;
    }


    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand">Course Details Page</a>
                    <Link to='/'>Back</Link>
                </div>
            </nav>
            <div className="card course-details no-border-radius">
                <div className="card-body">
                    <div className='course-body-details'>
                        <h5 className="card-title text-white">{course.name}</h5>
                        <p className="card-text text-white">Name : {course.instructor}</p>
                        <p className='card-text text-white'>Description : {course.description}</p>
                        <div className='d-flex justify-content-between'>
                            <p className="card-text text-white">Updated : {course.schedule}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className="card mt-4 w-75">
                    <h5 className="card-title p-3">Course content</h5>
                    <div className="card-body py-0">
                        <p className="card-title">Enrollment status : <span className='tag'>{course.enrollmentStatus}</span></p>
                        <p className="card-title">Duration : {course.duration}</p>
                        <p className="card-title">{course.schedule}</p>
                        <p className="card-title">Location : <div className='chip'>
                            <div class="chip-content">{course.location}</div></div></p>
                        <p className="card-title">Pre-requisites : <span className='tag'>{course.prerequisites.join(', ')}</span></p>
                        <p className="card-header" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Syllabus as an expandable item →</p>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                {course.syllabus.map((item) => (
                                    <p key={item.week}>
                                        <strong>Week {item.week}:</strong> {item.topic} - {item.content}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;

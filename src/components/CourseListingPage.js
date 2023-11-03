import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dummyApi from '../data/dummyApi';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            const coursesData = await dummyApi.getCourses();
            setCourses(coursesData);
        };

        fetchCourses();
    }, []);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const filteredCourses = courses.filter(
        (course) =>
            course.name.toLowerCase().includes(searchText.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className="card w-75">
                <div className='card-header d-flex justify-content-between'>
                    <h5>Course Listing Page</h5>
                    <input type="text" placeholder="Search courses" value={searchText}
                        onChange={handleSearch} />
                </div>
                <div className="card-body d-flex justify-content-between">
                    <div>
                        {filteredCourses.map((course) => (
                            <div key={course.id}>
                                <Link to={`/course/${course.id}`}>{course.name}</Link>
                            </div>
                        ))}
                    </div>
                    <div className='p-2' align="end">
                        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>
                            Go to Student Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseList;


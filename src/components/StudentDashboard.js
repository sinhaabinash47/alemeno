import React, { useState, useEffect } from 'react';
import dummyApi from '../data/dummyApi';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const enrolledCoursesData = await dummyApi.getEnrolledCourses();
      setEnrolledCourses(enrolledCoursesData);
    };

    fetchEnrolledCourses();
  }, []);

  const markCourseCompleted = (courseId) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, completed: true } : course
      )
    );
  };

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <div class="card w-75 mt-5">
          <div class="card-header d-flex justify-content-between">
            <p>Student Dashboard</p>
            <Link to='/'>Back</Link>
          </div>
          {enrolledCourses.map((course) => (
            <div class="card-body">
              <h5 class="card-title">{course.name}</h5>
              <p class="card-text">Instructor Name : {course.instructor}</p>
              <img src={course.thumbnail} alt={course.name} style={{ maxWidth: '100px' }} />
              <p class="card-text">Due Date: {course.dueDate}</p>
              <progress value={course.progress} max="100"></progress>
              <div className='d-flex justify-content-end'>
                {course.completed ? (
                  <p>Completed</p>
                ) : (
                  <a onClick={() => markCourseCompleted(course.id)} class="btn btn-primary">Mark as Completed</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

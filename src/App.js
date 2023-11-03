// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListingPage from './components/CourseListingPage';
import CourseDetailsPage from './components/CourseDetailsPage';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  return (
    <div>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<CourseListingPage/>} />
        <Route path="/course/:courseId" element={<CourseDetailsPage/>} />
        <Route path="/dashboard" element={<StudentDashboard/>} />
      </Routes>
      {/* </Router> */}
    </div>
  );
};

export default App;

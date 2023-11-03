// src/services/courseService.js
const courses = [
    {
        id: 1,
        name: 'Introduction to subject',
        instructor: 'John Doe',
        description: 'Learn the basics of React.js',
        enrollmentStatus: 'Open',
        duration: '8 weeks',
        schedule: 'Mon & Wed, 10:00 AM - 12:00 PM',
        location: 'Online',
        prerequisites: 'Basic knowledge of HTML, CSS, and JavaScript',
        syllabus: ['Week 1: Introduction to subject', 'Week 2: Components and Props'],
    },
];

export const getCourses = () => {
    return Promise.resolve(courses);
};

export const getCourseById = (courseId) => {
    const course = courses.find((c) => c.id === courseId);
    return Promise.resolve(course);
};

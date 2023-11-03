const dummyApi = {
    getCourses: async () => {
        return [
            {
                id: 1,
                name: 'Introduction to React Native',
                instructor: 'John Doe',
                description: 'Learn the basics of React Native development and build your first mobile app.',
                enrollmentStatus: 'Open',
                thumbnail: 'your.image.here',
                duration: '8 weeks',
                schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
                syllabus: [
                    {
                        week: 1,
                        topic: 'Introduction to React Native',
                        content: 'Overview of React Native, setting up your development environment.',
                    },
                    {
                        week: 2,
                        topic: 'Building Your First App',
                        content: 'Creating a simple mobile app using React Native components.',
                    },
                    // Additional weeks and topics...
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                    // Additional enrolled students...
                ],
            },
        ];
    },
    getCourseById: async (courseId) => {
        const courses = await dummyApi.getCourses();
        return courses.find((course) => course.id === Number(courseId));
    },
    getEnrolledCourses: async () => {
        return [
            {
                id: 1,
                name: 'Introduction to React Native',
                instructor: 'John Doe',
                thumbnail: 'https://images.unsplash.com/photo-1552308995-2baac1ad5490?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                dueDate: '2023-12-31',
                progress: 50,
            },
        ];
    },
};

export default dummyApi;

export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSE_SUCCESS = 'FETCH_COURSE_SUCCESS';

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const fetchCourseSuccess = (course) => ({
  type: FETCH_COURSE_SUCCESS,
  payload: course,
});
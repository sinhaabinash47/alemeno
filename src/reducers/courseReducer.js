import { FETCH_COURSES_SUCCESS, FETCH_COURSE_SUCCESS } from '../actions/courseActions';

const initialState = {
  courses: [],
  selectedCourse: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
      };
    case FETCH_COURSE_SUCCESS:
      return {
        ...state,
        selectedCourse: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;

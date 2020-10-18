import courseServices from "../services/CourseService";
export const FIND_COURSE_BY_ID = "FIND_COURSE_BY_ID"


export const findCourseById = (dispatch,courseId) =>
   courseServices.findCourseById(courseId)
    .then(actualCourse => dispatch({
        type: FIND_COURSE_BY_ID,
        course: actualCourse
    })).catch(error => {})

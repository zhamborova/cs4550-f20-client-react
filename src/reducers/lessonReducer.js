import {
    CREATE_LESSON,
    DELETE_LESSON,
    FIND_LESSON_BY_ID,
    FIND_LESSONS_FOR_MODULE,
    UPDATE_LESSON
} from "../actions/lessonActions";

const initialState = {
  lessons: [],
  moduleId: null
}


const lessonReducer = (state=initialState, action) => {
    switch (action.type) {

        case FIND_LESSONS_FOR_MODULE : return {
            ...state,
            lessons: action.lessons,
            moduleId: action.moduleId
        }
        case FIND_LESSON_BY_ID:
            return{
                ...state,
                lesson: action.lesson
            }
        case DELETE_LESSON:
            return {
                ...state,
                lessons: state.lessons.filter((lesson) => lesson._id !== action.id)
            }
        case UPDATE_LESSON:
            return {
                ...state,
                lessons: state.lessons.map((lesson) => lesson._id === action.lesson._id ? action.lesson : lesson)

            }
        case CREATE_LESSON:
            return {
                ...state,
                lessons: [
            ...state.lessons,
              action.lesson]}
        default: return state

    }

}

export default lessonReducer;

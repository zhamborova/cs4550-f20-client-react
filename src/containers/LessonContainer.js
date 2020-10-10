import {connect} from "react-redux";
import LessonTabs from "../components/LessonTabsComponent/LessonTabs";
import {createLesson, deleteLesson, updateLesson} from "../actions/lessonActions";

const stateToPropertyMapper = (state) => ({
   lessons: state.lessonReducer.lessons
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
    createLesson: (lesson) => createLesson(dispatch, lesson),
    updateLesson: (lesson) => updateLesson(dispatch, lesson)
})

export default connect(stateToPropertyMapper,propertyToDispatchMapper)(LessonTabs)

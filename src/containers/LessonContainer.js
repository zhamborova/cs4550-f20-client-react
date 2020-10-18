import {connect} from "react-redux";
import LessonTabs from "../components/LessonTabsComponent/LessonTabs";
import {createLesson, deleteLesson, resetLesson, updateLesson} from "../actions/lessonActions";

const stateToPropertyMapper = (state) => ({
   lessons: state.lessonReducer.lessons,
   moduleId: state.lessonReducer.moduleId,
   lessonCurrent: state.topicReducer.lessonId,
   course: state.courseReducer.course,

})

const propertyToDispatchMapper = (dispatch) => ({
    deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
    createLesson: (moduleId,lesson) => createLesson(dispatch, moduleId,lesson),
    updateLesson: (lesson) => updateLesson(dispatch, lesson),
    resetLesson: () => resetLesson(dispatch)
})

export default connect(stateToPropertyMapper,propertyToDispatchMapper)(LessonTabs)

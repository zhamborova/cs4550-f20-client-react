import lessonServices from '../services/LessonServices'
export const DELETE_LESSON = "DELETE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const CREATE_LESSON = "CREATE_LESSON"
export const FIND_LESSON_BY_ID = "FIND_LESSON_BY_ID"
export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE"
export const RESET_LESSON = "RESET_LESSON"

export const deleteLesson = (dispatch, id) =>
    lessonServices.deleteLessonService(id)
        .then(status => dispatch({
        type: DELETE_LESSON,
        id
    }))

export const updateLesson = (dispatch, lesson) =>
    lessonServices.updateLessonService(lesson._id, lesson)
        .then(status => dispatch({
        type: UPDATE_LESSON,
        lesson
    }))

export const createLesson = (dispatch, moduleId, lesson) =>
    lessonServices.createLessonForModule(moduleId, lesson)
        .then( actualLesson =>
            dispatch({
                type: CREATE_LESSON,
                lesson:actualLesson
        }))


export const findLessonsForModule = (dispatch, moduleId) => {
    lessonServices.findLessonsForModule(moduleId).then(lessons =>
        dispatch({
          type: FIND_LESSONS_FOR_MODULE,
            lessons,
            moduleId
        })
    )


}

export const findLessonById = (dispatch, id) =>{
    lessonServices.findLessonById(id)
        .then(lesson =>
          dispatch({
            type: FIND_LESSON_BY_ID,
            lesson
        })

        )
}

export const resetLesson = (dispatch) => {

    dispatch({
        type: RESET_LESSON
    })
}




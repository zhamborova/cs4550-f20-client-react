export const DELETE_LESSON = "DELETE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const CREATE_LESSON = "CREATE_LESSON"

export const deleteLesson = (dispatch, lesson) =>
    dispatch({
        type: DELETE_LESSON,
        module: module
    })

export const updateLesson = (dispatch, lesson) =>
    dispatch({
        type: UPDATE_LESSON,
        lesson
    })

export const createLesson = (dispatch, lesson) =>
    dispatch(
        {type: CREATE_LESSON,
         lesson})

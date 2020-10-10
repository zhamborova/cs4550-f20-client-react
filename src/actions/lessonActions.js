export const DELETE_LESSON = "DELETE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const CREATE_LESSON = "CREATE_LESSON"

export const deleteLesson = (dispatch, id) =>
    dispatch({
        type: DELETE_LESSON,
        id
    })

export const updateLesson = (dispatch, lesson) =>
    dispatch({
        type: UPDATE_LESSON,
        lesson
    })

export const createLesson = (dispatch) =>
    dispatch(
        {type: CREATE_LESSON})

export const DELETE_MODULE = "DELETE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const CREATE_MODULE = "CREATE_MODULE"


export const deleteModule = (dispatch, id) =>
    dispatch({
        type: DELETE_MODULE,
        id
    })

export const updateModule = (dispatch, module) =>
    dispatch({
        type: UPDATE_MODULE,
        module
    })

export const createModule = (dispatch) =>
    dispatch({type: CREATE_MODULE})


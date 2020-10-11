export const DELETE_TOPIC = "DELETE_TOPIC";
export const UPDATE_TOPIC = "UPDATE_TOPIC";
export const CREATE_TOPIC = "CREATE_TOPIC";


export const deleteTopic =(dispatch, id)=>(
    dispatch({
        type: DELETE_TOPIC,
        id
    })
)
export const updateTopic =(dispatch, topic)=>(
   dispatch( {
        type: UPDATE_TOPIC,
        topic
    })
)
export const createTopic =(dispatch)=>(
    dispatch({
        type: CREATE_TOPIC,

    })
)


export const DELETE_TOPIC = "DELETE_TOPIC";
export const UPDATE_TOPIC = "DELETE_TOPIC";
export const CREATE_TOPIC = "DELETE_TOPIC";


export const deleteTopic =(dispatch, topic)=>(
    {
        type: DELETE_TOPIC,
        topic
    }
)
export const updateTopic =(dispatch, topic)=>(
    {
        type: UPDATE_TOPIC,
        topic
    }
)
export const createTopic =(dispatch, topic)=>(
    {
        type: CREATE_TOPIC,
        topic
    }
)


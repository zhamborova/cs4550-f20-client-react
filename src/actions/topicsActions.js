import topicServices from "../services/TopicsServices";
export const DELETE_TOPIC = "DELETE_TOPIC";
export const UPDATE_TOPIC = "UPDATE_TOPIC";
export const CREATE_TOPIC = "CREATE_TOPIC";
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"

export const deleteTopic =(dispatch, id)=>(
    topicServices.deleteTopicService(id).then(status =>
    dispatch({
        type: DELETE_TOPIC,
        id
    })
))


export const updateTopic =(dispatch, topic)=>(
   topicServices.updateTopicService(topic._id, topic)
       .then(status => dispatch( {
        type: UPDATE_TOPIC,
        topic
    })
))
export const createTopic =(dispatch, lessonId, topic)=>{
   topicServices.createTopicForLesson(lessonId, topic)
       .then(actualTopic => dispatch({
        type: CREATE_TOPIC,
        topic:actualTopic
    })
)}

export const findTopicsForLesson = (dispatch, lessonId) =>{
   topicServices.findTopicsForLesson(lessonId)
       .then(topics =>
          dispatch({
            type: FIND_TOPICS_FOR_LESSON,
            topics,
            lessonId
        })
       )

}


import {CREATE_TOPIC, DELETE_TOPIC, FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC} from "../actions/topicsActions";
import {RESET_LESSON} from "../actions/lessonActions";

const initialState = {
    topics:  [],
    lessonId: null

}


 const topicReducer = (state=initialState, action) => {

     switch (action.type) {
         case CREATE_TOPIC:
             return {
                 ...state,
                 topics: [
                     ...state.topics,
                     action.topic]
             }
         case FIND_TOPICS_FOR_LESSON :
                return {
                ...state,
             topics: action.topics,
             lessonId: action.lessonId
         }
         case DELETE_TOPIC:
             return {
                 ...state,
                 topics: state.topics.filter(topic => action.id !== topic._id)
             }
         case UPDATE_TOPIC:
             return {
                 ...state,
                 topics: state.topics.map(topic => topic._id === action.topic._id ? action.topic : topic)
             }

         case RESET_LESSON:
             return {
                 ...state,
                 lessonId: null
             }

         default: return state;
     }

 }

 export default  topicReducer;

import {CREATE_TOPIC, DELETE_TOPIC, UPDATE_TOPIC} from "../actions/topicsActions";

const initialState = {
    topics:  [ {
        _id: 1,
        title: "Topic 1",
        editing: false
    },
        {
            _id: 2,
            title: "Topic 2",
            editing: false
        },

        {
            _id: 3,
            title: "Topic 3",
            editing: false
        },
        {
            _id: 4,
            title: "Topic 4",
            editing: false
        },

        {
            _id: 5,
            title: "Topic 5",
            editing: false
        },
 ]}


 const topicReducer = (state=initialState, action) => {

     switch (action.type) {
         case CREATE_TOPIC:
             console.log("and here")
             return {
                 topics: [
                     ...state.topics,
                     {
                         _id: (Date.now()) + "",
                         title: "New Topic",
                         editing:false}]}

         case DELETE_TOPIC:
             return {
                 topics: state.topics.filter(topic => action.id !== topic._id)
             }
         case UPDATE_TOPIC:
             return {
                 topics: state.topics.map(topic => topic._id === action.topic._id ? action.topic : topic)
             }

         default: return state;
     }

 }

 export default  topicReducer;

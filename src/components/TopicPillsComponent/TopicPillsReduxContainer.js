import TopicPills from "./TopicPills";
import {connect} from "react-redux";
import {createTopic, deleteTopic, updateTopic} from "../../actions/topicsActions";


const stateToPropertyMapper = (state) => ({
   topics: state.topicReducer.topics,
   module: state.moduleReducer.module,
   course: state.courseReducer.course,
   lessonId: state.topicReducer.lessonId
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteTopic: (id) => deleteTopic(dispatch, id),
    createTopic: (lessonId, topic) => createTopic(dispatch,lessonId, topic),
    updateTopic: (topic) => updateTopic(dispatch, topic)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(TopicPills)

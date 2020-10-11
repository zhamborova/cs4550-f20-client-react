import TopicPills from "../components/TopicPillsComponent/TopicPills";
import {connect} from "react-redux";
import {createTopic, deleteTopic, updateTopic} from "../actions/topicsActions";


const stateToPropertyMapper = (state) => ({
   topics: state.topicReducer.topics
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteTopic: (id) => deleteTopic(dispatch, id),
    createTopic: () => createTopic(dispatch),
    updateTopic: (topic) => updateTopic(dispatch, topic)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(TopicPills)

import TopicPills from "../components/TopicPillsComponent/TopicPills";
import {connect} from "react-redux";
import {createTopic, deleteTopic, updateTopic} from "../actions/topicsActions";


const matchStateToProps = (state) => ({
   topics: state.topicReducer.topics
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteTopicPills: (topics) => deleteTopic(dispatch, topics),
    createTopicPills: () => createTopic(dispatch),
    updateTopicPills: (topics) => updateTopic(dispatch, topics)
})

export default connect(matchStateToProps, propertyToDispatchMapper)(TopicPills)

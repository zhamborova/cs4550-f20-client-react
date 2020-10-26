import React from 'react';
import "./CourseEditor.style.css"
import ModuleContainer from "../ModuleListComponent/ModuleReduxContainer";
import LessonContainer from "../LessonTabsComponent/LessonReduxContainer";
import TopicPillsContainer from "../TopicPillsComponent/TopicPillsReduxContainer";
import  {findModulesForCourse} from "../../actions/moduleActions"
import {connect} from "react-redux";
import {findCourseById} from "../../actions/courseActions"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {findLessonsForModule} from "../../actions/lessonActions";
import {Link} from "react-router-dom";
import {findTopicsForLesson} from "../../actions/topicsActions";
import WidgetList from "../WidgetListComponent/WidgetList";
import {createWidgetForTopic, findWidgetsForTopic} from "../../actions/widgetActions";

class CourseEditor extends React.Component{

    componentDidMount() {
        const {courseId,moduleId,lessonId, topicId } = this.props.match.params
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {this.props.findLessonsForModule(moduleId) }
        if(lessonId) {this.props.findTopicsForLesson(lessonId) }
        if(topicId) {this.props.findWidgetsForTopic(topicId) }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       const {moduleId, lessonId, topicId} = this.props.match.params
        const previousModuleId = prevProps.match.params.moduleId
        const prevLessonId = prevProps.match.params.lessonId
        const prevTopicId = prevProps.match.params.topicId

        if(moduleId !== previousModuleId) {
            this.props.findLessonsForModule(this.props.match.params.moduleId)
        }
        if(lessonId !== prevLessonId) {
            this.props.findTopicsForLesson(this.props.match.params.lessonId)
        }
        if(topicId !== prevTopicId) {
            this.props.findWidgetsForTopic(topicId)
        }
    }


    render() {
      return (<div className="container-fluid p-0">
                <nav className="wbdv-nav navbar navbar-expand-md  navbar-dark">

                    <div className=" wbdv-course-title">
                        <Link to="/table" ><FontAwesomeIcon icon={faTimes}
                                                      className="module-delete-btn exit"/></Link>
                        <span className="mr-auto "> {this.props.course.title}</span></div>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <LessonContainer url={this.props.match.params} className="mr-auto"/>

                </nav>


                <div className="row">
                    <nav className="wbdv-nav-module navbar navbar-expand-md navbar-dark col-sm-12 col-md-auto">
                        <button className="navbar-toggler wbdv-module-title " type="button" data-toggle="collapse"
                                data-target="#modules" aria-controls="modules"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span >Modules</span>
                        </button>
                        <ModuleContainer url={this.props.match.params} />
                    </nav>
                    <div className="col-8">
                    <TopicPillsContainer url={this.props.match.params} />
                    <WidgetList url={this.props.match.params} />
                    </div>
                </div>


            </div>
        )
    }

}

const stateToProperty = (state) => ({
    course: state.courseReducer.course,
})
const propertyToDispatchMapper = (dispatch) => ({
    findModulesForCourse: (id) => findModulesForCourse(dispatch, id),
    findCourseById: (courseId) => findCourseById(dispatch,courseId),
    findLessonsForModule: (moduleId) => findLessonsForModule(dispatch,moduleId),
    findTopicsForLesson: (lessonId) => findTopicsForLesson(dispatch, lessonId),
    findWidgetsForTopic: (topicId) => findWidgetsForTopic(dispatch,topicId),

})

export default connect(stateToProperty, propertyToDispatchMapper)(CourseEditor)

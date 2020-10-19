import React from 'react';
import "./CourseEditor.style.css"
import ModuleContainer from "../../containers/ModuleContainer";
import LessonContainer from "../../containers/LessonContainer";
import TopicPillsContainer from "../../containers/TopicPillsContainer";
import  {findModulesForCourse} from "../../actions/moduleActions"
import {connect} from "react-redux";
import {findCourseById} from "../../actions/courseActions"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {findLessonsForModule} from "../../actions/lessonActions";
import {Link} from "react-router-dom";
import {findTopicsForLesson} from "../../actions/topicsActions";

class CourseEditor extends React.Component{

    state={
     course: this.props.course
    }
    componentDidMount() {
        const {courseId,moduleId,lessonId } = this.props.match.params
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {this.props.findLessonsForModule(moduleId) }
        if(lessonId) {this.props.findTopicsForLesson(lessonId) }


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       const {moduleId, lessonId} = this.props.match.params
        const previousModuleId = prevProps.match.params.moduleId
        const prevLessonId = prevProps.match.params.lessonId
        if(moduleId !== previousModuleId) {
            this.props.findLessonsForModule(this.props.match.params.moduleId)
        }
        if(lessonId !== prevLessonId) {
            this.props.findTopicsForLesson(this.props.match.params.lessonId)
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
                    <TopicPillsContainer url={this.props.match.params} className="col-8"/>
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
})

export default connect(stateToProperty, propertyToDispatchMapper)(CourseEditor)

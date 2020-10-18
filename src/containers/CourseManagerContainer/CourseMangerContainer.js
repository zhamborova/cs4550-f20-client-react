import React from 'react'
import "./CourseMangerContainer.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import CourseTableContainer from "../../containers/CourseTableContainer/CourseTableContainer";
import courseService from "../../services/CourseService";
import CourseGridContainer from "../../containers/CourseGridContainer/CourseGridContainer";
import {Link} from "react-router-dom";
class CourseManager extends  React.Component{
    state = {
        isListView: this.props.match.params.view === "table",
        newCourseTitle: "New Course",
        courses:[],
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({
                courses: courses
            }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let {view} = this.props.match.params
        if(prevProps.match.params.view !== this.props.match.params.view){
            this.setState({isListView: view})
        }
    }

    createCourse = (name="New Course") => {
        const date = new Date()
        const newCourse = {
            title: name,
            owner: 'me',
            lastUpdated:  date.toLocaleDateString()
        }

        courseService.createCourse(newCourse)
            .then(actualCourse => this.setState(function (prevState) {
                    return {
                        courses: [
                            ...prevState.courses, actualCourse
                        ]
                    }
                })
            )
            .catch(error => {})
    }

    changeView = () =>{
        this.setState({isListView: !this.state.isListView})
    }

    render() {
      return <div>
          <nav className="navbar navbar-dark bg-primary">
          <button className="navbar-toggler wbdv-field wbdv-hamburger" type="button" data-toggle="collapses"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
              </span>
          </button>
          <Link to={"/list"} className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</Link>

          <input className="form-control mr-sm-2 wbdv-field wbdv-new-course"
                 type="text"
                 placeholder="New Course Title"
                 value={this.state.newCourseTitle}
            onChange={(e)=>{this.setState({newCourseTitle:e.target.value})}}/>
              <button className="btn wbdv-button wbdv-add-course" type="submit"
                      onClick={()=> {this.setState({newCourseTitle:"New Course"});
                                    this.createCourse(this.state.newCourseTitle);
                                  }}>
              <FontAwesomeIcon icon={faPlusCircle} />
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                  </ul>
              </div>

          </nav>

          {this.state.isListView === "table" ?
          <CourseTableContainer courses={this.state.courses} changeView={this.changeView}/> :
          <CourseGridContainer courses={this.state.courses} changeView={this.changeView} />
          }
          <span className="add-btn wbdv-button"
                onClick={()=>this.createCourse()}>
          <FontAwesomeIcon icon={faPlusSquare}/>
        </span>
      </div>
  }


}

export  default  CourseManager;

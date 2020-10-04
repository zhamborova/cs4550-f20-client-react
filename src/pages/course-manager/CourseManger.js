import React from 'react'
import "./CourseManger.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import CourseTableComponent from "../../components/CourseTableComponent/CourseTableComponent";
import courseService from "../../services/CourseService";
import CourseGridComponent from "../../components/CourseGridComponent/CourseGridComponent";
class CourseManager extends  React.Component{
    state = {
        isListView: false,
        newCourseTitle: "",
        courses:[],
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({
                courses: courses
            }))
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
          <a className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</a>

          <input className="form-control mr-sm-2 wbdv-field wbdv-new-course"
                 type="text"
                 placeholder="New Course Title"
                 value={this.state.newCourseTitle}
            onChange={(e)=>{this.setState({newCourseTitle:e.target.value})}}/>
              <button className="btn wbdv-button wbdv-add-course" type="submit"
                      onClick={()=> {this.setState({newCourseTitle:""});
                                    this.createCourse(this.state.newCourseTitle);
                                  }}>
              <FontAwesomeIcon icon={faPlusCircle} />
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                  </ul>
              </div>

          </nav>

          {this.state.isListView ?
          <CourseTableComponent courses={this.state.courses} changeView={this.changeView}/> :
          <CourseGridComponent courses={this.state.courses} changeView={this.changeView} />
          }
          <span className="add-btn wbdv-button"
                onClick={()=>this.createCourse()}>
          <FontAwesomeIcon icon={faPlusSquare}/>
        </span>
      </div>
  }


}

export  default  CourseManager;

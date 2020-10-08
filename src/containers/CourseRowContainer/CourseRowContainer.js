import React from "react";
import {updateCourse} from "../../services/CourseService";
import {faCheckSquare, faFileAlt, faPenAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./CourseRowContainer.style.css"
import {Link} from "react-router-dom";


class CourseRowContainer extends React.Component {
  state = {
    editing: false,
    courseTitle: "",
    course: this.props.course
  }

  constructor(props) {
    super(props)
  }

  updateTitle = (event) => {
    const newTitle = event.target.value
    const course = { ...this.state.course }
    course.title = newTitle
    this.setState({
      course: course
    })
  }

  updateCourse = () => {
    this.setState({editing: false})
    updateCourse(this.state.course._id, this.state.course)
    this.forceUpdate()
  }

  render() {
    const highlighted = `${this.state.editing ? ` highlighted`: ``}`
    return (
        <tr className="row flex-nowrap wbdv-row wbdv-course" >
          <td className={"col-sm-6 "+ highlighted }>
            <React.Fragment>
                 <span className=" wbdv-row wbdv-icon">
                   <FontAwesomeIcon icon={faFileAlt}/>
               </span>
          {
            this.state.editing === true &&
            <input
              className="form-group ml-1 mb-0"
              onChange={this.updateTitle}
              value={this.state.course.title}/>
          }
          {
            this.state.editing === false &&

            <Link to={`editor/${this.state.course._id}`} className="wbdv-row wbdv-title">
            {this.state.course.title}</Link>

          }
          </React.Fragment>
        </td>

          <td className={"col-2  d-none d-sm-block wbdv-row wbdv-owner" + highlighted }>{this.props.course.owner}</td>
          <td className="col-3 d-sm-block d-md-none"/>
          <td className={"col-3 d-none d-md-block wbdv-row wbdv-modified-date" + highlighted }>
          {this.props.course.lastUpdated}</td>

          <td className={"col-2  wbdv-row wbdv-button wbdv-delete" + highlighted }>
          <span className="mr-1" onClick={() => this.props.deleteCourse(this.props.course)}>
            X
          </span>
          {
            this.state.editing &&
            <span onClick={this.updateCourse}>
              <FontAwesomeIcon icon={faCheckSquare}/>
            </span>
          }
          {
            !this.state.editing &&
            <span onClick={() => this.setState({editing: true})}>
             <FontAwesomeIcon icon={faPenAlt}/>
            </span>
          }
          </td>
        </tr>
    );
  }
}

export default CourseRowContainer

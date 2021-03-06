import React from "react";
import {updateCourse} from "../../services/CourseService";
import {faCheckSquare, faFileAlt, faPenAlt,faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./CourseCardContainer.style.css"
import {Link} from "react-router-dom";

class CourseCardComponent extends React.Component {
    state = {
        editing: false,
        courseTitle: "",
        course: this.props.course
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

        let columns = "col-xs-12 col-sm-5 col-md-3 col-lg-c col-xl-2"
        return (<div className={"card m-1 wbdv-card "+ columns} >
                <img className="card-img-top" alt={""}
                     src="https://lh3.google.com/u/0/d/1BWKOyq9agNMsd2n_c3XShuR5T5yVXKSpsFQk9uS1M_Y=w416-iv134" />
                    <div className="card-body">

                            {this.state.editing ?
                                <input
                                    className="form-group ml-1 mb-0"
                                    onChange={this.updateTitle}
                                    value={this.state.course.title}/> :
                                <Link to={`/editor/courses/${this.state.course._id}`}
                                      className="wbdv-card wbdv-title card-title">
                                    {this.state.course.title}</Link>
                            }


                        <div className="d-flex align-items-center">
                            <span className="wbdv-icon"><FontAwesomeIcon icon={faFileAlt}/></span>
                        <small className="wbdv-last-modified card-subtitle text-muted ml-1 mr-auto mt-0"> Modified {this.props.course.lastUpdated}

                        </small>
                            <FontAwesomeIcon icon={faTrash} className="ml-auto" onClick={() => this.props.deleteCourse(this.props.course)}/>
                            {
                                this.state.editing ?
                                <FontAwesomeIcon className="ml-1" icon={faCheckSquare} onClick={this.updateCourse}/> :
                                 <FontAwesomeIcon className="ml-1" icon={faPenAlt} onClick={() => this.setState({editing: true})}/>
                            }


                        </div>
                    </div>

            </div>);
    }
}

export default CourseCardComponent;

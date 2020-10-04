import React from "react";
import {updateCourse} from "../../services/CourseService";
import {faCheckSquare, faFileAlt, faPenAlt,faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  "./CourseCard.style.css"

class CourseCardComponent extends React.Component {
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
        console.log("here")
        return (<div className="card col-auto m-2 " style={{"width": "18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">

                            {this.state.editing ?
                                <input
                                    className="form-group ml-1 mb-0"
                                    onChange={this.updateTitle}
                                    value={this.state.course.title}/> :
                                <p className="wbdv-card wbdv-title card-title"> {this.state.course.title}</p>
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

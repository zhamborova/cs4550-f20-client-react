import React from "react";
import courseService from "../../services/CourseService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons";
import CourseCardComponent from "../CourseCardContainer/CourseCardContainer";
import "./CourseGridContainer.style.css"
import {Link} from "react-router-dom";
class CourseGridContainer extends React.Component{
    state = {
       courses:[]
    }


    componentDidMount() {
        this.setState({
            courses: this.props.courses
        })
    }

    componentDidUpdate(prevProps) {

        if (this.props.courses.length !== prevProps.courses.length) {
            this.setState({
                courses: this.props.courses
            })
        }
    }


    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
            .then(status => this.setState(prevState => ({
                courses: prevState.courses.filter(c => c._id !== course._id)
            })))
    }

    render() {

        return(
            <div className="container-fluid">

                    <div className="wbdv-grid wbdv-headers row">
                        <p className="col-6 mr-auto pl-0 wbdv-header wbdv-title">Recent Documents</p>
                        <p className="col-2 wbdv-header wbdv-owner">Owned by </p>
                        <Link to="/table" className="col-1 wbdv-button wbdv-list-layout" >
                            <FontAwesomeIcon icon={faList} />
                        </Link>
                        <p className="col-1 wbdv-header wbdv-sort">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="28" height="28" x="0" y="0"
                                 viewBox="0 0 432 432" style={{"enableBackground":"new 0 0 512 512"}} ><g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <g>
                                            <polygon points="234.24,9.067 183.893,59.413 284.587,59.413    " fill="#727272" data-original="#000000"
                                            />
                                            <polygon
                                                points="301.44,304.32 427.947,120.853 427.947,93.973 250.88,93.973 250.88,128.107 376.32,128.107 250.027,310.72      250.027,338.24 432,338.24 432,304.32    "
                                                fill="#727272" data-original="#000000" />
                                            <polygon points="234.24,422.933 283.947,373.227 184.533,373.227    " fill="#727272" data-original="#000000"
                                            />
                                            <path
                                                d="M226.773,338.24L130.987,93.76H96L0,338.24h39.253l19.627-52.267h109.013l19.627,52.267H226.773z M71.893,250.987     L113.28,140.48l41.387,110.507H71.893z"
                                                fill="#727272" data-original="#000000" />
                                        </g>
                                    </g>
                                </g>

                            </g></svg>
                        </p>

                </div>

                <div className="row justify-content-center wbdv-cards-container pt-2 pb-2">
                    {
                        this.state.courses.map(course =>
                            <CourseCardComponent
                                key={course._id}
                                deleteCourse={this.deleteCourse}
                                course={course}/>
                        )

                    }

                </div>

            </div>
        )
    }
}

export default  CourseGridContainer;

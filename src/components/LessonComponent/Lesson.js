import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";




class Lesson extends React.Component{
    state={
        input: this.props.lesson.title,
        editing: false
    }


   render(){
       let {lesson,updateLesson, deleteLesson,course, moduleId,lessonCurrent,
        resetLesson} = this.props;
       let active = lessonCurrent === lesson._id || lesson.editing ? `active`: ``

       return  <li className={`nav-item wbdv-lesson-tab ${active}`} >
        {this.state.editing ?
            <>
                <input className=" form-control wbdv-lesson-input"
                       value={this.state.input}
                       onChange={(event) => this.setState({input: event.target.value})}/>
                <FontAwesomeIcon icon={faCheck} className="lesson-update-btn"
                                 onClick={()=>{updateLesson({...lesson,
                                                            title: this.state.input});
                                      this.setState({editing:false})}}/>
                <FontAwesomeIcon onClick={()=> {deleteLesson(lesson._id);
                                                resetLesson()}} icon={faTimes}
                                 className="lesson-delete-btn"/>

            </> :

                <Link to={`/editor/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}
                      className="mr-1 nav-link">
                    {lesson.title}
                    <FontAwesomeIcon onClick={()=> this.setState({editing:true})}
                                     icon={faPenAlt} className="lesson-edit-btn mr-auto ml-2"/></Link>


        }

    </li>
 }
}

export default Lesson;

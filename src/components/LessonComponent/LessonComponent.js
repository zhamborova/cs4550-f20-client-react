import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";


const Lesson = ({lesson,updateLesson, deleteLesson}) => {

    return  <li className={`nav-item wbdv-lesson-tab ${lesson.editing? `active`: ``}`} >
        {lesson.editing ?
            <>
                <input className=" form-control wbdv-lesson-input"
                       value={lesson.title}
                       onChange={(event) => updateLesson({...lesson, title: event.target.value})}/>
                <FontAwesomeIcon icon={faCheck} className="lesson-update-btn"
                                 onClick={()=>{updateLesson({...lesson, editing:false})}}/>
                <FontAwesomeIcon onClick={()=> deleteLesson(lesson._id)} icon={faTimes}
                                 className="lesson-delete-btn"/>

            </> :

                <span className="mr-1 nav-link"> {lesson.title}
                    <FontAwesomeIcon onClick={()=> updateLesson({...lesson, editing:true})}
                                     icon={faPenAlt} className="lesson-edit-btn mr-auto ml-2"/></span>


        }

    </li>
}

export default Lesson;

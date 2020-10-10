import React, {createRef} from "react";
import './LessonTabs.style.css'
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LessonComponent from "../LessonComponent/LessonComponent";

const LessonTabs = ({lessons, updateLesson, deleteLesson, createLesson}) => {

   return (<div className="collapse navbar-collapse" id="navbarSupportedContent">

       <ul className="nav nav-tabs wbdv-lesson-tabs">
       {lessons.map((lesson) => {
           return (<LessonComponent lesson={lesson} key={lesson._id}
                                updateLesson={updateLesson}
                                deleteLesson={deleteLesson}/>)})
       }
       <li className="nav-item ">
           <FontAwesomeIcon icon={faPlus} className=" wbdv-add-lesson "
                                onClick={()=>(createLesson())}/>
       </li>

   </ul>

   </div>)

}

export default LessonTabs;

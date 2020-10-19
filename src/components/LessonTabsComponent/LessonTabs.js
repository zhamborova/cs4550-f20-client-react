import React from "react";
import './LessonTabs.style.css'
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LessonComponent from "../../containers/LessonContainer/Lesson";

const newLesson = {
    title: "New Lesson",
}


const LessonTabs = ({lessons, updateLesson, deleteLesson, createLesson, url}) => {
   return url.moduleId? ( <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="nav nav-tabs wbdv-lesson-tabs">
           {lessons.map((lesson) => {
               return (<LessonComponent lesson={lesson} key={lesson._id}
                                        updateLesson={updateLesson}
                                        deleteLesson={deleteLesson}
                                        url={url}/>)
           })
           }
               <li className="nav-item ">
               <FontAwesomeIcon icon={faPlus} className=" wbdv-add-lesson "
                                onClick={()=>(createLesson(url.moduleId, newLesson))}/>
               </li>
   </ul>

   </div> ) : null

}

export default LessonTabs;

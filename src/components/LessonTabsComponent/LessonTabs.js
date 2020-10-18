import React from "react";
import './LessonTabs.style.css'
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LessonComponent from "../LessonComponent/Lesson";

const newLesson = {
    title: "New Lesson",
}


const LessonTabs = ({lessons, updateLesson, deleteLesson,
                        createLesson, moduleId, course, lessonCurrent,
                     resetLesson, topics}) => {
   return moduleId ? ( <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="nav nav-tabs wbdv-lesson-tabs">
           {lessons.map((lesson) => {
               return (<LessonComponent lesson={lesson} key={lesson._id}
                                        updateLesson={updateLesson}
                                        deleteLesson={deleteLesson}
                                        moduleId={moduleId}
                                        course={course}
                                        lessonCurrent={lessonCurrent}
                                        resetLesson={resetLesson}
                                        topics={topics}/>)
           })
           }
               <li className="nav-item ">
               <FontAwesomeIcon icon={faPlus} className=" wbdv-add-lesson "
                                onClick={()=>(createLesson(moduleId, newLesson))}/>
               </li>
   </ul>

   </div> ) : null

}

export default LessonTabs;

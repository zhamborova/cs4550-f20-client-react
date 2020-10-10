import React from "react";
import './LessonTabs.style.css'
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LessonTabs = ({lessons}) => {

   return (<div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="nav nav-tabs wbdv-lesson-tabs">
       {lessons.map((lesson,i) => {
           return (
               <li className="nav-item">
                   <a href="#" className={`nav-link  ${i==3 ? ` active`: `` }`}>{lesson.title}</a>
               </li>)
       })
       }
       <li className="nav-item ">
           <FontAwesomeIcon icon={faPlus} className=" wbdv-add-lesson "/>
       </li>

   </ul>

   </div>)

}

export default LessonTabs;

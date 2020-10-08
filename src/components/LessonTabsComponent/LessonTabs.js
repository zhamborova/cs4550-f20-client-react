import React from "react";
import './LessonTabs.style.css'
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LessonTabs = () => {

   return (<div className="collapse navbar-collapse" id="navbarSupportedContent">

       <ul className="nav nav-tabs wbdv-lesson-tabs">
       {[1, 2, 3, 4, 5].map((i) => {
           return (
               <li className="nav-item">
                   <a href="#" className={`nav-link  ${i==4 ? ` active`: `` }`}>Lesson {i}</a>
               </li>)
       })
       }
       <li className="nav-item">
           <FontAwesomeIcon icon={faPlus} className="ml-auto wbdv-add-lesson "/>
       </li>

   </ul>

   </div>)

}

export default LessonTabs;

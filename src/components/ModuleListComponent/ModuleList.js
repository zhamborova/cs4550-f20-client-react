import React from "react";
import "./ModuleList.style.css"
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ModuleComponent from "../ModuleComponent/Module";

const newModule = {
    title: "New Module",
    editing: false
}



const ModuleList = ({modules,deleteModule, updateModule, createModule, course, moduleCurrent}) =>{

    return (<ul className="list-group wbdv-module-list" id="modules">
            {modules.map((module) => {
                return <ModuleComponent key={module._id}
                                         deleteModule={deleteModule}
                                         updateModule={updateModule}
                                         module={module}
                                         course={course}
                                         moduleCurrent={moduleCurrent}/>
               })
            }
            <li className="list-group-item d-flex">
            <FontAwesomeIcon icon={faPlus}
                             className="ml-auto wbdv-add-module"
                             onClick={() => createModule(course._id, newModule)}/>
            </li>
            </ul>
    )
}

export default ModuleList;


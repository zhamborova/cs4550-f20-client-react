import React from "react";
import "./ModuleList.style.css"
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ModuleComponent from "../../containers/ModuleContainer/Module";

const newModule = {
    title: "New Module",
}



const ModuleList = ({modules,deleteModule, updateModule, createModule, url}) =>{

    return (<ul className="list-group wbdv-module-list" id="modules">
            {modules.map((module) => {
                return <ModuleComponent key={module._id}
                                         deleteModule={deleteModule}
                                         updateModule={updateModule}
                                         module={module}
                                         url={url}/>
               })
            }
            <li className="list-group-item d-flex">
            <FontAwesomeIcon icon={faPlus}
                             className="ml-auto wbdv-add-module"
                             onClick={() => createModule(url.courseId, newModule)}/>
            </li>
            </ul>
    )
}

export default ModuleList;


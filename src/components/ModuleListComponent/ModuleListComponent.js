import React from "react";
import "./ModuleList.style.css"
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ModuleComponent from "../ModuleComponent/ModuleComponent";



const ModuleList = ({modules,deleteModule, updateModule, createModule}) =>{

    return (<ul className="list-group wbdv-module-list" id="modules">
            {modules.map((module) => {
                return <ModuleComponent key={module._id}
                                         deleteModule={deleteModule}
                                         updateModule={updateModule}
                                         module={module}/>
               })
            }
            <li className="list-group-item d-flex">
            <FontAwesomeIcon icon={faPlus}
                             className="ml-auto wbdv-add-module"
                           onClick={()=>(createModule())}/>
            </li>
            </ul>
    )
}

export default ModuleList;


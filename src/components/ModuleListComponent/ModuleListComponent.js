import React from "react";
import "./ModuleList.style.css"
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const ModuleList = () =>{

    return (
        <ul className="list-group wbdv-module-list" id="modules">
            {[1, 2, 3, 4, 5].map((i) => {
                return (<li className={`list-group-item ${i==2 ? `active`: `` }`}>Module {i}
                    <FontAwesomeIcon icon={faTimes} className="float-right module-add-btn"/></li>)
            })
            }
            <li className="list-group-item d-flex">
            <FontAwesomeIcon icon={faPlus} className="ml-auto wbdv-add-module"/>
            </li>
            </ul>
    )
}

export default ModuleList;

import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";

const Module = ({module, updateModule, deleteModule}) => {
    return <li className={`list-group-item d-flex `} key={module._id}>
          {module.editing ?
            <>
                <input className="input-group mr-auto w-75"
                       value={module.title}
                       onChange={(event) => updateModule({...module, title: event.target.value})}/>
                <FontAwesomeIcon icon={faCheck} className="module-update-btn"
                                 onClick={()=>{updateModule({...module, editing:false})}}/>
            </> :
           <>
                <span className="mr-auto"> {module.title + " "} </span>
                <FontAwesomeIcon onClick={()=> updateModule({...module, editing:true})}
                                 icon={faPenAlt} className="module-edit-btn"/>
            </>
        }
        <FontAwesomeIcon onClick={()=> deleteModule(module._id)} icon={faTimes}
                         className="module-delete-btn"/>

    </li>
}

export default Module;

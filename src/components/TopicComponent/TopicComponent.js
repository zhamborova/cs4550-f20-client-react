import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";

const Topic = ({topic, updateTopic, deleteTopic}) => {
    let edit = topic.editing;

    return <li className={`nav-item d-flex wbdv-pill pr-0 ${edit ? `active` : ``}`} >
        {edit ?
            <>
                <input className="input-group form-control w-75"
                       value={topic.title}
                       onChange={(event) => updateTopic({...topic, title: event.target.value})}/>
                <FontAwesomeIcon icon={faCheck} className="topic-update-btn"
                                 onClick={()=> updateTopic({...topic, editing:false})}/>
                <FontAwesomeIcon onClick={()=> deleteTopic(topic._id)} icon={faTimes}
                                 className="topic-delete-btn"/>

            </> :
            <>
                <span className="nav-link mr-auto"> {topic.title + " "} </span>
                <FontAwesomeIcon onClick={()=> updateTopic({...topic, editing:true})}
                                 icon={faPenAlt} className="topic-edit-btn"/>
            </>
        }

    </li>
}

export default Topic;

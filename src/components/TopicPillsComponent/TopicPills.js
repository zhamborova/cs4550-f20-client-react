import React from "react";
import "./TopicPills.style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Topic from "../../containers/TopicContainer/Topic";

const newTopic = {
    title: "New Topic",
}

const TopicPills = ({topics, updateTopic, createTopic, deleteTopic, url}) => {


   return url.lessonId ? (<ul className="nav nav-pills wbdv-pills">
            {topics.map((topic) => {
                return <Topic topic={topic} key={topic._id}
                              updateTopic={updateTopic}
                              deleteTopic={deleteTopic}
                         />
            })}

            <li className="nav-item">
                <FontAwesomeIcon icon={faPlus} className="wbdv-add-topic ml-auto "
                                 onClick={()=> {createTopic(url.lessonId, newTopic)}}/>

            </li>

        </ul>
    ) : null
}
export default TopicPills;

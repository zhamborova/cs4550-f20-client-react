import React from "react";
import "./TopicPills.style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Topic from "../TopicComponent/TopicComponent";
import {createTopic, deleteTopic, updateTopic} from "../../actions/topicsActions";
import {connect} from "react-redux";

const TopicPills = ({topics, updateTopic, createTopic, deleteTopic}) => {

    return (
        <ul className="nav nav-pills wbdv-pills">
            {topics.map((topic) => {
                return <Topic topic={topic} key={topic._id}
                              updateTopic={updateTopic}
                              deleteTopic={deleteTopic}
                         />
            })}

            <li className="nav-item">
                <FontAwesomeIcon icon={faPlus} className="wbdv-add-topic ml-auto "
                                 onClick={()=> {createTopic()}}/>

            </li>

        </ul>
    )
}
export default TopicPills;

import React from "react";
import "./TopicPills.style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";

const TopicPills = ({topics}) => {

    return (
        <ul className="nav nav-pills wbdv-pills">
            {topics.map((topic,i) => {
                return (
                    <li className="nav-item">
                        <a href="#" className={`nav-link  ${i===2 ? ` active`: `` }`}>{topic.title}</a>
                    </li>)
            })
            }

            <li className="nav-item">
                <FontAwesomeIcon icon={faPlus} className="wbdv-add-topic ml-auto "/>

            </li>

        </ul>
    )
}

export default TopicPills;

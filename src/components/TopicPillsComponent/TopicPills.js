import React from "react";
import "./TopicPills.style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";

const TopicPills = () => {

    return (
        <ul className="nav nav-pills wbdv-pills">
            {[1, 2, 3, 4, 5].map((i) => {
                return (
                    <li className="nav-item">
                        <a href="#" className={`nav-link  ${i==2 ? ` active`: `` }`}>Topic {i}</a>
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

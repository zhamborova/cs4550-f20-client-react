import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import './Topic.css'
class Topic extends React.Component{
  state={
      input: this.props.topic.title,
      editing:false
  }


    render() {
        let {topic, updateTopic, deleteTopic, url}  = this.props
        let edit = this.state.editing;
        let active = url.topicId === topic._id || edit ? ` active` : ``



        return <li className={`nav-item d-flex wbdv-pill pr-0 `} >
        {edit ?
            <>
                <input className="input-group form-control w-75"
                       value={this.state.input}
                       onChange={(event) => this.setState({input: event.target.value})}/>
                <FontAwesomeIcon icon={faCheck} className="topic-update-btn"
                                 onClick={()=> {updateTopic({...topic, title:this.state.input});
                                                this.setState({editing:false})}}/>
                <FontAwesomeIcon onClick={()=> deleteTopic(topic._id)} icon={faTimes}
                                 className="topic-delete-btn"/>

            </> :
            <>
                <Link to={`/editor/courses/${url.courseId}/modules/${url.moduleId}/lessons/${url.lessonId}/topics/${topic._id}`}
                      className={`nav-link mr-auto ${active}`}> {topic.title + " "} </Link>
                <FontAwesomeIcon onClick={()=> this.setState({editing:true})}
                                 icon={faPenAlt} className="topic-edit-btn"/>
            </>
        }

    </li>}
}

export default Topic;

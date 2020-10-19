import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import './Module.css'


class Module extends React.Component{
    state={
        input: this.props.module.title,
        editing: false
    }

    render() {
    let {module, updateModule, deleteModule, url,} = this.props;
    let edit = this.state.editing
    let active = url.moduleId === module._id || edit ? `active` : ``


    return<li className={`list-group-item d-flex ${active}`}
              key={module._id}>
        {edit ?
            <>
                <input className="input-group form-control mr-auto w-75"
                       value={this.state.input}
                       onChange={(event) => this.setState({ input: event.target.value})}/>
                <FontAwesomeIcon icon={faCheck} className="module-update-btn"
                                 onClick={()=>{updateModule({...module,
                                     title: this.state.input});
                                     this.setState({editing:false})}}/>
                <Link to={`/editor/courses/${url.courseId}`}
                      className="module-delete-btn">
                    <FontAwesomeIcon onClick={()=> deleteModule(module._id)} icon={faTimes}
                                     />
                </Link> </> :
           <>
                <Link to={`/editor/courses/${url.courseId}/modules/${module._id}`}
                      className="mr-auto">{module.title + " "} </Link>
                <FontAwesomeIcon onClick={()=> this.setState({editing:true})}
                                 icon={faPenAlt} className="module-edit-btn"/>
            </>
        }

    </li>
}}


export default Module;

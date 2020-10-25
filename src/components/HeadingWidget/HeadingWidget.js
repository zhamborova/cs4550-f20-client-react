import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import "./HeadingWidget.css"


class HeadingWidget extends React.Component {

    state={
        text:"",
        widgetName:"",
        size:"",
        editing: false
    }

    render(){
        return(<div className="heading-container">
                <div className="heading-menu d-flex mb-2">
                    <h3>Heading widget</h3>
                    {this.state.editing ?
                        <>
                            <select  className=" widget-type form-control w-25 mb-2">
                                <option>Paragraph</option>
                                <option> Heading </option>
                            </select>
                            <FontAwesomeIcon icon={faCheck} className="widget-update-btn "
                                             onClick={()=> this.setState({editing:false}) }/>
                            <FontAwesomeIcon  icon={faTimes} className="widget-delete-btn"/></>:
                        <>
                            <FontAwesomeIcon  onClick={()=> this.setState({editing:true})}
                                              icon={faPenAlt} className="widget-edit-btn"/>
                        </>
                    }
                </div>
                <div className="heading-inputs mb-2">
                    {this.state.editing ?
                        <>
                            <input className="form-control heading-text mb-2"
                                   placeholder="Heading text"
                                   value= {this.state.text}
                                   onChange={(e)=> this.setState({text:e.target.value})}/>

                            <select className="form-control  mb-2" >
                                <option value={"h1"}>Heading 1</option>
                                <option value={"h2"}>Heading 2</option>
                                <option value={"h3"}>Heading 3</option>
                                <option value={"h4"}>Heading 4</option>
                                <option value={"h5"}>Heading 5</option>
                                <option value={"h6"}>Heading 6</option>
                            </select>
                            <input  className="widget-name form-control mb-2"
                                    placeholder="Widget Name"
                                    value={this.state.widgetName}
                                    onChange={(e)=>{this.setState({widgetName:e.target.value})}}/></>
                         : null }
                </div>
                <div className="heading-preview">
                    {this.state.editing ? <h4>Preview</h4> : null}
                    <p>{this.state.text}</p>

                </div>
            </div>
        )
    }
}

export default HeadingWidget;

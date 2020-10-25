import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import "./ParagraphWidget.css"


class ParagraphWidget extends React.Component {

    state={
        text:"",
        widgetName:"",
        editing: false
    }

    render(){
      return(<div className="paragraph-container">
            <div className="paragraph-menu d-flex mb-2">
                <h3>Paragraph widget</h3>
                {this.state.editing ?
                <>
                <select  className=" widget-type form-control w-25">
                    <option>Paragraph</option>
                    <option> Heading </option>
                </select>
                <FontAwesomeIcon icon={faCheck} className="module-update-btn"
                                     onClick={()=> this.setState({editing:false}) }/>
                <FontAwesomeIcon  icon={faTimes} className="widget-delete-btn"/></>:
                 <>
                     <FontAwesomeIcon  onClick={()=> this.setState({editing:true})}
                                      icon={faPenAlt} className="widget-edit-btn"/>
                 </>
                }
            </div>
            <div className="paragraph-inputs mb-2">
                {this.state.editing ?
                    <>
                    <textarea className="paragraph-text form-control mb-2 "
                      placeholder="Paragraph text "
                      value={this.state.text}
                      onChange={(e)=>{this.setState({text:e.target.value})}}/>
            <input  className="widget-name form-control"
                    placeholder="Widget Name"
                    value={this.state.widgetName}
                    onChange={(e)=>{this.setState({widgetName:e.target.value})}}/>
                    </> : null }
            </div>
            <div className="paragraph-preview">
                {this.state.editing ? <h4>Preview</h4> : null}
                <p>{this.state.text}</p>

            </div>
        </div>
     )
    }
}

export default ParagraphWidget;

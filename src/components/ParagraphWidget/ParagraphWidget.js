import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import "./ParagraphWidget.css"


class ParagraphWidget extends React.Component {

    state={
        className: null,
        height: null,
        html: null,
        id: "",
        name: "",
        order: 0,
        size: "",
        src: null,
        text: "",
        topicId: "",
        type: "PARAGRAPH",
        width: null,
    }

    componentDidMount() {
        this.setState({
            id: this.props.widget.id,
            text:this.props.widget.text,
            name: this.props.widget.name,
            size: this.props.widget.size,
            type: this.props.widget.type,
            order: this.props.widget.order,
            topicId: this.props.widget.topicId,
        })

    }
    render(){
      return(<div className="paragraph-container">
            <div className="paragraph-menu d-flex mb-2">
                <h3>Paragraph widget</h3>
                {this.state.editing ?
                <><select className=" widget-type form-control w-25 mb-2"
                            value={this.state.type}
                            onChange={(e) => this.setState({type: e.target.value})}>
                        <option value="HEADING"> Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                    </select>

                    {this.props.widget.order !== 0 ?
                        <FontAwesomeIcon icon={faArrowUp} className="widget-up-btn"
                                         onClick={()=> this.props.moveWidgetUp(this.props.widget.order)}
                        />: null}
                    {this.props.lastIndex !== this.props.widget.order ?
                        <FontAwesomeIcon icon={faArrowDown} className="widget-down-btn"
                                         onClick={()=> {
                                             this.props.moveWidgetDown(this.props.widget.order)}}
                        /> : null}
                    <FontAwesomeIcon icon={faCheck} className="widget-update-btn "
                                     onClick={() => {
                                         this.setState({editing: false});
                                         this.props.updateWidget(this.state)
                                     }}/>
                    <FontAwesomeIcon icon={faTimes}
                                     className="widget-delete-btn"
                                     onClick={() =>  this.props.deleteWidget(this.state.id)} />
                </>:
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
                    value={this.state.name}
                    onChange={(e)=>{this.setState({name:e.target.value})}}/>
                    </> : null }
            </div>
            <div className="paragraph-preview">
                {this.state.editing ?
                    <h4>Preview</h4> :
                    null}
                <p>{this.state.text}</p>

            </div>
        </div>
     )
    }
}

export default ParagraphWidget;

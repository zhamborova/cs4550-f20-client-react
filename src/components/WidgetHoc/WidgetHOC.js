import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import "../ParagraphWidget/ParagraphWidget.css"
import './WidgetHOC.css'

export const withState = (Component,widget, deleteWidget, updateWidget,
                          moveWidgetUp, moveWidgetDown,lastIndex) => {
    return class extends React.Component {
        state = {
            id: widget.id,
            text:widget.text,
            name:widget.name,
            size: widget.size,
            widgetType: widget.widgetType,
            widgetOrder: widget.widgetOrder,
            topicId: widget.topicId,
            cssClass: widget.cssClass,
            src: widget.src,
            width: widget.width,
            height: widget.height,
            html: widget.html,
            editing: widget.editing

        }

    componentDidMount() {
        this.setState({...this.props.widget} )

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.widgetOrder !== widget.widgetOrder){
            this.setState({widgetOrder:widget.widgetOrder} )
        }
        if(prevState.editing !== widget.editing){
            this.setState({editing:widget.editing})
        }
    }

    setSize =(e) => this.setState({size: e.target.value})
    setText =(e) => this.setState({text: e.target.value})
    setName =(e) => this.setState({name: e.target.value})




        render(){

        return <div className="widget-container">
               <div className="widget-menu d-flex mb-2">
                <h3>{this.state.widgetType.toLowerCase()} widget</h3>
                {this.state.editing ?
                    <><select className=" widget-type form-control w-25 mb-2"
                              value={this.state.widgetType}
                              onChange={(e) => this.setState({widgetType: e.target.value})}>
                        <option value="HEADING"> Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                    </select>

                        {this.state.widgetOrder > 0 ?
                            <FontAwesomeIcon icon={faArrowUp} className="widget-up-btn"
                                             onClick={()=> moveWidgetUp(this.state)}
                            />: null}
                        {lastIndex > this.state.widgetOrder ?
                            <FontAwesomeIcon icon={faArrowDown} className="widget-down-btn"
                                             onClick={()=> {moveWidgetDown(this.state)}}
                            /> : null}
                        <FontAwesomeIcon icon={faCheck} className="widget-update-btn "
                                         onClick={() => {
                                             this.setState({editing: false},()=>{
                                                 updateWidget(this.state)
                                             });
                                         }}/>
                        <FontAwesomeIcon icon={faTimes}
                                         className="widget-delete-btn"
                                         onClick={() =>  deleteWidget(this.state.id)} />
                    </>:
                    <>
                        <FontAwesomeIcon  onClick={()=> this.setState({editing:true})}
                                          icon={faPenAlt} className="widget-edit-btn"/>
                    </>
                }
            </div>

            <Component setSize= {this.setSize}
                       setText = {this.setText}
                       setName = {this.setName}
                       name={this.state.name} text ={this.state.text}
                       size={this.state.size} editing={this.state.editing}/>

        </div>
    }
  }
}



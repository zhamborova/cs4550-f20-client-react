import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import "./HeadingWidget.css"


class HeadingWidget extends React.Component {

    state={
        className: null,
        height: null,
        html: null,
        id: "567",
        name: "Widget A",
        order: 0,
        size: "h1",
        src: null,
        text: "Lorem Ipsum",
        topicId: "5f8d56f05595540017f92454",
        type: "HEADING",
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


    render() {
        return (<div className="heading-container">
                <div className="heading-menu d-flex mb-2">
                    <h3>Heading widget</h3>
                    {this.state.editing ?
                        <>
                            <select className=" widget-type form-control w-25 mb-2"
                                    value={this.state.type}
                                    onChange={(e) => this.setState({type: e.target.value})}>
                                <option value="HEADING"> Heading</option>
                                <option value="PARAGRAPH">Paragraph</option>
                            </select>
                            <FontAwesomeIcon icon={faCheck} className="widget-update-btn "
                                             onClick={() => {
                                                 this.setState({editing: false});
                                                 this.props.updateWidget(this.state)
                                             }}/>
                            <FontAwesomeIcon icon={faTimes}
                                             className="widget-delete-btn"
                                             onClick={() =>  this.props.deleteWidget(this.state.id)} />

                        </> :
                        <>
                            <FontAwesomeIcon onClick={() => this.setState({editing: true})}
                                             icon={faPenAlt} className="widget-edit-btn"/>
                        </>
                    }
                </div>
                <div className="heading-inputs mb-2">
                    {this.state.editing ?
                        <>
                            <input className="form-control heading-text mb-2"
                                   placeholder="Heading text"
                                   value={this.state.text}
                                   onChange={(e) => this.setState({text: e.target.value})}/>

                            <select className="form-control mb-2"
                                    value={this.state.size}
                                    onChange={(e) => this.setState({size: e.target.value})}>

                                <option value={"h1"}>Heading 1</option>
                                <option value={"h2"}>Heading 2</option>
                                <option value={"h3"}>Heading 3</option>
                                <option value={"h4"}>Heading 4</option>
                                <option value={"h5"}>Heading 5</option>
                                <option value={"h6"}>Heading 6</option>
                            </select>
                            <input className="widget-name form-control mb-2"
                                   placeholder="Widget Name"
                                   value={this.state.name}
                                   onChange={(e) => {
                                       this.setState({name: e.target.value})
                                   }}/></>
                        : null}
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

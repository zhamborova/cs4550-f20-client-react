import React from "react";
import "./ListWidget.css"


class ListWidget extends React.Component{


   splitText = (txt) =>{

        return <ul className="list-bullets">
            {txt.split("\n").map(tx =>
                <li>{tx}</li>
            )}
             </ul>
    }


 render() {
     let {text, name, size, setSize, setText,setName, editing} = this.props
        return  <>
            <div className="list-inputs mb-2">
                {editing ?
                    <>
                    <textarea className="form-control list-text mb-2"
                              placeholder="Enter one list item per line"
                              value={text}
                              onChange={(e) => setText(e)}/>

                        <input className="widget-name form-control mb-2"
                               placeholder="Widget Name"
                               value={name}
                               onChange={(e) => setName(e)}
                        /></>
                    : null}
            </div>
            <div className="list-preview">
                {editing ? <h4>Preview</h4> : null}
                {this.splitText(text)}

            </div>

        </>
    }


}
export default ListWidget;

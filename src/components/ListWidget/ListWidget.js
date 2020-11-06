import React from "react";
import "./ListWidget.css"


class ListWidget extends React.Component{


   splitText = (txt, type) =>{
       const ListCustom = `${type}`;


        return <ListCustom className="list-bullets">
            {txt.split("\n").map(tx =>
                <li>{tx}</li>
            )}
             </ListCustom>
    }


 render() {
     let {text, name, setText,setName, editing, listType, setListType } = this.props
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
                        />
                        <select className="form-control mb-2"
                                value={listType}
                                onChange={(e) => setListType(e)}>

                            <option value={"ul"}>Unordered List</option>
                            <option value={"ol"}>Ordered List</option>

                        </select>

                        </>
                    : null}
            </div>
            <div className="list-preview">
                {editing ? <h4>Preview</h4> : null}
                {this.splitText(text, listType)}

            </div>

        </>
    }


}
export default ListWidget;

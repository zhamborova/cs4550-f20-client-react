import React from "react";
import "./ParagraphWidget.css"


const ParagraphWidget = ({text, name, setText, setName, editing}) =>{
      return(<>
            <div className="paragraph-inputs mb-2">
                {editing ?
                    <>
                    <textarea className="paragraph-text form-control mb-2 "
                      placeholder="Paragraph text "
                      value={text}
                      onChange={(e)=> setText(e)}/>
            <input  className="widget-name form-control"
                    placeholder="Widget Name"
                    value={name}
                    onChange={(e)=> setName(e)}/>
                    </> : null }
            </div>
            <div className="paragraph-preview">
                {editing ?
                    <h4>Preview</h4> :
                    null}
                <p>{text}</p>

            </div>
        </>
     )
}

export default ParagraphWidget;

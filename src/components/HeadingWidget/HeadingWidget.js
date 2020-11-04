import React from "react";
import "./HeadingWidget.css"


class HeadingWidget extends React.Component {

    render() {
        let {text, name, size, setSize, setText,setName, editing} = this.props;
        return <>
            <div className="heading-inputs mb-2">
                {editing ?
                    <>
                        <input className="form-control heading-text mb-2"
                               placeholder="Heading text"
                               value={text}
                               onChange={(e) => setText(e)}/>

                        <select className="form-control mb-2"
                                value={size}
                                onChange={(e) => setSize(e)}>

                            <option value={"h1"}>Heading 1</option>
                            <option value={"h2"}>Heading 2</option>
                            <option value={"h3"}>Heading 3</option>
                            <option value={"h4"}>Heading 4</option>
                            <option value={"h5"}>Heading 5</option>
                            <option value={"h6"}>Heading 6</option>
                        </select>
                        <input className="widget-name form-control mb-2"
                               placeholder="Widget Name"
                               value={name}
                               onChange={(e) => setName(e)}
                        /></>
                    : null}
            </div>
            <div className="heading-preview">
                {editing ? <h4>Preview</h4> : null}
                <p>{text}</p>

            </div>

        </>
    }
}

export default HeadingWidget;

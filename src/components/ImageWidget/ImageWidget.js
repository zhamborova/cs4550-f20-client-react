import React from "react";


class ImageWidget extends React.Component{

    render() {
        let { name, setName, editing, src, setSrc} = this.props
        return  <>
            <div className="image-inputs mb-2">
                {editing ?
                    <>
                        <input className="widget-src form-control mb-2"
                               placeholder="image src"
                               value={src}
                               onChange={(e) => setSrc(e)}
                        />

                        <input className="widget-name form-control mb-2"
                               placeholder="Widget Name"
                               value={name}
                               onChange={(e) => setName(e)}
                        />

                    </>
                    : null}
            </div>
            <div className="list-preview">
                {editing ? <h4>Preview</h4> : null}

                <img src={src}/>

            </div>

        </>
    }


}
export default ImageWidget;

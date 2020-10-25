import React from "react";
import ParagraphWidget from "../ParagraphWidget/ParagraphWidget";
import HeadingWidget from "../HeadingWidget/HeadingWidget";
import {connect} from "react-redux";
import {createWidgetForTopic} from "../../actions/widgetActions";


const selectWidget = (type, widget) => {

  switch (type) {
        case "HEADING":
            return   <HeadingWidget widget={widget}/>;
        case "PARAGRAPH" :
            return <ParagraphWidget widget={widget}/>

    }
}

const WidgetList = ({url, widgets}) => {
    return <ul className="container m-auto">
            {widgets.map(widget =>
                    <li key={widget.id}>
                        {selectWidget(widget.type, widget)}
                    </li>
                )
            }
        </ul>


}



const stateToPropMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
})

const dispatchMapper = (dispatch) => ({
    createWidgetForTopic: (topicId) => createWidgetForTopic(topicId)
})


export default connect(stateToPropMapper, dispatchMapper)(WidgetList)

import React from "react";
import ParagraphWidget from "../ParagraphWidget/ParagraphWidget";
import HeadingWidget from "../HeadingWidget/HeadingWidget";
import {connect} from "react-redux";
import {
    createWidgetForTopic,
    deleteWidget,
    moveWidgetDown,
    moveWidgetUp,
    updateWidget
} from "../../actions/widgetActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import "./WidgetList.css"
import {withState} from "../WidgetHoc/WidgetHOC";

const selectWidget = (type, widget, deleteWidget, updateWidget,
                      moveWidgetUp, moveWidgetDown, lastIndex) => {
    let component = null;

    switch (type) {
        case "HEADING":
            component = HeadingWidget;

        case "PARAGRAPH" :
           component= ParagraphWidget;

    }
    const NewComponent = withState(component,widget, deleteWidget,
        updateWidget, moveWidgetUp, moveWidgetDown, lastIndex);
    return <NewComponent />
}

const WidgetList = ({url, widgets, deleteWidget, updateWidget, createWidget, moveWidgetUp,
                        moveWidgetDown}) => {

    return url.topicId ? <ul className="container m-auto">
            {widgets.map(widget =>
                    <li key={widget.id}>
                        {selectWidget(widget.widgetType, widget, deleteWidget,
                            updateWidget, moveWidgetUp, moveWidgetDown, widgets.length -1)}
                    </li>
                )
            }
            <li>
                <FontAwesomeIcon icon={faPlus} className="widget-add-button"
                                 onClick={()=>{createWidget(url.topicId)}}/></li>
        </ul> : null


}



const stateToPropMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
})

const dispatchMapper = (dispatch) => ({
    createWidget: (topicId) => createWidgetForTopic(dispatch,topicId),
    deleteWidget: (widgetId) => deleteWidget(dispatch, widgetId),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    moveWidgetUp: (index) => moveWidgetUp(dispatch, index),
    moveWidgetDown: (index) => moveWidgetDown(dispatch, index)
})


export default connect(stateToPropMapper, dispatchMapper)(WidgetList)

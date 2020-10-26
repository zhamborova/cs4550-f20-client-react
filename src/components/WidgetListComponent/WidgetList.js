import React from "react";
import ParagraphWidget from "../ParagraphWidget/ParagraphWidget";
import HeadingWidget from "../HeadingWidget/HeadingWidget";
import {connect} from "react-redux";
import {createWidgetForTopic, deleteWidget, updateWidget} from "../../actions/widgetActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";


const selectWidget = (type, widget, deleteWidget, updateWidget) => {

  switch (type) {
        case "HEADING":
            return   <HeadingWidget widget={widget}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}/>;
        case "PARAGRAPH" :
            return <ParagraphWidget widget={widget}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}/>

    }
}

const WidgetList = ({url, widgets, deleteWidget, updateWidget, createWidget}) => {
     console.log(widgets)
    return url.topicId ? <ul className="container m-auto">
            {widgets.map(widget =>
                    <li key={widget.id}>
                        {selectWidget(widget.type, widget, deleteWidget, updateWidget)}
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
    updateWidget: (widget) => updateWidget(dispatch, widget)
})


export default connect(stateToPropMapper, dispatchMapper)(WidgetList)

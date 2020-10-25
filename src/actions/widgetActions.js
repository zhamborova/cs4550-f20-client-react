import widgetServices from "../services/WidgetService";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const CREATE_WIDGET = "CREATE_WIDGET";
export const FIND_WIDGETS_FOR_TOPIC= "FIND_WIDGETS_FOR_TOPIC"

export const deleteWidget =(dispatch, id)=>(
   widgetServices.deleteWidgetService(id).then(status =>
        dispatch({
            type: DELETE_WIDGET,
            id
        })
    ))


export const updateWidget =(dispatch, widget)=>(
    widgetServices.updateWidgetService(widget._id, widget)
        .then(status => dispatch( {
                type: UPDATE_WIDGET,
                widget
            })
        ))

export const createWidgetForTopic=(dispatch, topicId)=>{
        widgetServices.createWidgetForTopic(topicId, {
            name: "NEW WIDGET",
            type: "PARAGRAPH"
        }).then(widget => dispatch({
            type: CREATE_WIDGET,
            widget
        }))
}



export const findWidgetsForTopic = (dispatch,topicId) =>{
    widgetServices.findWidgetsForTopic(topicId)
        .then(widgets =>
            dispatch({
                type: FIND_WIDGETS_FOR_TOPIC,
                widgets
            })
        )

}


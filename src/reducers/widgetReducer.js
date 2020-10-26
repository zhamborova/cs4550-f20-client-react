import {CREATE_WIDGET, DELETE_WIDGET,
        FIND_WIDGETS_FOR_TOPIC, UPDATE_WIDGET} from "../actions/widgetActions";

const initialState = {
    widgets:  [],


}

const widgetReducer = (state=initialState, action) => {

    switch (action.type) {
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget]
            }
        case FIND_WIDGETS_FOR_TOPIC :

            return {
                ...state,
                widgets: action.widgets,
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => action.id !== widget.id)
            }
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget => widget.id === action.widget.id ?
                                                         action.widget : widget)
            }



        default: return state;
    }

}

export default  widgetReducer;

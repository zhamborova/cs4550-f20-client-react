import {
    CREATE_WIDGET, DELETE_WIDGET,
    FIND_WIDGETS_FOR_TOPIC, UPDATE_WIDGET, WIDGET_DOWN, WIDGET_UP
} from "../actions/widgetActions";

const initialState = {
    widgets:  [],


}

const moveUp  = (list, index) => {

    let temp = list[index-1];
    temp.order = index;
    let widget =  list[index]
    widget.order = index-1;

    list[index-1] = list[index];
    list[index] = temp;


    return [...list];

}

const moveDown = (list, index) => {


    let temp = list[index+1];
    temp.order = index;
    let widget =  list[index]
    widget.order = index+1;

    list[index+1] = list[index];
    list[index] = temp;


    return [...list];

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
        case WIDGET_UP:
           console.log('here')
            return {
                ...state,
                widgets: moveUp(state.widgets, action.index)

            }

        case WIDGET_DOWN:
            return {
                ...state,
                widgets: moveDown(state.widgets, action.index)
            }



        default: return state;
    }

}

export default  widgetReducer;

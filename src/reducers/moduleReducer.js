import {
    DELETE_MODULE,
    UPDATE_MODULE,
    CREATE_MODULE, FIND_MODULES_FOR_COURSE, FIND_MODULE_BY_ID,
} from "../actions/moduleActions";

const initialState = {
    modules: [],

}

const moduleReducer = (state=initialState, action) => {

    switch (action.type) {
        case FIND_MODULES_FOR_COURSE:
            return {
                ...state,
                modules: action.modules,
                courseId: action.courseId
            }

        case FIND_MODULE_BY_ID:
           return{
               ...state,
               module: action.module
           }
        case CREATE_MODULE:

            return {
                ...state,
                modules: [...state.modules,
                             action.module]
            }
        case DELETE_MODULE:
            return {
                ...state,
                modules: state.modules.filter(module => action.id !== module._id)
            }

        case UPDATE_MODULE:
            return {
                ...state,
                modules: state.modules.map(module => module._id === action.module._id ? action.module : module)
            }



        default:
            return state
    }


}

export default moduleReducer

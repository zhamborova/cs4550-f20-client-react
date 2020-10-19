import {connect} from "react-redux";
import ModuleList from "./ModuleList";
import {createModule, deleteModule, updateModule} from "../../actions/moduleActions";

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    course: state.courseReducer.course,
    moduleCurrent:state.lessonReducer.moduleId
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteModule: (id) => deleteModule(dispatch, id),
    updateModule: (module) => updateModule(dispatch, module),
    createModule: (id, module) => createModule(dispatch, id, module)

})

export default connect(stateToPropertyMapper,propertyToDispatchMapper)(ModuleList)

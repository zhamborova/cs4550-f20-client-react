import React from "react";
import {connect} from "react-redux";
import ModuleList from "../components/ModuleListComponent/ModuleListComponent";
import {createModule, deleteModule, updateModule} from "../actions/moduleActions";

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteModule: (id) => deleteModule(dispatch, id),
    createModule: () => createModule(dispatch),
    updateModule: (module) => updateModule(dispatch, module),

})

export default connect(stateToPropertyMapper,propertyToDispatchMapper)(ModuleList)

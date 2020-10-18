import moduleService from "../services/ModuleServices"

export const DELETE_MODULE = "DELETE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const CREATE_MODULE = "CREATE_MODULE"
export const FIND_MODULE_BY_ID = "FIND_MODULE_BY_ID"
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"

export const deleteModule = (dispatch, id) => {
    moduleService.deleteModuleService(id)
        .then(status => dispatch({
                type: DELETE_MODULE,
                id
            })
        )

}
export const updateModule = (dispatch, module) =>
    moduleService.updateModuleService(module._id, module)
        .then(status => dispatch({
                type: UPDATE_MODULE,
                module
            })
        )

export const  createModule = (dispatch, id, module) =>{
    moduleService.createModuleForCourse(id, module).then(actual =>
       dispatch({
            type: CREATE_MODULE,
            module: actual
        }))
}



export const findModulesForCourse = (dispatch, courseId) =>
    moduleService.findModulesForCourse(courseId)
    .then(actualModules => dispatch({
        type: FIND_MODULES_FOR_COURSE,
        modules: actualModules,
        courseId
    }))



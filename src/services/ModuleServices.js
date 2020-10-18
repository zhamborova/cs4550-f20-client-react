import lessonServices from "./LessonServices"
const url = "https://wbdv-generic-server.herokuapp.com/api/zhamborova/courses"
const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/zhamborova/modules"

export const findModuleById = moduleId =>
    fetch(`${moduleUrl}/${moduleId}`)
        .then(response => response.json())

export const updateModuleService = (moduleId, newModule) =>
    fetch(`${moduleUrl}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(newModule),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const deleteModuleService = (moduleId) => {
   return lessonServices.findLessonsForModule(moduleId)
        .then(lessons => {
            lessons.forEach(lesson =>
              lessonServices.deleteLessonService(lesson._id)
            )
         }).then( status =>
           fetch(`${moduleUrl}/${moduleId}`, {
           method: "DELETE"
         }).then(response => response.json()))
}
export const findModulesForCourse = (courseId) =>
    fetch(`${url}/${courseId}/modules`)
        .then(response => response.json())

export const createModuleForCourse = (courseId, newModule) =>
    fetch(`${url}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(newModule),
        headers: {
            "content-type": "application/json",
        }
    }).then(response => response.json())



export default {
    findModulesForCourse,
    createModuleForCourse,
    deleteModuleService,
    updateModuleService,
    findModuleById
}

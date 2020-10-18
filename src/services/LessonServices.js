import topicsServices from './TopicsServices'

const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/zhamborova/modules"
const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/zhamborova/lessons"


export const findLessonById = (id) => {

   return fetch(`${lessonUrl}/${id}`)
        .then(response => response.json())
}
export const updateLessonService = (lessonId, newLesson) => {

   return fetch(`${lessonUrl}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(newLesson),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}
export const deleteLessonService = (lessonId) => {
    return topicsServices.findTopicsForLesson(lessonId)
        .then(topics => {
            console.log(topics)
            topics.forEach((topic)=>{
                topicsServices.deleteTopicService(topic._id)
            })
    }).then(status =>
        fetch(`${lessonUrl}/${lessonId}`, {
        method: "DELETE"
    }).then(response => response.json()))
}
export const findLessonsForModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`)
        .then(response => response.json())

export const createLessonForModule = (moduleId, newLesson) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(newLesson),
        headers: {
            "content-type": "application/json",
        }
    }).then(response => response.json())



export default {
    findLessonsForModule,
    createLessonForModule,
    deleteLessonService,
    updateLessonService,
    findLessonById
}

const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/zhamborova/lessons"
const topicUrl = "https://wbdv-generic-server.herokuapp.com/api/zhamborova/topics"


export const findTopicById = (id) =>
    fetch(`${topicUrl}/${id}`)
        .then(response => response.json())

export const updateTopicService = (topicId, newTopic) =>
    fetch(`${topicUrl}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const deleteTopicService = (topicId) =>
    fetch(`${topicUrl}/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) => {

    return fetch(`${lessonUrl}/${lessonId}/topics`)
        .then(response => response.json())
}
export const createTopicForLesson = (lessonId, newTopic) =>
    fetch(`${lessonUrl}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json",
        }
    }).then(response => response.json())



export default {
    findTopicsForLesson,
    createTopicForLesson,
    findTopicById,
    updateTopicService,
    deleteTopicService
}

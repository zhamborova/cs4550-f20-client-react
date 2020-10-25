const widgetUrl = "https://localhost:8080/api/widgets"
const topicsUrl = "http://localhost:8080/api/topics"

export const findWidgetsForTopic = (topicId) =>
    fetch(`${topicsUrl}/${topicId}/widgets`)
        .then(response => response.json())

export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${topicsUrl}/${topicId}/widgets`,
        {
            method: "POST",
            body: JSON.stringify({
                ...widget,
                topicId
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(response => response.json())



export const deleteWidgetService = (widgetId) => {
    fetch( `${widgetUrl}/${widgetId}`,
        {
            method: "DELETE"
        }).then(response => response.json())
}


export const  updateWidgetService = (widgetId, widget) =>{
    fetch( `${widgetUrl}/${widgetId}`,
        {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())

}

export default {
    findWidgetsForTopic, createWidgetForTopic, deleteWidgetService, updateWidgetService

}


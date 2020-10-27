const widgetUrl = "http://localhost:8080/api/widgets"
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
        }).then(response => response.json())

export const deleteWidgetService = (widgetId) => {
  return fetch( `${widgetUrl}/${widgetId}`,
        {
            method: "DELETE"
        }).then(response => response.json())
}


export const  updateWidgetService = (widget) =>{

    return fetch( `${widgetUrl}/${widget.id}`,
        {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())

}


export const moveWidgetUp = (index) => {
    return fetch( `${widgetUrl}/moveUp/${index}`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
}


export const moveWidgetDown = (index) => {
    return fetch( `${widgetUrl}/moveDown/${index}`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
}

export default {
    findWidgetsForTopic, createWidgetForTopic, deleteWidgetService, updateWidgetService,
    moveWidgetUp, moveWidgetDown

}


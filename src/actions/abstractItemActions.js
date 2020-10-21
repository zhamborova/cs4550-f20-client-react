import itemService from "../services/ModuleServices"

export const deleteItem = (dispatch, id , itemType) => {

    itemService.deleteItemService(id)
        .then(status => dispatch({
                type: `DELETE_${itemType}`,
                id
            })
        )

}
export const updateItem = (dispatch, itemType, item,) =>
    itemService.updateItemService(item._id, item)
        .then(status => dispatch({
                type: `UPDATE_${itemType}`,
                item
            })
        )

export const  createItem = (dispatch, id, item, itemType, parent) =>{
    itemService.createItemForParent(id, item, itemType, parent)
        .then(actual => dispatch({
            type: `CREATE_${itemType}`,
            item: actual
        }))
}



export const findItemsForParent = (dispatch, parentId, childType, parentType) =>
    itemService.findModulesForCourse(parentId)
        .then(actualItems => dispatch({
            type: `FIND_${childType}_FOR_${parentType}`,
            items: actualItems,
            parentId
        }))



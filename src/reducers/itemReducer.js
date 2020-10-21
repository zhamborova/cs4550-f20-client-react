
const initialState = {
    items: [],

}

function createItemReducer(itemName ) {
    return function itemReducer (state=initialState, action) {
    switch (action.type) {

        case `FIND_${action.childType}_FOR_${action.parentType}` :
            return {
                ...state,
            items: action.items
        }
        case `FIND_${itemName}_BY_ID`:
            return{
                ...state,
                items: action.item
            }
        case `DELETE_${itemName}`:
            return {
                ...state,
                items: state.items.filter((item) => item._id !== action.id)
            }
        case `UPDATE_${itemName}`:
            return {
                ...state,
                items: state.items.map((item) => item._id === action.item._id ? action.item : item)

            }
        case `CREATE_${itemName}`:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.item]}
        default: return state

    }

 }
}

 export default createItemReducer;

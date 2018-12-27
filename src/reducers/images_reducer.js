
export default function(state=[],action){
        switch(action.type){
        case 'IMAGE_DETAILS':
        return {
            ...state,
            list: action.payload
        }
        case 'IMAGE_DETAILS_ASC_LIKES':
        return {
            ...state,
            list: action.payload
        }
        case 'IMAGE_DETAILS_DESC_LIKES':
        return {
            ...state,
            list: action.payload
        }
        case 'IMAGE_DETAILS_ASC_DISLIKES':
        return {
            ...state,
            list: action.payload
        }
        case 'IMAGE_DETAILS_DESC_DISLIKES':
        return {
            ...state,
            list: action.payload
        }
        default:
            return state
    }

}
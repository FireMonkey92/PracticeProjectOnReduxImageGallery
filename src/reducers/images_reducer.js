
export default function(state=[],action){
        
        switch(action.type){
        case 'IMAGE_DETAILS':
        return {
            ...state,
            list: action.payload
        }
        default:
            return state
    }

}
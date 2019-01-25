export default function (state = [], action) {
    switch (action.type) {

        case 'GET_COUNTRIES_DETAILS':
        return {
            ...state,
            'countries': action.payload
        }
        default:
            return state
    }
} 
import { GET_USERS,  ADD_USER, ADDED_USER, PUT_USERS, PUT_MESSAGE, ROUTING_VALUE } from "../actions/actions"



const initialState = {
    users : [],
    addedUser: {},
    message: '',
    route: "Add_user"
}


export default function users(state = initialState, action){
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                users:action.payloadr
            }
        case ADD_USER:
            return {
                ...state,
                addedUser: action.payload
            }
        case ADDED_USER:
            return {
                ...state,
                addedUser: action.payload
            }
        case PUT_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case PUT_USERS:
            return {
                ...state,
                users: action.payload
            }
        case ROUTING_VALUE:
            return {
                ...state,
                route: action.payload
            }
            default:
                return state;
    }
}
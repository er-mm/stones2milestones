import { CREATE_TEAM, FETCH_USERS, CREATE_USER, DELETE_USER } from '../actions/types'

const initialState = {
    users: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS: 
            return {
                ...state,
                users: action.payload
            }
        case CREATE_USER: 
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case DELETE_USER:
        return {
            ...state,
            users: state.users.filter((user) => user.id !== action.payload)
        };
        default:
            return state;
    }
}
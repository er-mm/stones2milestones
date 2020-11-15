import { CREATE_TEAM } from '../actions/types'

const initialState = {
    teamList: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_TEAM: 
            return {
                ...state,
                teamList: [...state.teamList, action.payload]
            }
        default:
            return state;
    }
}
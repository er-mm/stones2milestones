import { CREATE_TEAM, FETCH_TEAM } from '../actions/types'

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
        case FETCH_TEAM:
            const teams = action.payload.map(user => user.team);
            return {
                ...state,
                teamList: [... new Set([...state.teamList, ...new Set(teams)])]
            }
        default:
            return state;
    }
}
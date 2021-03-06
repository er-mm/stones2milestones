import { CREATE_TEAM, FETCH_USERS, CREATE_USER, DELETE_USER, FETCH_TEAM } from './types';
const api = 'http://localhost:2000/users';
export const createTeam = (teamName) => dispatch => {
    console.log(' Action -> createTeam-->');
    dispatch({
        type: CREATE_TEAM,
        payload: teamName
    });
}

export const fetchTeamNames = () => dispatch => {
    console.log(' Action -> fetching team list-->');
    fetch(api)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_TEAM,
            payload: data
        }));
}

export const fetchUsers = () => dispatch => {
    console.log(' Action -> fetching user list-->');
    fetch(api)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USERS,
            payload: data
        }));
}

export const createUser = userDetails => dispatch => {
    console.log('Action -> Adding suer -- userDetails');
    console.log(userDetails);
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userDetails)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: CREATE_USER,
            payload: data
        }));
}

export const deleteUser = deleteUserID => dispatch => {
    console.log('Action -> deleting User');
    fetch(`${api}/` + deleteUserID, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: DELETE_USER,
            payload: deleteUserID
        }));

}

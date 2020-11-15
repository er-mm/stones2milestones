import { CREATE_TEAM, FETCH_USERS, CREATE_USER, DELETE_USER } from './types';

export const createTeam = (teamName) => dispatch => {
    console.log(' Action -> createTeam-->');
    dispatch({
        type: CREATE_TEAM,
        payload: teamName
    });
}

export const fetchUsers = () => dispatch => {
    console.log(' Action -> fetching user list-->');
    fetch(' http://localhost:2000/users')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USERS,
            payload: data
        }));
}

export const createUser = userDetails => dispatch => {
    console.log('Action -> Adding suer -- userDetails');
    console.log(userDetails);
    fetch(' http://localhost:2000/users', {
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
    fetch(' http://localhost:2000/users/' + deleteUserID, {
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

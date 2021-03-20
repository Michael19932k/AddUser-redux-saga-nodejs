import { takeEvery, put, call } from 'redux-saga/effects';
import { ADD_USER, putUsers, GET_USERS, putMessage} from '../redux/actions/actions'
import axios from 'axios';

function addUserFetch(user) {
    console.log(user)
    return axios({
        method: 'post',
        url: '/addUser',
        data: {
            user
        }
    }).then(res=>res.data)
        .catch(function (error) {
            console.log(error)
        })
}

function* workerAddUser(action) {
    const data = yield call(addUserFetch, action.payload)
    yield put(putMessage(data.message))
}

export function* watchAddUser() {
    yield takeEvery(ADD_USER, workerAddUser);
}





function getUsersFetch() {
    console.log('res')
    return axios({
        method: 'get',
        url: '/getUsers',
    }).then(res=>res.data
      )
    
        .catch(function (error) {
            console.log(error)
        })
        
}

function* workerGetUsers(action) {
    const data = yield call(getUsersFetch, action.payload)
    console.log(data)
    yield put(putUsers(data))
}

export function* watchGetUsers() {
    yield takeEvery(GET_USERS, workerGetUsers);
}
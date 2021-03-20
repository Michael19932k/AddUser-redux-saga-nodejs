import { all } from 'redux-saga/effects';
import {watchAddUser,watchGetUsers} from '../sagas/sagas'



export default function* rootSaga() {
    yield all([
        watchAddUser(),
        watchGetUsers()
    ])
   
  }
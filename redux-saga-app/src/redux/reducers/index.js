import { combineReducers } from 'redux';
import users from './reducers';



const rootReducer = combineReducers({
store:users,
});

export default rootReducer;
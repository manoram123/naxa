import counterReducer from "./counter";
import loggedReducer from "./logged";
import {combineReducers} from 'redux';
import dataReducer from "./dataReducer";

const allReducers = combineReducers({
    counter: counterReducer,
    loggedIn: loggedReducer,
    data: dataReducer
});

export default allReducers;
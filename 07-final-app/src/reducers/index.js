import { combineReducers } from 'redux'

import bugsReducer from '../bugTracker/reducers';

let rootReducer = combineReducers({
	bugState : bugsReducer
});

export default rootReducer;

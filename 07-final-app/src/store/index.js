import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';


/*function loggerMiddleware({ getState, dispatch}){
	return function (next){
		return function(action){
			console.group(action.type);
			console.log('before -> ', getState());
			next(action);
			console.log('after -> ', getState());
			console.groupEnd();
		}
	}
}*/

let loggerMiddleware = ({getState, dispatch}) => next => action => {
	console.group(action.type);
	console.log('before -> ', getState());
	next(action);
	console.log('after -> ', getState());
	console.groupEnd();
}

let appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default appStore;
let defaultState = {
	filtered : false,
	bugs : []
};

function bugsReducer(currentState = defaultState, action){
	if (action.type === 'ADD_NEW'){
		let newState = { ...currentState, bugs : [...currentState.bugs, action.payload]}
		return newState;
	}
	if (action.type === 'REPLACE'){
		let {oldBug, newBug} = action.payload;
		let newState = { ...currentState, bugs : currentState.bugs.map(bug => bug === oldBug ? newBug : bug)} ;
		return newState;
	}
	if (action.type === 'REMOVE_ALL'){
		let bugsToRemove = action.payload;
		let newState = {...currentState, bugs : currentState.bugs.filter(bug => bugsToRemove.indexOf(bug) === -1)};
		return newState;
	}
	if (action.type === 'TOGGLE_FILTER'){
		let newState = { ...currentState , filtered : !currentState.filtered };
		return newState;
	}
	return currentState;
}
export default bugsReducer;
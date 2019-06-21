import * as bugApi from '../services/bugApi';

export function removeClosed(bugs){
	return function(dispatch, getState){
		let allBugs = getState().bugState.bugs;
		let closedBugs = bugs.filter(bug => bug.isClosed);
		closedBugs
			.forEach(async closedBug => {
				await bugApi.remove(closedBug)
				let action = { type : 'REMOVE', payload : closedBug };
				dispatch(action)
			});
	}
}
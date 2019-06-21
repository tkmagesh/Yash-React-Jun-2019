import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

import bugActionsCreator from './actions';

class BugTracker extends Component{
	render(){
		let { bugs, addNew, toggle, removeClosed } = this.props;
			return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}

/*
function mapStateToBugTrackerProps(storeState){
	let bugs = storeState.bugState;
	return { bugs : bugs };
}

function mapDispatchToBugTrackerProps(dispatch){
	var bugActionDispatchers = bindActionCreators(bugActionsCreator, dispatch);
	return bugActionDispatchers;
}

export default connect(
	mapStateToBugTrackerProps,
	mapDispatchToBugTrackerProps
)(BugTracker);

*/

export default connect(
	({bugState}) => ({ bugs : bugState})),
	(dispatch) => bindActionCreators(bugActionsCreator, dispatch)
)(BugTracker);


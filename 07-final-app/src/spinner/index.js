import React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

let spinnerActionCreators = {
	down(){
		let action = { type : 'DOWN'};
		return action;	
	},
	up(){
		let action = { type : 'UP'};
		return action;
	}
}

export function spinnerReducer(currentState = 0, action){
	if ( action.type === 'UP' ) return ++currentState;
	if ( action.type === 'DOWN') return --currentState;
	return currentState;
}

class Spinner extends React.Component{
	onDecrementClick = () => {
		this.props.down();
	}
	onIncrementClick = () => {
		this.props.up();
	}
	render(){
		let { value } = this.props;
		return(
			<div>
				<input type="button" value="Decrement" onClick={ this.onDecrementClick}/>
				<span> [ {value} ] </span>
				<input type="button" value="Increment" onClick={ this.onIncrementClick}/> 
			</div>
		)
	}
}

function mapStateToSpinnerProps(storeState){
	let spinnerValue = storeState.spinnerState;
	return { value : spinnerValue };	
}

function mapDispatchToSpinnerProps(dispatch){
	let spinnerActionDispatchers = Redux.bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActionDispatchers;	
}

export default ReactRedux.connect(
		mapStateToSpinnerProps,
		mapDispatchToSpinnerProps
	)(Spinner);
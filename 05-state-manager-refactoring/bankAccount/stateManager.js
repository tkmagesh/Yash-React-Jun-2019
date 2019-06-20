var SM = (function(){
	var _currentState = undefined,
		_subscribers = [],
		_reducer = null,
		_init_action = '@@INIT_ACTION';

	function getState(){
		return _currentState;
	}

	function subscribe(subscriptionFn){
		if (typeof subscriptionFn === 'function')
			_subscribers.push(subscriptionFn);
	}

	function triggerChange(){
		_subscribers.forEach(subscriptionFn => subscriptionFn());
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (_currentState === newState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		if (typeof reducer !== 'function') throw new Error('Invalid arguments');
		_reducer = reducer;
		_currentState = _reducer(undefined, _init_action);
		var store = { getState, subscribe, dispatch };
		return store;
	}

	function bindActionCreators(actionCreators, dispatch){
		let actionDispatchers = {}
		for(let key in actionCreators){
			actionDispatchers[key] = function(...args){
				let action = actionCreators[key](...args);
				dispatch(action);
			}
		}
		return actionDispatchers;
	}

	return { createStore, bindActionCreators };
})();
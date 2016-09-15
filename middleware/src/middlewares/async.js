export default function({ dispatch }) {
	return next => action => {
		// If action does not have payload or payload does not have a .then property we don't care about it and we send it on
		if (!action.payload || !action.payload.then) {
			return next(action);
		}

		// Make sure the action's promise resolves
		action.payload
			.then(function(response) {
				// create new action with old type but replace paylaod with new data
				const newAction = { ...action, payload: response };
				dispatch(newAction);
			});
	}
}

function metaReducer(state = null, action) {
	switch (action.type) {
		case "SET_META":
			return action.payload;
		default:
			return state;
	}
}

export default metaReducer;

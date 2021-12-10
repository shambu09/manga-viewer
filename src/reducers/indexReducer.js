function indexReducer(state = null, action) {
	switch (action.type) {
		case "SET_INDEX":
			return action.payload;
		default:
			return state;
	}
}

export default indexReducer;

import { combineReducers } from "redux";
import metaReducer from "./metaReducer";
import indexReducer from "./indexReducer";

const rootReducer = combineReducers({
	index: indexReducer,
	chapterMeta: metaReducer,
});

export default rootReducer;

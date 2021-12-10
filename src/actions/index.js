const setMeta = (meta) => {
	return {
		type: "SET_META",
		payload: meta,
	};
};

const setIndex = (index) => {
	return {
		type: "SET_INDEX",
		payload: index,
	};
};

export { setMeta, setIndex };

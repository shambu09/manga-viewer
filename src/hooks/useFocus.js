import { useRef } from "react";

const useFocus = () => {
	const htmlElRef = useRef(null);
	const setFocus = () => {
		htmlElRef.current &&
			htmlElRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return [htmlElRef, setFocus];
};

export default useFocus;

import React from "react";
import { useState, useEffect } from "react";
import { metadata_url } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { setIndex } from "../actions";
import IndexNavbar from "../components/IndexNavbar";

const fetch_data = (setData, setIsLoading) => {
	fetch(metadata_url)
		.then((res) => {
			return res.json();
		})
		.then((resp) => {
			setData(resp);
			setIsLoading(false);
		});
};

function Content() {
	const dispatch = useDispatch();
	const index = useSelector((state) => state.index);
	const [isLoading, setIsLoading] = useState(true);

	const setData = (index) => {
		dispatch(setIndex(index));
	};

	useEffect(() => {
		if (index !== null) {
			setIsLoading(false);
		} else {
			fetch_data(setData, setIsLoading);
		}
		// eslint-disable-next-line
	}, []);

	return (
		<div className="chapter-index">
			<IndexNavbar isLoading={isLoading} index={index} />
		</div>
	);
}

export default Content;

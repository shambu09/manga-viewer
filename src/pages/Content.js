import React from "react";
import { useState, useEffect } from "react";
import { metadata_url } from "../utils";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIndex } from "../actions";

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
			<h1>Content</h1>
			<div>
				{!isLoading &&
					Object.entries(index).map(([key, value]) => {
						return (
							<div key={key} className="index-element">
								<Link to={`/manga/${key}`}>{value}</Link>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default Content;

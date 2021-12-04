import React from "react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { metadata_url } from "../utils";
import { Link } from "react-router-dom";

const fecth_data = (setData, setIsLoading) => {
	fetch(metadata_url)
		.then((res) => {
			return res.json();
		})
		.then((resp) => {
			setData({ ...resp });
			setIsLoading(false);
		});
};
function Content() {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fecth_data(setData, setIsLoading);
	}, []);

	return (
		<div className="chapter-index">
			<h1>Content</h1>
			<div>
				{!isLoading &&
					Object.entries(data).map(([key, value]) => {
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

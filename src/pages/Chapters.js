import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { get_public_link } from "../utils";
import { Link } from "react-router-dom";
import Nav2 from "../components/Nav2";

import { useSelector, useDispatch } from "react-redux";
import { setMeta } from "../actions";

const fetch_data = (url, setMeta) => {
	fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((resp) => {
			setMeta(resp);
		});
};

function Chapters() {
	const dispatch = useDispatch();
	const meta = useSelector((state) => state.chapterMeta);

	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);

	const setMetadata = (meta) => {
		dispatch(setMeta({ id, ...meta }));
		setIsLoading(false);
	};

	useEffect(() => {
		if (meta !== null && meta.id === id) {
			setIsLoading(false);
		} else {
			fetch_data(get_public_link(id), setMetadata);
		}
		// eslint-disable-next-line
	}, []);

	return (
		<div className="App">
			<Nav2 />
			{!isLoading && (
				<>
					{meta["chapters"].map((entry, i) => {
						return (
							<div
								key={entry.title}
								className="text-left ml-4 mb-4 links"
							>
								<Link
									to={{
										pathname: `/manga/${id}/viewer/${i}`,
									}}
								>
									{entry.title}
								</Link>
							</div>
						);
					})}
				</>
			)}
		</div>
	);
}

export default Chapters;

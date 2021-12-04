import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { get_public_link } from "../utils";
import { Link } from "react-router-dom";
import Nav2 from "../components/Nav2";

const fecth_data = (url, setMeta) => {
	fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((resp) => {
			setMeta(resp);
		});
};

function Chapters() {
	const { state } = useLocation();
	const { id } = useParams();
	const url = get_public_link(id);
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const setMeta = (meta) => {
		setData(meta);
		setIsLoading(false);
	};

	useEffect(() => {
		if (state) {
			setMeta(state.data);
		} else {
			fecth_data(url, setMeta);
		}
		// eslint-disable-next-line
	}, []);

	return (
		<div className="App">
			<Nav2 />
			{!isLoading && (
				<>
					{data["chapters"].map((entry, n) => {
						return (
							<div
								key={entry.title}
								className="text-left ml-4 mb-4 links"
							>
								<Link
									to={{
										pathname: "/viewer/" + n,
										state: {
											data: data,
											chapter: n,
											id: id,
										},
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

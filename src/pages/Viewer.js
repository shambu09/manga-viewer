import React from "react";
import { useEffect, useState } from "react";

import Image from "../components/Image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setMeta } from "../actions";

import { get_public_link } from "../utils";
import useFocus from "../hooks/useFocus";

const fetch_data = (url, setData) => {
	fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((resp) => {
			setData(resp);
		});
};

function Viewer() {
	const dispatch = useDispatch();
	const meta = useSelector((state) => state.chapterMeta);
	const { id, chapter } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [ref, setFocus] = useFocus();

	const setMetadata = (meta) => {
		dispatch(setMeta({ id, ...meta }));
		setIsLoading(false);
	};

	useEffect(() => {
		if (meta === null || meta.id !== id) {
			fetch_data(get_public_link(id), setMetadata);
		} else {
			setIsLoading(false);
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		setFocus();
	});

	return (
		<div className="App">
			<div ref={ref}></div>
			{!isLoading && (
				<>
					<Nav
						chapter={{
							id: id,
							number: chapter,
							maxChapter: meta["num_chapters"],
							title: meta["chapters"][chapter].title,
						}}
					/>

					{Object.entries(
						meta["chapters"][chapter]["images_links"]
					).map((entry) => {
						return (
							<Image
								tmp={
									meta.type === "manga" || !meta.type
										? "margin-yes"
										: ""
								}
								src={entry[1]}
								alt={entry[0]}
								key={entry[1]}
							/>
						);
					})}

					<Footer
						chapter={{
							id: id,
							number: chapter,
							maxChapter: meta["num_chapters"],
							title: meta["chapters"][chapter].title,
						}}
					/>
				</>
			)}
		</div>
	);
}

export default Viewer;

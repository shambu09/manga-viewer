import React from "react";
import { useState, useEffect } from "react";
import useFocus from "../hooks/useFocus";

import Image from "../components/Image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Viewer(props) {
	const { state } = useLocation();
	const data = state.data;
	const id = state.id;
	const [chapter, setChapter] = useState({
		number: state.chapter,
		title: data["chapters"][state.chapter].title,
	});
	const [navRef, setFocus] = useFocus();

	useEffect(() => {
		setFocus();
	}, [chapter, setFocus]);

	const handleChapterChange = (number) => {
		setChapter({
			number,
			title: data["chapters"][number].title,
		});
	};
	return (
		<div className="App">
			<Nav
				_ref={navRef}
				data={{ data, id }}
				chapter={{ ...chapter, maxChapter: data["num_chapters"] }}
				chapterChange={handleChapterChange}
			/>
			<>
				{Object.entries(
					data["chapters"][chapter.number]["images_links"]
				).map((entry) => {
					return (
						<Image src={entry[1]} alt={entry[0]} key={entry[1]} />
					);
				})}
			</>
			<Footer
				data={{ data, id }}
				chapter={{ ...chapter, maxChapter: data["num_chapters"] }}
				chapterChange={handleChapterChange}
			/>
		</div>
	);
}

export default Viewer;

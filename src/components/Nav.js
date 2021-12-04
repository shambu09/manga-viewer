import React from "react";
import { Link } from "react-router-dom";

function Nav({ _ref = null, chapter, chapterChange, data }) {
	const prev = chapter.number > 0 ? chapter.number - 1 : 0;
	const next =
		chapter.number < chapter.maxChapter
			? chapter.number + 1
			: chapter.number;

	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
				<div className="navbar-collapse w-100 order-md-0">
					<Link
						to={{
							pathname: "/manga/" + data.id,
							state: { data: data.data },
						}}
						className="btn btn-primary mt-2 mb-2"
					>
						Index
					</Link>
				</div>
				<div className="mx-auto order-0 active">
					<div className="d-flex justify-content-arround mt-2 mb-2">
						<button
							className="btn btn-primary mr-2"
							ref={_ref}
							disabled={chapter.number <= 0}
							onClick={() => chapterChange(prev)}
						>
							Previous
						</button>

						<button
							className="btn btn-primary mr-2"
							disabled={chapter.number >= chapter.maxChapter - 1}
							onClick={() => chapterChange(next)}
						>
							Next
						</button>
					</div>
				</div>
				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2"></div>
			</nav>
			<p className="text-center text-capitalize mt-3 mr-2">{` ${chapter.title}`}</p>
		</div>
	);
}

export default Nav;

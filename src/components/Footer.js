import React from "react";
import { Link } from "react-router-dom";

function Footer({ chapter }) {
	const _chapter = parseInt(chapter.number);
	const prev = _chapter > 0 ? _chapter - 1 : 0;
	const next = _chapter < chapter.maxChapter ? _chapter + 1 : _chapter;

	return (
		<div className="mt-4">
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<div className="navbar-collapse w-100 order-1 order-md-0">
					<Link
						to={{
							pathname: `/manga/${chapter.id}`,
						}}
						className="btn btn-primary mt-2 mb-2"
					>
						Index
					</Link>
				</div>
				<div className="mx-auto order-0 active">
					<div className="d-flex justify-content-arround mt-2 mb-2">
						<Link
							to={{
								pathname: `/manga/${chapter.id}/viewer/${prev}`,
							}}
						>
							<button
								className="btn btn-primary mr-2"
								disabled={_chapter <= 0}
							>
								Previous
							</button>
						</Link>

						<Link
							to={{
								pathname: `/manga/${chapter.id}/viewer/${next}`,
							}}
						>
							<button
								className="btn btn-primary mr-2"
								disabled={_chapter >= chapter.maxChapter - 1}
							>
								Next
							</button>
						</Link>
					</div>
				</div>
				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2"></div>
			</nav>
		</div>
	);
}

export default Footer;

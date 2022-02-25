import React from "react";
import { Link } from "react-router-dom";
import RequestFrom from "./RequestFrom";

function IndexNavbar({ isLoading, index }) {
	return (
		<>
			<ul
				className="nav nav-tabs mt-0 justify-content-center h3"
				id="myTab"
				role="tablist"
			>
				<li className="nav-item">
					<a
						className="nav-link active"
						id="index-tab"
						data-toggle="tab"
						href="#index"
						role="tab"
						aria-controls="index"
						aria-selected="true"
					>
						Index
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="request-tab"
						data-toggle="tab"
						href="#request"
						role="tab"
						aria-controls="request"
						aria-selected="false"
					>
						Request
					</a>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div
					className="tab-pane fade show active pl-5 pt-2 pb-2 pr-5"
					id="index"
					role="tabpanel"
					aria-labelledby="index-tab"
				>
					{isLoading ? (
						<>
							<p>Server might be hibernating, waking it up...</p>
							<div
								class="spinner-border text-primary"
								role="status"
							>
								<span class="sr-only">Loading...</span>
							</div>
						</>
					) : (
						Object.entries(index).map(([key, value]) => {
							return (
								<div key={key} className="index-element">
									<Link to={`/manga/${key}`}>{value}</Link>
								</div>
							);
						})
					)}
				</div>
				<div
					className="tab-pane fade pl-5 pt-3 pb-2 pr-5"
					id="request"
					role="tabpanel"
					aria-labelledby="request-tab"
				>
					<RequestFrom />
				</div>
			</div>
		</>
	);
}

export default IndexNavbar;

import React from "react";
import { Link } from "react-router-dom";

function Nav2() {
	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
				<div className="navbar-collapse w-100 order-md-0">
					<Link to="/" className="btn btn-primary mt-2 mb-2">
						Main Menu
					</Link>
				</div>
				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2"></div>
			</nav>
		</div>
	);
}

export default Nav2;

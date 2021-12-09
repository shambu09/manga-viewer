import React from "react";

function Image({ src, alt, tmp }) {
	return (
		<div className={`image-container ${tmp}`}>
			<img className="image" src={src} alt={alt} />
		</div>
	);
}

export default Image;

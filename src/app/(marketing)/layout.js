import React from "react";

const layout = ({ children }) => {
	return (
		<div>
			<nav>
				<h4>Marketing Nav</h4>
			</nav>

			<div>{children}</div>
		</div>
	);
};

export default layout;

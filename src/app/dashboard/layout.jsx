import React from "react";

const layout = ({ children }) => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<a href="/dashboard/profile"> Profile </a>
					</li>
					<li>
						<a href="/dashboard/setting"> Setting </a>
					</li>
				</ul>
			</nav>
			<hr />
			{children}
		</div>
	);
};

export default layout;

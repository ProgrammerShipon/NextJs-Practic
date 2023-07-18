"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
	// const router = useRouter();

	// console.log("router -> ", router);

	return (
		<div>
			<h1>user pages</h1>

			<ul>
				<li>
					<Link
						href={{
							pathname: "/users/1",
							query: {
								isAmin: false,
							},
						}}
						replace
						prefetch={false}
					>
						user 1
					</Link>
					<Link href="/users/2"> user 2 </Link>
					<Link href="/users/3"> user 3 </Link>
					<Link href="/users/4"> user 4 </Link>
				</li>
			</ul>
		</div>
	);
};

export default page;

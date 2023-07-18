export const metadata = {
	title: "dynamic users",
};

const page = ({ params }) => {
	console.log("params -> ", params);

	return (
		<div>
			<h1> Dynamic User : {params?.id} </h1>
		</div>
	);
};

export default page;

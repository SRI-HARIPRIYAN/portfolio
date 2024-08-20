import React from "react";
import Welcome from "../components/Welcome";
const Home = () => {
	return (
		<div
			id="home"
			className="w-full md:h-screen home  pt-8 text-white  flex flex-col items-center gap-20 bg-cover bg-center"
		>
			<Welcome />
		</div>
	);
};

export default Home;

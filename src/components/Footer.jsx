import React from "react";

const Footer = () => {
	return (
		<footer className=" bg-[#0b001a] h-24 ">
			<nav className=" h-full gap-4 text-blue-500  underline underline-offset-2 flex justify-around items-center">
				<a href="#home">Home</a>
				<a href="#projects">Projects</a>
				<a href="#about">About</a>
				<a href="#contact">Contact</a>
			</nav>
			{/* <h2 className="text-green-500 font-semibold text-center text-2xl sm:text-4xl lg:text-6xl ">
				THANKS FOR VISITING
			</h2> */}
		</footer>
	);
};

export default Footer;

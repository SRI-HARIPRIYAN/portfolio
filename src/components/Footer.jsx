import React from "react";

const Footer = () => {
	return (
		<footer className=" bg-[#0b001a] h-24 ">
			<nav className=" h-full gap-4 text-blue-500  underline-offset-2 flex justify-around items-center">
				<a href="#home" className="footer-a">
					Home
				</a>
				<a href="#projects" className="footer-a">
					Projects
				</a>
				<a href="#about" className="footer-a">
					About
				</a>
				<a href="#contact" className="footer-a">
					Contact
				</a>
			</nav>
			{/* <h2 className="text-green-500 font-semibold text-center text-2xl sm:text-4xl lg:text-6xl ">
				THANKS FOR VISITING
			</h2> */}
		</footer>
	);
};

export default Footer;

import React, { useState } from "react";

const Header = () => {
	const [isMenuClicked, setIsMenuClicked] = useState(false);
	const handleClick = () => {
		const change = document.querySelector(".toChange");
		setIsMenuClicked(!isMenuClicked);
		change.classList.toggle("toOpen");
	};
	return (
		<div className=" w-full fixed top-0 z-10  ">
			<header
				className={`bg-[#18092e] text-yellow-50 h-24 px-8 flex justify-between items-center md:justify-around lg:h-28 `}
			>
				<div className="text-2xl font-semibold font-poppins sm:text-2xl md:text-3xl lg:text-4xl ">
					Sri Haripriyan
				</div>
				<nav className="hidden md:flex md:justify-around md:gap-3 lg:gap-5 font-poppins text-md text-white font-semibold border-2 p-1.5 rounded-full bg-[#4c3675] ">
					<a
						href="#home"
						className="active:bg-[#f5f5f5] px-5 py-3 rounded-full hover:underline decoration-white"
					>
						Home
					</a>
					<a href="#projects" className=" px-5 py-3 rounded-full">
						Projects
					</a>
					<a href="#about" className=" px-5 py-3 rounded-full">
						About
					</a>
					<a href="#contact" className=" px-5 py-3 rounded-full">
						Contact
					</a>
				</nav>
				{/* <div>
				<a>
					<img src={githubLogo} alt="" />
				</a>
			</div> */}
				<button
					className="flex flex-col bg-white justify-center items-center gap-0.5  rounded-md  w-8 h-8 md:hidden sm:w-10 sm:h-10 "
					onClick={handleClick}
				>
					<div className="bg-[#18092e] h-0.5 w-1/3 rounded-sm"></div>
					<div className="bg-[#18092e] h-0.5 w-1/3 rounded-sm"></div>
					<div className="bg-[#18092e] h-0.5 w-1/3 rounded-sm"></div>
				</button>
			</header>
			<aside
				className={`toChange flex flex-col md:hidden bg-[#231930] text-black p-2 w-[180px] h-screen duration-300 gap-1 z-2 ${
					isMenuClicked ? "right-0 absolute" : "absolute -right-96"
				}`}
			>
				<a
					href="#home"
					onClick={() => setIsMenuClicked(!isMenuClicked)}
					className="bg-[#f5f5f5] px-5 py-3 rounded-full"
				>
					Home
				</a>
				<a
					href="#projects"
					onClick={() => setIsMenuClicked(!isMenuClicked)}
					className="bg-[#f5f5f5] px-5 py-3 rounded-full"
				>
					Projects
				</a>
				<a
					href="#about"
					onClick={() => setIsMenuClicked(!isMenuClicked)}
					className="bg-[#f5f5f5] px-5 py-3 rounded-full"
				>
					About
				</a>
				<a
					href="#contact"
					onClick={() => setIsMenuClicked(!isMenuClicked)}
					className="bg-[#f5f5f5] px-5 py-3 rounded-full"
				>
					Contact
				</a>
			</aside>
		</div>
	);
};

export default Header;

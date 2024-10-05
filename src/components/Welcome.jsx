import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
const Welcome = () => {
	return (
		<>
			<div className=" w-full px-10 flex flex-col  gap-2 ">
				<h1 className="text-2xl font-bold md:text-3xl lg:text-5xl ">
					<span className=" text-start text-4xl md:text-6xl lg:text-7xl ">
						Hello World!
					</span>
				</h1>
				<h2 className=" text-2xl font-bold md:text-3xl lg:text-5xl ">
					<span className="text-3xl lg:text-6xl">I'</span>m{" "}
					<span className="text-3xl lg:text-6xl pl-3 ">S</span>ri
				</h2>
				<h3 className=" text-center text-2xl font-bold md:text-3xl lg:text-5xl ">
					Full-Stack Developer
				</h3>
				{/* <p className="text-center">&</p>
				<h3 className="text-center">
					<span className="lg:text-3xl">part-time </span>

					<span className="text-2xl font-bold md:text-3xl lg:text-5xl">
						ML Engineer
					</span>
				</h3>
				<p className="text-center">1% Better Every Day</p> */}
			</div>
			<div>
				<p>Welcome to my page</p>
			</div>
			<div>
				<a
					href="#contact"
					className=" w-44  hover:bg-slate-900 hover:bg-opacity-75 duration-300 bg-sky-500   p-4 py-3 rounded-full"
				>
					Lets talk
				</a>
			</div>
			<div className="flex flex-col items-center gap-5">
				<a
					href="#projects"
					className="bg-blue-300 hover:bg-slate-900 hover:text-white hover:bg-opacity-75 duration-300 p-3  w-44 text-black rounded-full text-center"
				>
					Scroll for more
				</a>
				<FaArrowCircleDown className=" animate-updown text-2xl inline-block text-white" />
			</div>
		</>
	);
};

export default Welcome;

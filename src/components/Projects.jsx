import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
	return (
		<section
			id="projects"
			className="p-5 pt-24 lg:pt-28 flex flex-col gap-8 min-h-fit  "
		>
			<div className="text-white flex flex-col gap-2">
				<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
					Featured projects
				</h2>
				<p className="opacity-90">
					Here are some of the selected projects that showcase my
					passion for full-stack development.
				</p>
			</div>
			<div className="flex flex-col p-5  md:flex-row gap-2 md:gap-4 lg:gap-14  ">
				<div className=" relative bg-[#0b003b] p-5 py-24 md:w-1/2 rounded-lg border-2 border-blue-700 ">
					<h3 className="absolute top-5 left-5 text-white bg-purple-700 p-2 px-3 rounded-md">
						C4G - Chat for gamers
					</h3>
					<img src={project1} alt="Chat for gamers" className="  " />
				</div>
				<div className=" flex flex-col justify-center gap-5 md:p-3 md:mx-auto md:w-1/2 text-white ">
					<h2 className="font-semibold italic text-xl md:text-2xl">
						REAL - TIME CHAT APPLICATION
					</h2>
					<p className="opacity-75 text-sm md:text-base md:text-justify tracking-wider">
						By utilizing React for the frontend, Express.js for the
						backend, MongoDB for data storage, and Node.js as the
						runtime, I created a feature-rich platform that enables
						seamless communication with real-time messaging, user
						authentication, and a robust chat interface.
					</p>
					<hr className="opacity-80" />
					<p className="font-semibold">TECH STACK: MERN</p>
					<hr className="opacity-80" />
					<a
						className=" bg-sky-500 w-fit p-1.5 rounded-md "
						href="https://chat-for-gamers.onrender.com"
						target="_blank"
					>
						<span>See it in action</span>
						<GoArrowUpRight className="inline ml-2 text-lg" />
					</a>
				</div>
			</div>
			<div className="flex flex-col p-5  md:flex-row gap-2 md:gap-4 lg:gap-14  ">
				<div className=" relative bg-[#0b003b] p-5 py-24 md:w-1/2 rounded-lg border-2 border-blue-700 ">
					<h3 className="absolute top-5 left-5 text-white bg-purple-700 p-2 px-3 rounded-md">
						Eco-cart
					</h3>
					<img src={project2} alt="Chat for gamers" className="  " />
				</div>
				<div className=" flex flex-col gap-5 justify-center md:p-3 md:mx-auto md:w-1/2 text-white ">
					<h2 className="font-semibold text-xl italic md:text-2xl">
						E-COMMERCE APPLICATION
					</h2>
					<p className="opacity-75 text-sm md:text-base md:text-justify tracking-wider">
						This project showcases my ability to build scalable web
						applications, encompassing product catalog management,
						user authentication, secure payment gateways, and a
						robust shopping cart. By effectively combining React for
						the frontend, Express.js for API development, MongoDB
						for data storage, and Node.js as the runtime, I created
						a dynamic and user-friendly online shopping experience.
					</p>
					<hr className="opacity-80" />
					<p className="font-semibold">TECH STACK: MERN</p>
					<hr className="opacity-80" />
					<a
						className=" bg-sky-500 w-fit p-1.5 rounded-md "
						href="https://eco-cart-il9d.onrender.com/"
						target="_blank"
					>
						<span>See it in action</span>
						<GoArrowUpRight className="inline ml-2 text-lg" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;

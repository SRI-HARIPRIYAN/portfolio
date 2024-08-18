import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
	return (
		<div className="p-5  flex flex-col gap-3  ">
			<div className="text-white flex flex-col gap-1">
				<h2 className="text-2xl  font-semibold">Featured projects</h2>
				<p className="opacity-90">
					Here are some of the selected projects that showcase my
					passion for full-stack development.
				</p>
			</div>
			<section className="flex flex-col  md:flex-row ">
				<div className=" relative bg-[#0b003b] p-5 pt-20 lg:w-1/2 rounded-lg ">
					<h3 className="absolute top-3 left-3 text-white bg-purple-700 p-2 px-3 rounded-md">
						C4G - Chat for gamers
					</h3>
					<img src={project1} alt="Chat for gamers" className="  " />
				</div>
				<div className=" flex flex-col gap-3 p-3 lg:w-1/2 text-white ">
					<h2 className="font-semibold">
						Real time chat application
					</h2>
					<p>TECH STACK: MERN</p>
					<a
						className=" bg-sky-500 w-fit"
						href="https://chat-for-gamers.onrender.com"
					>
						<span>See it in action</span>
						<GoArrowUpRight className="inline" />
					</a>
				</div>
			</section>
			<section className="flex flex-col md:flex-row  justify-around">
				<div className="relative bg-[#0b003b] p-5">
					<h2 className="absolute">E-commerce applicaton</h2>
					<img src={project2} alt="Eco-cart homepage" className="" />
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nemo, quas fugit! Suscipit, veniam natus. Aperiam
						velit
					</p>
					<a href="https://eco-cart-il9d.onrender.com">
						<span>See it in action</span>
						<GoArrowUpRight />
					</a>
				</div>
			</section>
		</div>
	);
};

export default Projects;

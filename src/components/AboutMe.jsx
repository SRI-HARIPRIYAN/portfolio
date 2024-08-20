import React from "react";
import myResume from "../assets/documents/MyResume.pdf";

const AboutMe = () => {
	const languages = ["C++", "Java", "Javascript", "HTML", "MySQL"];
	const frameworks = ["React", "Express", "NodeJs", "Spring boot"];
	const databases = ["MongoDB - Basics"];

	return (
		<div
			id="about"
			className="flex flex-col gap-5 text-white p-5 md:p-20 pt-24 lg:pt-28  mt-10"
		>
			<div className="flex flex-col sm:flex-row gap-4 ">
				<div className="md:w-1/2">
					<h1 className="text-5xl md:text-6xl lg:text-7xl pl-5">
						About me
					</h1>
				</div>
				<div className="md:w-1/2 p-5 flex flex-col gap-4 ">
					<h2 className="text-xl md:text-2xl font-medium">
						I'm a Full stack developer based Tamilnadu, India from a
						Computer Science background
					</h2>
					<p className="text-justify opacity-75">
						I'm a full stack developer pursuing final year in
						Commputer Science and Engineering adept at building
						user-centric web applications. Skilled in C/C++, Java,
						Python, Javascript, React, Nodejs, Expressjs, MongoDB,
						Spring boot and MySQL.
					</p>
					<a
						className="bg-purple-700 hover:bg-blue-800 hover:bg-opacity-55 w-fit py-2 rounded-full px-4 "
						href={myResume}
						download="Sri_Haripriyan_FullstackDeveloper.pdf"
					>
						Download Resume
					</a>
				</div>
			</div>
			<hr className="opacity-75" />
			<div className="flex flex-col gap-5">
				<section className="flex flex-col md:flex-row gap-5">
					<div className="md:w-1/2 text-5xl h-full md:text-6xl lg:text-7xl">
						<h2 className="">My capabilites</h2>
					</div>
					<div className="md:w-1/2 flex flex-col gap-2 ">
						<h3 className="opacity-80 text-2xl ">Languages</h3>
						<div className=" h-fit flex flex-row flex-wrap gap-2 ">
							{languages.map((lang, index) => (
								<div
									key={index}
									className="border-2 w-24 h-fit text-center rounded-full p-1"
								>
									{lang}
								</div>
							))}
						</div>
						<h3 className="opacity-80 text-2xl">Frameworks</h3>
						<div className=" h-fit flex flex-row flex-wrap gap-4 ">
							{frameworks.map((framwork, index) => (
								<div
									key={index}
									className="border-2 w-fit h-fit text-center rounded-full px-2 py-1"
								>
									{framwork}
								</div>
							))}
						</div>
						<h3 className="opacity-80 text-2xl">Databases</h3>
						<div className=" h-fit flex flex-row flex-wrap gap-2 ">
							{databases.map((database, index) => (
								<div
									key={index}
									className="border-2  h-fit text-center rounded-full p-1"
								>
									{database}
								</div>
							))}
						</div>
					</div>
				</section>
				{/* <hr className="opacity-75" /> */}
				{/* <section className="flex flex-col md:flex-row gap-5">
					<h2 className="md:w-1/2 text-5xl h-full md:text-6xl lg:text-7xl">
						My Experience
					</h2>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Veniam, et quae quod, exercitationem commodi amet eaque
						molestiae eligendi odit itaque repellat ut, aliquid sed
						consequuntur asperiores similique quibusdam distinctio
						tempore.
					</div>
				</section> */}
			</div>
		</div>
	);
};

export default AboutMe;

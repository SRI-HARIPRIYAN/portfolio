import React from "react";
import github from "../assets/github-logo.jpg";
import insta from "../assets/insta_logo.jpg";
import linkedin from "../assets/linkin-logo.png";
import ContactForm from "./ContactForm";
import resume from "../assets/documents/MyResume.pdf";
const Contact = () => {
	return (
		<section className="pt-24" id="contact">
			<div
				className="contact border-4 border-purple-700 text-white  md:p-6 lg:p-10 bg-center bg-cover
			 bg-opacity-90 flex flex-col gap-5 "
			>
				<div className="text-2xl md:text-3xl">
					<p>Do you want to work together? </p>
				</div>
				<h1 className="text-center font-mono text-3xl sm:text-4xl md:text-6xl lg:text-5xl text-purple-600">
					LET'S CONNECT
				</h1>
				<p className="opacity-75">
					Say hello at{" "}
					<a
						href="mailto:sris.haripriyan@gmail.com"
						className="underline underline-offset-2 decoration-white text-green-400"
					>
						sris.haripriyan@gmail.com
					</a>
				</p>
				<p className="opacity-75">
					For more info, here's my{" "}
					<a href={resume} download>
						<span className=" text-green-400 underline underline-offset-2d decoration-white opacity-100">
							resume
						</span>
					</a>
				</p>
				<div className="flex flex-col md:flex-row  gap-4 ">
					<div className="md:w-1/2 flex flex-col justify-center  md:items-left gap-5">
						<a
							className="w-fit h-10 flex items-center bg-inherit gap-2 "
							target="_blank"
							href="https://www.instagram.com/prince_phoenix01?igsh=MXNoMDZmdm5ldnppbw=="
						>
							<img
								className="w-10 h-10 rounded-full
                     border-2 border-purple-600"
								src={insta}
								alt="Instagram"
							/>
							<span>Shree</span>
						</a>
						<a
							className="w-fit h-10 bg-inherit flex items-center gap-2"
							target="_blank"
							href="https://github.com/SRI-HARIPRIYAN"
						>
							<img
								className="w-10 h-10 rounded-full
                     border-2 border-purple-600"
								src={github}
								alt="Github"
							/>
							<span>sri-haripriyan</span>
						</a>
						<a
							className="w-fit h-10 bg-inherit flex items-center gap-2"
							target="_blank"
							href="https://in.linkedin.com/in/sri-haripriyan"
						>
							<img
								className="w-10 h-10 rounded-full
                     border-2 border-purple-600"
								src={linkedin}
								alt="LinkedIn"
							/>
							<span>sri-haripriyan</span>
						</a>
					</div>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;

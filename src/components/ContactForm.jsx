import React from "react";

const ContactForm = () => {
	return (
		<div className="md:w-1/2">
			<form className="border-2 border-purple-700 md:w-[90%] flex flex-col gap-5 p-5 rounded-lg ">
				<div className="flex flex-col gap-2 ">
					<label htmlFor="name" className="font-semibold">
						Name
					</label>
					<input
						className="bg-black bg-opacity-50 rounded-sm h-10 pl-2"
						type="text"
						name="name"
						id="name"
						placeholder="Your name"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="email" className="font-semibold">
						E-mail
					</label>
					<input
						className="bg-black bg-opacity-50 rounded-sm h-10 pl-2"
						type="email"
						name="email"
						id="email"
						placeholder="me@email.com"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="subject">
						Subject
					</label>
					<input
						className="bg-black bg-opacity-50 rounded-sm h-10 pl-2"
						type="text"
						name="subject"
						id="subject"
						placeholder=""
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="message">
						Message
					</label>
					<textarea
						className="bg-black bg-opacity-50 rounded-sm  pl-2"
						name="message"
						id="message"
						placeholder="body of mail"
					></textarea>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
	// const to_name = "Sri Haripriyan";
	const [from_name, setFromName] = useState("");
	const [from_email, setFromEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				"service_v1zkbl4",
				"template_r1kmty8",
				{
					to_name: "Sri Haripriyan",
					from_name: from_name,
					from_email: from_email,
					message: message,
					reply_to: from_email,
				},
				{
					publicKey: "41_qUYMR4tODAE9Oo",
				}
			)
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error);
				}
			);
		setFromName("");
		setFromEmail("");
		setMessage("");
		setLoading(false);
	};
	return (
		<div className="md:w-1/2">
			<form
				onSubmit={sendEmail}
				className="border-2 border-purple-700 md:w-[90%] flex flex-col gap-5 p-5 rounded-lg backdrop-blur-md "
			>
				<div className="flex flex-col gap-2 ">
					<label htmlFor="name" className="font-semibold">
						Name
					</label>
					<input
						className="bg-black bg-opacity-50 rounded-sm h-10 pl-2"
						type="text"
						name="from_name"
						id="name"
						placeholder="Your name"
						value={from_name}
						onChange={(e) => setFromName(e.target.value)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="email" className="font-semibold">
						E-mail
					</label>
					<input
						className="bg-black bg-opacity-50 rounded-sm h-10 pl-2"
						type="email"
						name="from_email"
						id="email"
						placeholder="me@email.com"
						value={from_email}
						onChange={(e) => setFromEmail(e.target.value)}
					/>
				</div>
				{/* <div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="subject">
						Subject
					</label>
					<input
						className="bg-black bg-opacity-50 rounded-sm h-10 pl-2"
						type="text"
						name="reply_to"
						id="subject"
						placeholder="subject"
					/>
				</div> */}
				<div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="message">
						Message
					</label>
					<textarea
						className="bg-black bg-opacity-50 rounded-sm min-h-10  pl-2 py-2 "
						name="message"
						id="message"
						placeholder="Hey Sri How its going?"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
				<button
					type="submit"
					className={` w-fit mx-auto ${
						loading ? "bg-green-500" : "bg-blue-500"
					} text-white  px-5 py-2 rounded-md`}
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default ContactForm;

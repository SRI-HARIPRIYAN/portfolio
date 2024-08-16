import React, { useState } from "react";
import { Link } from "react-router-dom";
import githubLogo from "../public/images/github-logo.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
	return (
		<div className=" w-screen h-screen">
			<Header />
			<main className=" bg-[#0b001a] h-screen"></main>
			<Footer />
		</div>
	);
};

export default App;

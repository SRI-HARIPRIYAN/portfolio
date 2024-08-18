import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MiddleComponent from "./components/MiddleComponent.jsx";
import Home from "./pages/Home";
import Projects from "./components/Projects.jsx";
const App = () => {
	return (
		<div className=" w-screen h-screen overflow-auto font-poppins ">
			<Header />
			<main className=" min-h-screen mt-24  ">
				<Home />
				<div className="pt-3 bg-gradient-to-b from-[#0b001a] to-[#0b001b]">
					<MiddleComponent />
					<Projects />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default App;

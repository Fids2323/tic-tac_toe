import Image from "next/image";
import React from "react";
import logo from "./logo.svg";
import arrow from "./arrow.svg";
import {Profile} from "../profile";

export const Header = () => {
	return (
		<header className="h-24 px-8 bg-white shadow-lg flex items-center mb-6">
			<Image src={logo} />
			<div className="w-px h-8 bg-slate-400 mx-6" />
			<button className="w-44 px-5 py-2 rounded-lg text-2xl text-white bg-teal-600 hover:bg-teal-500 transition-colors ">Играть</button>
			<div className="ml-auto flex gap-2">
				<Profile />
				<Image src={arrow} className="text-teal-600 hover:text-teal-500 transition-colors" />
			</div>
		</header>
	);
};

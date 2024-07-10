import Image from "next/image";
import React from "react";
import logo from "./logo.svg";
import arrow from "./arrow.svg";
import {Profile} from "../profile";
import {UiButton} from "../ui-kit"

export const Header = () => {
	return (
		<header className="h-24 px-8 bg-white shadow-lg flex items-center mb-6">
			<Image src={logo} />
			<div className="w-px h-8 bg-slate-400 mx-6" />
			<UiButton children="Играть" className="w-44" variant="primary" size="lg"/>
			<div className="ml-auto flex gap-2">
				<Profile />
				<Image src={arrow} className="text-teal-600 hover:text-teal-500 transition-colors" />
			</div>
		</header>
	);
};

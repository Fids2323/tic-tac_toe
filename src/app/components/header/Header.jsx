import Image from "next/image";
import React from "react";
import logo from "./logo.svg";
import avatar from "./avatar.png";
import arrow from "./arrow.svg";

export const Header = () => {
	return (
		<header className="h-24 px-8 bg-white shadow-lg flex items-center">
			<Image src={logo} />
			<div className="w-px h-8 bg-slate-400 mx-6" />
			<button className="w-44 px-5 py-2 rounded-lg text-2xl text-white bg-teal-600 hover:bg-teal-500 transition-colors ">Играть</button>

			{/* avatar */}
			<div className="ml-auto flex text-teal-600 gap-2 hover:text-teal-500 transition-colors">
				<Image src={avatar} width={48} height={48} />
				<div>
					<div className="text-lg leading-tight">Paramovevg</div>
					<div className="text-sm text-slate-400 leading-tight">Рейтинг: 1230</div>
				</div>
				<Image src={arrow} />
			</div>
		</header>
	);
};

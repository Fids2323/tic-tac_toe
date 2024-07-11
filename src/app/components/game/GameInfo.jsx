import React from "react";
import {Profile} from "../profile";
import Image from "next/image";
//icons
import crossIcon from "../profile/icons/cross-icon.svg"
import roundIcon from "../profile/icons/round-icon.svg"
import clsx from "clsx";


export const GameInfo = ({className}) => {
	return (
		<div className={clsx("w-[616px] px-8 py-4 flex justify-between rounded-2xl shadow-md bg-white", className && className,"")}>
			<div className="flex  items-center relative">
				<Profile className="w-44 " />
				<div className="bg-white absolute -left-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center">
					<Image src={crossIcon}/>
				</div>
				<div className="w-px h-8 bg-slate-400 mx-3" />
				<div className="text-slate-900 text-lg font-semibold">01:08</div>
			</div>
			<div className="flex items-center relative">
				<Profile className="w-44" />
				<div className="bg-white absolute -left-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center">
					<Image src={roundIcon}/>
				</div>
				<div className="w-px h-8 bg-slate-400 mx-3" />
				<div className="text-orange-600 text-lg font-semibold">00:08</div>			
			</div>
		</div>
	);
};

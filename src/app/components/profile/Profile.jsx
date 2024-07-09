import React from "react";
import Image from "next/image";
import avatar from "./icons/avatar.png";
import clsx from "clsx";

export const Profile = ({className}) => {
	return (
		<div className={clsx("flex text-teal-600 gap-2", className && className, "")}>
			<Image src={avatar} width={48} height={48} />
			<div>
				<div className="text-lg leading-tight">Paramovevg</div>
				<div className="text-sm text-slate-400 leading-tight">Рейтинг: 1230</div>
			</div>
		</div>
	);
};

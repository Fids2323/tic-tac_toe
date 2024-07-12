import React from "react";
import Image from "next/image";
import clsx from "clsx";

export const Profile = ({className, avatar, name, rating}) => {
	return (
		<div className={clsx("flex text-teal-600 gap-2", className && className, "")}>
			<Image src={avatar} width={48} height={48} />
			<div className="overflow-hidden">
				<div className="text-lg leading-tight truncate">{name}</div>
				<div className="text-sm text-slate-400 leading-tight">Рейтинг: {rating}</div>
			</div>
		</div>
	);
};

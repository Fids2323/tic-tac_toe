import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

//icons
import ArrowLeft from "./icons/arrow-left.svg";
import HistoryIcon from "./icons/history-icon.svg";
import UserIcon from "./icons/user-icon.svg";
import StarIcon from "./icons/star-icon.svg";

export const GameTitle = ({className, playersCount}) => {
	return (
		<div className={clsx("pl-2", className && className, "")}>
			<Link href="#" className="flex gap-2 text-teal-600 text-sm leading-tight">
				<Image alt="arrow-left" src={ArrowLeft} />
				На главную
			</Link>
			<h1 className="text-4xl">Крестики нолики</h1>

			<div className="flex gap-3 text-slate-400 text-sm">
				<Image alt="star-icon" src={StarIcon} />
				<div className="flex gap-1">
					<Image alt="user" src={UserIcon} />
					{playersCount}
				</div>
				<div className="flex gap-1">
					<Image alt="history" src={HistoryIcon} />1 мин на ход
				</div>
			</div>
		</div>
	);
};

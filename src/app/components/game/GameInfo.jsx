import React from "react";
import {GAME_SYMBOL} from "./constants";
import clsx from "clsx";

import userSrc1 from "./icons/user-icon1.png";
import userSrc2 from "./icons/user-icon2.png";
import userSrc3 from "./icons/user-icon3.png";
import userSrc4 from "./icons/user-icon4.png";
import {PlayerInfo} from "./PlayerInfo";

const Users = [
	{
		id: 1,
		name: "Paromovevg",
		rating: 1230,
		avatar: userSrc1,
		symbol: GAME_SYMBOL.CROSS,
	},
	{
		id: 2,
		name: "VereIntedinglapotur",
		rating: 850,
		avatar: userSrc2,
		symbol: GAME_SYMBOL.ROUND,
	},
	{
		id: 3,
		name: "Lara",
		rating: 1400,
		avatar: userSrc3,
		symbol: GAME_SYMBOL.TRIANGLE,
	},
	{
		id: 4,
		name: "Додик",
		rating: 760,
		avatar: userSrc4,
		symbol: GAME_SYMBOL.SQUARE,
	},
];

export const GameInfo = ({className, playersCount, currentMove}) => {
	return (
		<div className={clsx("w-[616px] px-8 py-4 grid grid-cols-2 justify-between rounded-2xl shadow-md bg-white gap-3", className && className, "")}>
			{Users.slice(0, playersCount).map((player) => (
				<PlayerInfo currentMove={currentMove} player={player} isRight={player.id % 2 === 0} key={player.id} isTimerRunning={currentMove === player.symbol} />
			))}
		</div>
	);
};

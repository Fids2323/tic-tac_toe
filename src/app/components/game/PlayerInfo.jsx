import {GameSymbol} from "./GameSymbol";
import {Profile} from "../profile";
import clsx from "clsx";
import {useEffect, useState} from "react";

export const PlayerInfo = ({player, isRight, isTimerRunning}) => {
	const [seconds, setSeconds] = useState(12);
	useEffect(() => {
		if (isTimerRunning) {
			const interval = setInterval(() => {
				setSeconds((prevState) => Math.max(prevState - 1, 0));
			}, 1000);

			return () => {
				setSeconds(60);
				clearInterval(interval);
			};
		}
	}, [isTimerRunning]);

	const minutesSting = String(Math.floor(seconds / 60)).padStart(2, "0");
	const secondsString = String(seconds % 60).padStart(2, "0");
	const isDanger = seconds < 10;

	const getClassNameTimer = (isTimerRunning) => {
		if (isTimerRunning) {
			{
				if (isDanger) return "text-orange-500";
				return "text-slate-900";
			}
		} else return "text-slate-200";
	};

	return (
		<div className="flex items-center  gap-1">
			<div className={clsx("relative", isRight && "order-3")}>
				<Profile className="w-44" avatar={player.avatar} name={player.name} rating={player.rating} />
				<div className="bg-white absolute -left-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center">
					<GameSymbol symbol={player.symbol} />
				</div>
			</div>
			<div className={clsx("w-px h-8 bg-slate-400 mx-3", isRight && "order-2")} />
			{/* timer */}
			<div className={clsx("text-lg  font-semibold", isRight && "order-1", getClassNameTimer(isTimerRunning))}>
				{minutesSting}:{secondsString}
			</div>
		</div>
	);
};

// {clsx("text-slate-900 text-lg font-semibold", isRight && isRight, "order-1")}

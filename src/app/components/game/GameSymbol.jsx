import Image from "next/image.js";

import {GAME_SYMBOL} from "./constants.js";
//icons
import RoundIcon from "../profile/icons/round-icon.svg";
import CrossIcon from "../profile/icons/cross-icon.svg";
import SquareIcon from "../profile/icons/square-icon.svg";
import TriangleIcon from "../profile/icons/triangle-icon.svg";

export const GameSymbol = ({symbol, className }) => {
	const icon = {
		[GAME_SYMBOL.ROUND]: RoundIcon,
		[GAME_SYMBOL.CROSS]: CrossIcon,
		[GAME_SYMBOL.SQUARE]: SquareIcon,
		[GAME_SYMBOL.TRIANGLE]: TriangleIcon,
	}[symbol];

	return <Image alt="symbol" src={icon} className={className } />;
};

import clsx from "clsx";

export const GameCell = ({children, onClick, isWinner}) => {
	return (
		<button onClick={onClick} className={clsx("border border-slate-200 -ml-px -mt-px flex items-center justify-center", isWinner && "bg-orange-600/10")}>
			{children}
		</button>
	);
};

export const GameCell = ({children, onClick}) => {
	return (
		<button onClick={onClick} className="border border-slate-200 -ml-px -mt-px flex items-center justify-center">
			{children}
		</button>
	);
};

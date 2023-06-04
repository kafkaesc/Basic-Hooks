export default function Button({ children, ...props }) {
	return (
		<button
			{...props}
			className="px-3 py-1 border border-black rounded text-black hover:border-black hover:bg-zinc-200"
		>
			{children}
		</button>
	);
}

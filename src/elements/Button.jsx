export default function Button({ children, ...props }) {
	return (
		<button
			{...props}
			className="px-2 border border-black bg-white rounded text-black hover:border-black hover:bg-zinc-200"
		>
			{children}
		</button>
	);
}

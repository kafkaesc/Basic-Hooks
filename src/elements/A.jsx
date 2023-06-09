export default function A({ children, className, href, ...props }) {
	return className ? (
		<a
			href={href}
			className={`text-blue-600 hover:underline ${className}`}
			{...props}
		>
			{children}
		</a>
	) : (
		<a href={href} className="text-blue-600 hover:underline" {...props}>
			{children}
		</a>
	);
}

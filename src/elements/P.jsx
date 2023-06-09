export default function P({ className, ...props }) {
	return className ? (
		<p className={`mb-2 ${className}`} {...props}></p>
	) : (
		<p className="mb-2" {...props}></p>
	);
}

import { Link as RRLink } from 'react-router-dom';

export default function Link({ children, className, to, ...props }) {
	return className ? (
		<RRLink
			className={`text-blue-600 hover:underline ${className}`}
			to={to}
			{...props}
		>
			{children}
		</RRLink>
	) : (
		<RRLink className="text-blue-600 hover:underline" to={to} {...props}>
			{children}
		</RRLink>
	);
}

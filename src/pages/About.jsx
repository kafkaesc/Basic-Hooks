import A from '../elements/A';
import Code from '../elements/Code';
import H1 from '../elements/H1';
import Link from '../elements/Link';
import P from '../elements/P';

export default function About() {
	return (
		<>
			<H1>About Basic Hooks</H1>
			<P className="text-center">Built by Jared Hettinger</P>
			<P>
				This project is an example of some basic custom hooks in React. The main
				page will use two components that demonstrate the{' '}
				<Code>useCountdown</Code> hook and the <Code>useCountDownUp</Code> hook.
			</P>
			<P>
				The full code for this project is available at{' '}
				<A href="https://github.com/kafkaesc/Basic-Hooks">
					https://github.com/kafkaesc/Basic-Hooks
				</A>
				.
			</P>
			<div className="text-center">
				<Link to="/">Home</Link>
			</div>
		</>
	);
}

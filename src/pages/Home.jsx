import H1 from '../elements/H1';
import Link from '../elements/Link';
import CountDownThenUp from '../components/CountDownThenUp';
import TheCountdown from '../components/TheCountdown';

export default function Home() {
	return (
		<>
			<H1>Home Component</H1>
			<div className="text-center">
				<Link to="/About">About</Link>
			</div>
			<TheCountdown />
			<CountDownThenUp />
		</>
	);
}

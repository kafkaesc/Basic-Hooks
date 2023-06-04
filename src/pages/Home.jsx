import H1 from '../elements/H1';
import CountDownThenUp from '../components/CountDownThenUp';
import TheCountdown from '../components/TheCountdown';

export default function Home() {
	return (
		<>
			<H1>Home Component</H1>
			<TheCountdown />
			<CountDownThenUp />
		</>
	);
}

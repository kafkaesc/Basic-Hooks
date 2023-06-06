import Button from '../elements/Button';
import H2 from '../elements/H2';
import HookBox from './HookBox';
import { useCountdown } from '../hooks/useCountdown';

export default function TheCountdown() {
	const { theCountdown, decrementTheCountdown } = useCountdown(10);
	return (
		<HookBox>
			<H2>Countdown</H2>
			<div className="inline-block w-6 text-center">{theCountdown}</div>
			<Button
				aria-label="Decrement the countdown"
				onClick={decrementTheCountdown}
			>
				-
			</Button>
		</HookBox>
	);
}

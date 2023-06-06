import Button from '../elements/Button';
import H2 from '../elements/H2';
import HookBox from './HookBox';
import { useCountUpDown } from '../hooks/useCountUpDown';

export default function CountDownThenUp() {
	const { current, next } = useCountUpDown(10);
	return (
		<HookBox>
			<H2>Count Down, Then Up</H2>
			<div className="inline-block w-6 text-center">{current}</div>
			<Button onClick={next}>Next</Button>
		</HookBox>
	);
}

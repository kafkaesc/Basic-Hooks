import { useState } from 'react';

export function useCountUpDown(start) {
	const [current, setCurrent] = useState(start);
	const [goingUp, setGoingUp] = useState(false);

	function next() {
		if (current === 0) {
			setGoingUp(true);
			setCurrent((cur) => cur + 1);
		} else if (current === start) {
			setGoingUp(false);
			setCurrent((cur) => cur - 1);
		} else if (goingUp) {
			setCurrent((cur) => cur + 1);
		} else if (!goingUp) {
			setCurrent((cur) => cur - 1);
		}
	}

	return { current, next };
}

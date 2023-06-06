import { useState } from 'react';

/*
useCountdown creates a countdown state with a function to decrement

arguments:
start, number, required: the starting number for the countdown
alertNumber, number, optional: trigger a window.alert when that step is hit

returns:
theCountdown: number, the current state of the countdown
decrementTheCountdown: function, decreases theCountdown by one
*/
export function useCountdown(start, alertNumber) {
	const [theCountdown, setTheCountdown] = useState(start);

	function decrementTheCountdown() {
		if (alertNumber && theCountdown === alertNumber) window.alert('wow');
		if (theCountdown > 0) setTheCountdown((current) => current - 1);
	}

	function reset() {
		setTheCountdown(start);
	}

	return { decrementTheCountdown, reset, theCountdown };
}

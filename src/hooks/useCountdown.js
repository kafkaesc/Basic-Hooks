import { useState } from 'react';

export function useCountdown(start) {
	const [theCountdown, setTheCountdown] = useState(start);

	function decrementTheCountdown() {
		if (theCountdown > 0) setTheCountdown((current) => current - 1);
	}

	return { theCountdown, decrementTheCountdown };
}

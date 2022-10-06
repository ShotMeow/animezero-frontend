import { useEffect } from 'react';

//note: Call once when component is mounted
export function useMounted(callback: () => void) {
	useEffect(() => {
		(async () => callback())();
	}, []);
}

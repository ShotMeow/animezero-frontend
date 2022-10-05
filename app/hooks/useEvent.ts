export function useEvent() {
	const eventsStore: Map<string, any> = new Map<string, any>();

	function on(eventType: string, callback: (data: any) => void) {
		eventsStore.set(eventType, callback);
	}

	function emit(eventType: string, data: any) {
		if (eventsStore.has(eventType)) {
			eventsStore.get(eventType)(data);
		}
	}

	function remove(eventType: string) {
		eventsStore.delete(eventType);
	}

	return {
		remove,
		on,
		emit
	};
}

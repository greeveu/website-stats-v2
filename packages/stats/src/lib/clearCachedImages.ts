/**
 * Remove old items out of localstorage
 */
export const clearCachedImages = () => {
	try {
		Object.entries(localStorage).forEach(([key, value]) => {
			try {
				const item = JSON.parse(value);
				if (!item.ttl) {
					return;
				}

				if (new Date(item.ttl) < new Date()) {
					localStorage.removeItem(key);
				}
			} catch (e) {
				console.log('LocalStorage: removing', key);
				localStorage.removeItem(key);
			}
		});
	} catch (e) {
		console.error(e);
	}
};

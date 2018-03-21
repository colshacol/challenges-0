export const firstTruthy = conditions => {
	for (const cond of conditions) {
		const result = cond()
		if (result) return result
	}
}

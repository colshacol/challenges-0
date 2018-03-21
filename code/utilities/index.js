// I should probably rename this...

export const index = (target) => index => {
	return index >= 0
		? target[index]
		: target[target.length + index]
}
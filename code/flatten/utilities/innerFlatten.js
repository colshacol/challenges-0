export const innerFlatten = final => _target => {
	_target.forEach(item => {
		Array.isArray(item) ? innerFlatten(final)(item) : final.push(item)
	})
}

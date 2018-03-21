// Write a function that flattens deeply nested arrays.

const innerFlatten = (final) => (_target) => {
	_target.forEach(item => {
			Array.isArray(item)
				? innerFlatten(final)(item)
				: final.push(item)
	})
}

export const flatten = (target) => {
  const final = []
	innerFlatten(final)(target)
  
  return final
}
// Write a function that flattens deeply nested arrays.
import { innerFlatten } from './utilities/innerFlatten'

export const flatten = target => {
	const final = []
	innerFlatten(final)(target)

	return final
}

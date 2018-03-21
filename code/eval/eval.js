// Write a function called eval, which takes a string and returns a boolean.
// This string is allowed 6 different characters: 0, 1, &, |, (, and ).
// eval should evaluate the string as a boolean expression, where 0 is
// false, 1 is true, & is an and, and | is an or.

// E.g "(0 | (1 | 0)) & (1 & ((1 | 0) & 0))"
import { handleUnacceptableChars } from './utilities/handleUnacceptableChars'
import { clean } from './utilities/clean'
import { parser } from './utilities/parser'

export const _eval = target => {
	return parser(handleUnacceptableChars(clean(target)))
}

/*
	(
		0 | (
			1 | 0
		)
	) & (
		1 & (
			(
				1 | 0
			) & 0
		)
	)
*/

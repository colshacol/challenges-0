// Write a function called eval, which takes a string and returns a boolean.
// This string is allowed 6 different characters: 0, 1, &, |, (, and ).
// eval should evaluate the string as a boolean expression, where 0 is
// false, 1 is true, & is an and, and | is an or.
// E.g "(0 | (1 | 0)) & (1 & ((1 | 0) & 0))"

// I absolutely had to rename it to _eval to get the warnings to go away.

import { _eval } from '../eval'

it('breaks when unacceptable characters are present', () => {
	expect(() => _eval('f')).toThrow()
	expect(() => _eval('(0 & 9)')).toThrow()
	expect(() => _eval('(0 | (3 | 0)) & (1 & ((1 | 0) & 0))')).toThrow()
})

it('handles strings as expected', () => {
	expect(_eval('0')).toBe(false)
	expect(_eval('1')).toBe(true)
	expect(_eval('(0 | (1 | 0)) & (1 & ((1 | 0) & 0))')).toBe(false)
	expect(_eval('(0 | (1 | 0)) & (1 & ((1 | 0) & 1))')).toBe(true)
	expect(_eval('(0 & 0)')).toBe(false)
	expect(_eval('(0 & 1')).toBe(false)
	expect(_eval('(1 | 1)')).toBe(true)
	expect(_eval('(1 | 0)')).toBe(true)
	expect(_eval('(1 & 1)')).toBe(true)
	expect(_eval('(1 & 1) & 0')).toBe(false)
	expect(_eval('0 | (1 & 1)')).toBe(true)
	expect(_eval('(1 & 0) | 1')).toBe(true)
})

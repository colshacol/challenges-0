// Write a polyfill for reduce method of arrays.

// Alright. Maybe I shouldn't doubt myself. :)

import '../reduce'

it('works this way?', () => {
	const target = ['dog', 'cat', 'foo']

	const reducer = (final, currentValue) => {
		final += currentValue
		return final
	}

	const expected = 'dogcatfoo'

	expect(target._reduce(reducer, '')).toEqual(expected)
})

it('works another way?', () => {
	const target = [[0, 1, 2], [22, 33, 44], [55, 66, 77]]

	const reducer = (final, currentValue, index) => {
		final[`array${index}`] = currentValue
		return final
	}

	const expected = {
		array0: [0, 1, 2],
		array1: [22, 33, 44],
		array2: [55, 66, 77]
	}

	expect(target._reduce(reducer, {})).toEqual(expected)
})

it('works a third way?', () => {
	const target = [
		{
			name: 'tim'
		},
		{
			name: 'tom'
		},
		{
			name: 'tammy'
		}
	]

	const reducer = (final, currentValue, index) => {
		final += currentValue.name.length
		return final
	}

	const expected = 11

	expect(target._reduce(reducer, 0)).toEqual(expected)
})

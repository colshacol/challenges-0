// Write a function that flattens deeply nested arrays.

const { flatten } = require('../flatten')

it('flattens a deeply nested array', () => {
	const target = [
		true,
		false,
		[[0, 1, 2]],
		['dog', 'cat', 'foo'],
		[[[[{ name: 'tom' }, { name: 'tim' }, { name: 'tammy' }]]]]
	]

	const expected = [
		true,
		false,
		0,
		1,
		2,
		'dog',
		'cat',
		'foo',
		{ name: 'tom' },
		{ name: 'tim' },
		{ name: 'tammy' }
	]

	expect(flatten(target)).toEqual(expected)
})

it('works when there are no nested arrays', () => {
	const target = ['a', 'b', 'c']

	const expected = ['a', 'b', 'c']

	expect(flatten(target)).toEqual(expected)
})

// Generate all subsets of a string.
// eg: ‘water’ should generate ‘wa’, ‘wat’, ‘wate’ etc

import { subsets } from '../subsets'

it('walks on water', () => {
	const target = 'water'

	const expected = ['wa', 'wat', 'wate', 'er', 'ter', 'ater']

	expect(subsets(target)).toEqual(expected)
})

it('walks on fire', () => {
	const target = 'flaming torpedo'

	const expected = [
		'fl',
		'fla',
		'flam',
		'flami',
		'flamin',
		'flaming',
		'flaming ',
		'flaming t',
		'flaming to',
		'flaming tor',
		'flaming torp',
		'flaming torpe',
		'flaming torped',
		'do',
		'edo',
		'pedo',
		'rpedo',
		'orpedo',
		'torpedo',
		' torpedo',
		'g torpedo',
		'ng torpedo',
		'ing torpedo',
		'ming torpedo',
		'aming torpedo',
		'laming torpedo'
	]

	expect(subsets(target)).toEqual(expected)
})

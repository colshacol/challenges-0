import { edgeChars } from '../edgeChars'

it('returns the first and last chars of a string', () => {
	expect(edgeChars('abc')).toEqual(['a', 'c'])
	expect(edgeChars('dogs100')).toEqual(['d', '0'])
	expect(edgeChars('!@#$%^&*')).toEqual(['!', '*'])
})

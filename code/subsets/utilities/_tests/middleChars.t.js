import { middleChars } from '../middleChars'

it('returns an array of strings without edge characters', () => {
	expect(middleChars('dog')).toEqual(['o'])
	expect(middleChars('dawg')).toEqual(['a', 'w'])
	expect(middleChars('frank')).toEqual(['r', 'a', 'n'])
	expect(middleChars('foobar')).toEqual(['o', 'o', 'b', 'a'])
})
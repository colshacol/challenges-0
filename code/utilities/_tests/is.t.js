import { is } from '../is'

it('checks for equality', () => {
	expect(is(0)(0)).toEqual(true)
	expect(is([])([])).toEqual(false)
	expect(is('foo')('foo')).toEqual(true)
	expect(is({})({})).toEqual(false)
})

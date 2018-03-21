import { index } from '../index'

it('gets the correct index', () => {
	expect(index([44, 55, 66])(1)).toEqual(55)
	expect(index([44, 55, 66])(0)).toEqual(44)
	expect(index([44, 55, 66])(2)).toEqual(66)
	expect(index([44, 55, 66])(-1)).toEqual(66)
})

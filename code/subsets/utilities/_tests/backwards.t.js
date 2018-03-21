import { backwards } from '../backwards'

const LAST = 'LAST'
const FOO = 'FOO'
const MIDDLE = ['m', 'i', 'd']

it('partys like a rock star', () => {
	expect(backwards(LAST, MIDDLE)([], 'm', 2)).toEqual(['mLAST'])
	expect(backwards(LAST, MIDDLE)([], 'i', 2)).toEqual(['iLAST'])
	expect(backwards(LAST, MIDDLE)([FOO], 'm', 1)).toEqual([FOO, 'mFOO'])
})
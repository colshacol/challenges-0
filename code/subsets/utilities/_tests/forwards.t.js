import { forwards } from '../forwards'

const F = 'F'
const FOO = 'FOO'

it('gets crunk', () => {
	expect(forwards(F)([FOO], 'm', 2)).toEqual([FOO, 'FOOm'])
	expect(forwards(F)([FOO], 'm', 0)).toEqual([FOO, 'Fm'])
})

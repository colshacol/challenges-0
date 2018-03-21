import { firstTruthy } from '../firstTruthy'

const target0 = () => {
	return firstTruthy([
		() => 'foo'
	])
}

const target1 = () => {
	return firstTruthy([
		() => false,
		() => [0, 1, 2]
	])
}

it('does work', () => {
	expect(target0()).toEqual('foo')
	expect(target1()).toEqual([0, 1, 2])
})
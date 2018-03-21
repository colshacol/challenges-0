import { index } from '../../../utilities/index'
import { firstTruthy } from '../../../utilities/firstTruthy'

export const evaluateTopLevel = _levels => final => {
	let l = index(_levels)(-1)

	let f = firstTruthy([
		() => l[1] === '|' && [l[0] || l[2]],
		() => l[1] === '&' && [l[0] && l[2]],
		() => l
	])

	return final ? f[0] : f
}

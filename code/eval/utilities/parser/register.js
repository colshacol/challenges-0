import { index } from '../../../utilities/index'
import { firstTruthy } from '../../../utilities/firstTruthy'
import { closeLevel } from './closeLevel'
import { newLevel } from './newLevel'

const COND_TOKENS = ['|', '&']
const BOOL_TOKENS = ['0', '1']
const TOKENS = [...COND_TOKENS, ...BOOL_TOKENS]

export const register = (_levels) => (token) => {
	if (TOKENS.includes(token)) {
		const push = (v) => index(_levels)(-1).push(v)

		return firstTruthy([
			() => token === '0' && push(false),
			() => token === '1' && push(true),
			() => push(token)
		])
	}

	token === ')' && closeLevel(_levels) || token === '(' && newLevel(_levels)
}
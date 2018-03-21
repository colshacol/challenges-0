import { trimWhitespace } from './trimWhitespace'
import { withOuterParens } from './withOuterParens'

export const clean = (target) => {
	return trimWhitespace(withOuterParens(target))
}
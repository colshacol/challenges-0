import { index } from '../../../utilities/index'
import { evaluateTopLevel } from './evaluateTopLevel'

export const closeLevel = (_levels) => {
	// Evaluate it down to true/false.
	_levels[_levels.length - 1] = evaluateTopLevel(_levels)()

	// If this is not the only level, we need to move the evaluation
	// into the parent level.
	if (_levels.length > 1) {
		const parentLevel = index(_levels)(-2)
	 
		parentLevel.push(index(_levels)(-1)[0])
		return _levels.pop()
	}
}

import { parse } from './parse'
import { evaluateTopLevel } from './evaluateTopLevel'
import { register } from './register'

export const parser = target => {
	let levels = []

	return evaluateTopLevel(levels)(parse(levels)(target)(register))
}

export const withOuterParens = target => {
	target.startsWith('(') || (target = `(${target}`)
	target.endsWith(')') || (target = `${target})`)

	return target
}

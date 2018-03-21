export const parse = (_levels) => (target) => (handler) => {
	target.split('').forEach(token => {
		handler(_levels)(token)
	})

	return true
}
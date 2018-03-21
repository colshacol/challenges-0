
exports.handleUnacceptableChars = (target) => {
  const unacceptable = target.match(/[^\s01\(\)\|\&]/)
	if (unacceptable) throw new Error(`messed up: ${JSON.stringify(unacceptable)}`)
	
	return target
}
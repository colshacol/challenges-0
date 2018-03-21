// Write a polyfill for reduce method of arrays.

if (!Array.prototype._reduce) {
	Object.defineProperty(Array.prototype, '_reduce', {
		value: function(reducer, final) {
			const self = this;
			
			self.forEach((item, index) => {
				final = reducer(final, item, index)
			})
			
			return final
		}
	})
}
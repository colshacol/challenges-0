import { is } from '../../utilities/is'

export const backwards = (last, middle) => (final, char, i) => {
	final.push(is(i)(middle.length - 1) ? `${char}${last}` : `${char}${final[final.length - 1]}`)

	return final
}

import { is } from '../../utilities/is'
import { middleChars } from './middleChars'

export const forwards = first => (final, char, i)  => {
	final.push(
		is(i)(0)
			? `${first}${char}`
			: `${final[final.length - 1]}${char}`
	)

	return final
}
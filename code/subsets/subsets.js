
// Generate all subsets of a string.
// eg: ‘water’ should generate ‘wa’, ‘wat’, ‘wate’ etc

import { is } from '../utilities/is'
import { middleChars } from './utilities/middleChars'
import { edgeChars } from './utilities/edgeChars'
import { forwards } from './utilities/forwards'
import { backwards } from './utilities/backwards'

export const subsets = (target) => {
  const [ first, last ] = edgeChars(target)
	const middle = middleChars(target)
	
	const f = middle.reduce(forwards(first), [])
	const b = middle.reduceRight(backwards(last, middle), [])
  
  return [ ...f, ...b ]
}
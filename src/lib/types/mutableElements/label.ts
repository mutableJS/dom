import { Element } from '.';
import WithChildren from './with/children';

type LabelElement = Element & {
	htmlFor?: HTMLLabelElement['htmlFor'];
} & WithChildren;

export default LabelElement;

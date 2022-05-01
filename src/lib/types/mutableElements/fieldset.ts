import { Element } from '.';
import WithChildren from './with/children';

type FieldsetElement = Element & {
	disabled?: HTMLFieldSetElement['disabled'];
	form?: HTMLFieldSetElement['form'];
	name?: HTMLFieldSetElement['name'];
} & WithChildren;

export default FieldsetElement;

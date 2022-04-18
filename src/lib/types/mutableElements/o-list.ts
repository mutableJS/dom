import { Element } from './index';
import WithChildren from './with/children';

type OListElement = Element & {
	reversed?: HTMLOListElement['reversed'];
	start?: HTMLOListElement['start'];
	type?: 'a' | 'A' | 'i' | 'I' | '1';
} & WithChildren;

export default OListElement;

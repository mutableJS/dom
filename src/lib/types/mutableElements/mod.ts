import { Element } from '.';
import WithChildren from './with/children';

type ModElement = Element & {
	cite?: HTMLModElement['cite'];
	dateTime?: HTMLModElement['dateTime'];
} & WithChildren;

export default ModElement;

import { Element } from '.';
import WithChildren from './with/children';

type DetailsElement = Element & {
	open?: HTMLDetailsElement['open'];
} & WithChildren;

export default DetailsElement;

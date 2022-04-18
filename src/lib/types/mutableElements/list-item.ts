import { Element } from '.';
import WithChildren from './with/children';

type ListItemElement = Element & {
	value?: HTMLLIElement['value'];
} & WithChildren;

export default ListItemElement;

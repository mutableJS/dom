import { Element } from '.';
import WithChildren from './with/children';

type TableColumnElement = Element & {
	span?: HTMLTableColElement['span'];
} & WithChildren;

export default TableColumnElement;

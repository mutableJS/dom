import { Element } from '.';
import WithChildren from './with/children';

type TableCellElement = Element & {
	colSpan?: HTMLTableCellElement['colSpan'];
	headers?: HTMLTableCellElement['headers'];
	rowSpan?: HTMLTableCellElement['rowSpan'];
} & WithChildren;

export default TableCellElement;

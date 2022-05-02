import { Element } from '.';
import WithChildren from './with/children';

type TableHeaderElement = Element & {
	abbr?: HTMLTableCellElement['abbr'];
	colSpan?: HTMLTableCellElement['colSpan'];
	headers?: HTMLTableCellElement['headers'];
	scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
} & WithChildren;

export default TableHeaderElement;

import { Element } from './index';
import WithChildren from './with/children';

type DataElement = Element & {
	value?: HTMLDataElement['value'];
} & WithChildren;

export default DataElement;

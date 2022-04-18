import { Element } from './index';
import WithChildren from './with/children';

type CanvasElement = Element & {
	height?: HTMLCanvasElement['height'];
	width?: HTMLCanvasElement['width'];
} & WithChildren;

export default CanvasElement;

import { Element } from './index';
import WithChildren from './with/children';

type StyleElement = Element & {
	media?: HTMLStyleElement['media'];
	nonce?: HTMLStyleElement['nonce'];
} & WithChildren;

export default StyleElement;

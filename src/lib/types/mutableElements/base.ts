import { Element } from './index';
import WithTarget from './with/target';

type BaseElement = Element & { href: HTMLBaseElement['href'] } & WithTarget;

export default BaseElement;

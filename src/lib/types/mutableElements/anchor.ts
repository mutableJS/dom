import { Element } from './index';
import WithTarget from './with/target';
import WithReferrerPolicy from './with/referrer-policy';
import WithChildren from './with/children';

type AnchorElement = Element & {
	download?: HTMLAnchorElement['download'];
	href?: HTMLAnchorElement['href'];
	hrefLang?: HTMLAnchorElement['hreflang'];
	ping?: HTMLAnchorElement['ping'];
	rel?: HTMLAnchorElement['rel'];
	type?: HTMLAnchorElement['type'];
} & WithTarget &
	WithReferrerPolicy &
	WithChildren;

export default AnchorElement;

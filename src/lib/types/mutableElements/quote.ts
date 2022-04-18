import { Element } from '.';
import WithChildren from './with/children';

type QuoteElement = Element & { cite?: HTMLQuoteElement['cite'] } & WithChildren;

export default QuoteElement;

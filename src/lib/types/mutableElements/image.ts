import { Element } from '.';
import WithReferrerPolicy from './with/referrer-policy';

type ImageElement = Element & {
	alt?: HTMLImageElement['alt'];
	crossOrigin?: 'anonymous' | 'use-credentials';
	decoding?: 'sync' | 'async' | 'auto';
	fetchPriority?: 'high' | 'low' | 'auto';
	height?: HTMLImageElement['height'];
	isMap?: HTMLImageElement['isMap'];
	sizes?: HTMLImageElement['sizes'];
	src?: HTMLImageElement['src'];
	srcSet?: HTMLImageElement['srcset'];
	width?: HTMLImageElement['width'];
	useMap?: HTMLImageElement['useMap'];
} & WithReferrerPolicy;

export default ImageElement;

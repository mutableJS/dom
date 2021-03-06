import { ProcessorTypes } from '../../propProcessors';
import WithChildren from './with/children';
import AnchorElement from './anchor';
import FormElement from './form';
import InputElement from './input';
import BaseElement from './base';
import ImageElement from './image';
import LabelElement from './label';
import ButtonElement from './button';
import ListItemElement from './list-item';
import OListElement from './o-list';
import CanvasElement from './canvas';
import DataElement from './data';
import ModElement from './mod';
import DetailsElement from './details';
import StyleElement from './style';
import QuoteElement from './quote';
import SelectElement from './select';
import OptionElement from './option';
import OptionGroupElement from './option-group';
import FieldsetElement from './fieldset';
import TextareaElement from './textarea';
import TableCellElement from './table-cell';
import TableHeaderElement from './table-header';
import TableColumnElement from './table-column';

export type Element = {
	accessKey?: HTMLElement['accessKey'];
	autocapitalize?:
		| ('off' | 'none')
		| ('on' | 'sentences')
		| 'words'
		| 'characters';
	autofocus?: HTMLElement['autofocus'];
	class?: HTMLElement['className'];
	contentEditable?: HTMLElement['contentEditable'];
	dir?: 'ltr' | 'rtl' | 'auto';
	draggable?: HTMLElement['draggable'];
	enterKeyHint?: HTMLElement['enterKeyHint'];
	hidden?: HTMLElement['hidden'];
	id?: HTMLElement['id'];
	inputMode?: HTMLElement['inputMode'];
	lang?: HTMLElement['lang'];
	nonce?: HTMLElement['nonce'];
	part?: HTMLElement['part'];
	slot?: HTMLElement['slot'];
	spellCheck?: HTMLElement['spellcheck'];
	tabIndex?: HTMLElement['tabIndex'];
	title?: HTMLElement['title'];
	translate?: HTMLElement['translate'];
} & {
	itemId?: string;
	itemProp?: string;
	itemRef?: string;
	itemScope?: string;
	itemType?: string;
} & {
	style?: ProcessorTypes['style'];
};

type DefaultElement = Element & WithChildren;

export type MutableElements = {
	a: AnchorElement;
	abbr: DefaultElement;
	address: DefaultElement;
	// area: AreaElement;
	article: DefaultElement;
	aside: DefaultElement;
	// audio: AudioElement;
	b: DefaultElement;
	base: BaseElement;
	bdi: DefaultElement;
	bdo: DefaultElement;
	// blockquote: QuoteElement;
	br: Element;
	button: ButtonElement;
	canvas: CanvasElement;
	caption: DefaultElement;
	cite: DefaultElement;
	code: DefaultElement;
	col: TableColumnElement;
	colgroup: TableColumnElement;
	data: DataElement;
	datalist: DefaultElement;
	dd: DefaultElement;
	del: ModElement;
	details: DetailsElement;
	dfn: DefaultElement;
	div: DefaultElement;
	dl: DefaultElement;
	dt: DefaultElement;
	em: DefaultElement;
	// embed: EmbedElement;
	fieldset: FieldsetElement;
	figcaption: DefaultElement;
	figure: DefaultElement;
	footer: DefaultElement;
	form: FormElement;
	h1: DefaultElement;
	h2: DefaultElement;
	h3: DefaultElement;
	h4: DefaultElement;
	h5: DefaultElement;
	h6: DefaultElement;
	header: DefaultElement;
	hgroup: DefaultElement;
	hr: Element;
	i: DefaultElement;
	// iframe: IFrameElement;
	img: ImageElement;
	input: InputElement;
	// ins: ModElement;
	kbd: DefaultElement;
	label: LabelElement;
	legend: DefaultElement;
	li: ListItemElement;
	// link: LinkElement;
	main: DefaultElement;
	// map: MapElement;
	mark: DefaultElement;
	menu: DefaultElement;
	// meta: MetaElement;
	// meter: MeterElement;
	nav: DefaultElement;
	noscript: DefaultElement;
	// object: ObjectElement;
	ol: OListElement;
	optgroup: OptionGroupElement;
	option: OptionElement;
	// output: OutputElement;
	p: DefaultElement;
	// param: ParamElement;
	// picture: PictureElement;
	pre: DefaultElement;
	// progress: ProgressElement;
	q: QuoteElement;
	rp: DefaultElement;
	rt: DefaultElement;
	ruby: DefaultElement;
	s: DefaultElement;
	samp: DefaultElement;
	// script: ScriptElement;
	section: DefaultElement;
	select: SelectElement;
	// slot: SlotElement;
	small: DefaultElement;
	// source: SourceElement;
	span: DefaultElement;
	strong: DefaultElement;
	style: StyleElement;
	sub: DefaultElement;
	summary: DefaultElement;
	sup: DefaultElement;
	table: DefaultElement;
	tbody: DefaultElement;
	td: TableCellElement;
	template: DefaultElement;
	textarea: TextareaElement;
	tfoot: DefaultElement;
	th: TableHeaderElement;
	thead: DefaultElement;
	// time: TimeElement;
	title: DefaultElement;
	tr: DefaultElement;
	// track: TrackElement;
	u: DefaultElement;
	ul: DefaultElement;
	var: DefaultElement;
	// video: VideoElement;
	wbr: DefaultElement;
};

export default MutableElements;

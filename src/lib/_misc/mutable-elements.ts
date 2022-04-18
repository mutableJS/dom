import propProcessors from '../propProcessors';
import { FunctionProps, WritableProps } from './_utils';

type Processors = ReturnType<typeof propProcessors>;
type ProcessorTypes = {
	[Key in keyof Processors]: Parameters<Processors[Key]>[0];
};

type ExtractedHTMLProps<E> = Pick<
	E,
	Exclude<WritableProps<E>, FunctionProps<E> | keyof Processors>
> &
	ProcessorTypes &
	GlobalEventHandlers;

type Element = ExtractedHTMLProps<HTMLElement>;
type AnchorElement = ExtractedHTMLProps<HTMLAnchorElement>;
type AreaElement = ExtractedHTMLProps<HTMLAreaElement>;
type AudioElement = ExtractedHTMLProps<HTMLAudioElement>;
type BaseElement = ExtractedHTMLProps<HTMLBaseElement>;
type QuoteElement = ExtractedHTMLProps<HTMLQuoteElement>;
type BodyElement = ExtractedHTMLProps<HTMLBodyElement>;
type BRElement = ExtractedHTMLProps<HTMLBRElement>;
type CanvasElement = ExtractedHTMLProps<HTMLCanvasElement>;
type ButtonElement = ExtractedHTMLProps<HTMLButtonElement>;
type TableCaptionElement = ExtractedHTMLProps<HTMLTableCaptionElement>;
type TableColElement = ExtractedHTMLProps<HTMLTableColElement>;
type DataElement = ExtractedHTMLProps<HTMLDataElement>;
type DataListElement = ExtractedHTMLProps<HTMLDataListElement>;
type ModElement = ExtractedHTMLProps<HTMLModElement>;
type DetailsElement = ExtractedHTMLProps<HTMLDetailsElement>;
type DivElement = ExtractedHTMLProps<HTMLDivElement>;
type DListElement = ExtractedHTMLProps<HTMLDListElement>;
type EmbedElement = ExtractedHTMLProps<HTMLEmbedElement>;
type FieldSetElement = ExtractedHTMLProps<HTMLFieldSetElement>;
type FormElement = ExtractedHTMLProps<HTMLFormElement>;
type HeadingElement = ExtractedHTMLProps<HTMLHeadingElement>;
type HeadElement = ExtractedHTMLProps<HTMLHeadElement>;
type HRElement = ExtractedHTMLProps<HTMLHRElement>;
type IFrameElement = ExtractedHTMLProps<HTMLIFrameElement>;
type ImageElement = ExtractedHTMLProps<HTMLImageElement>;
type InputElement = ExtractedHTMLProps<HTMLInputElement>;
type LabelElement = ExtractedHTMLProps<HTMLLabelElement>;
type LegendElement = ExtractedHTMLProps<HTMLLegendElement>;
type ListItemElement = ExtractedHTMLProps<HTMLLIElement>;
type LinkElement = ExtractedHTMLProps<HTMLLinkElement>;
type MapElement = ExtractedHTMLProps<HTMLMapElement>;
type MenuElement = ExtractedHTMLProps<HTMLMenuElement>;
type MetaElement = ExtractedHTMLProps<HTMLMetaElement>;
type MeterElement = ExtractedHTMLProps<HTMLMeterElement>;
type ObjectElement = ExtractedHTMLProps<HTMLObjectElement>;
type OListElement = ExtractedHTMLProps<HTMLOListElement>;
type OptGroupElement = ExtractedHTMLProps<HTMLOptGroupElement>;
type OptionElement = ExtractedHTMLProps<HTMLOptionElement>;
type OutputElement = ExtractedHTMLProps<HTMLOutputElement>;
type ParagraphElement = ExtractedHTMLProps<HTMLParagraphElement>;
type ParamElement = ExtractedHTMLProps<HTMLParamElement>;
type PictureElement = ExtractedHTMLProps<HTMLPictureElement>;
type PreElement = ExtractedHTMLProps<HTMLPreElement>;
type ProgressElement = ExtractedHTMLProps<HTMLProgressElement>;
type ScriptElement = ExtractedHTMLProps<HTMLScriptElement>;
type SelectElement = ExtractedHTMLProps<HTMLSelectElement>;
type SlotElement = ExtractedHTMLProps<HTMLSlotElement>;
type SourceElement = ExtractedHTMLProps<HTMLSourceElement>;
type SpanElement = ExtractedHTMLProps<HTMLSpanElement>;
type StyleElement = ExtractedHTMLProps<HTMLStyleElement>;
type TableElement = ExtractedHTMLProps<HTMLTableElement>;
type TableSectionElement = ExtractedHTMLProps<HTMLTableSectionElement>;
type TableCellElement = ExtractedHTMLProps<HTMLTableCellElement>;
type TemplateElement = ExtractedHTMLProps<HTMLTemplateElement>;
type TextAreaElement = ExtractedHTMLProps<HTMLTextAreaElement>;
type TimeElement = ExtractedHTMLProps<HTMLTimeElement>;
type TitleElement = ExtractedHTMLProps<HTMLTitleElement>;
type TableRowElement = ExtractedHTMLProps<HTMLTableRowElement>;
type TrackElement = ExtractedHTMLProps<HTMLTrackElement>;
type UListElement = ExtractedHTMLProps<HTMLUListElement>;
type VideoElement = ExtractedHTMLProps<HTMLVideoElement>;

type MutableElements = {
	a: AnchorElement;
	abbr: Element;
	address: Element;
	area: AreaElement;
	article: Element;
	aside: Element;
	audio: AudioElement;
	b: Element;
	base: BaseElement;
	bdi: Element;
	bdo: Element;
	blockquote: QuoteElement;
	body: BodyElement;
	br: BRElement;
	button: ButtonElement;
	canvas: CanvasElement;
	caption: TableCaptionElement;
	cite: Element;
	code: Element;
	col: TableColElement;
	colgroup: TableColElement;
	data: DataElement;
	datalist: DataListElement;
	dd: Element;
	del: ModElement;
	details: DetailsElement;
	dfn: Element;
	div: DivElement;
	dl: DListElement;
	dt: Element;
	em: Element;
	embed: EmbedElement;
	fieldset: FieldSetElement;
	figcaption: Element;
	figure: Element;
	footer: Element;
	form: FormElement;
	h1: HeadingElement;
	h2: HeadingElement;
	h3: HeadingElement;
	h4: HeadingElement;
	h5: HeadingElement;
	h6: HeadingElement;
	head: HeadElement;
	header: Element;
	hgroup: Element;
	hr: HRElement;
	i: Element;
	iframe: IFrameElement;
	img: ImageElement;
	input: InputElement;
	ins: ModElement;
	kbd: Element;
	label: LabelElement;
	legend: LegendElement;
	li: ListItemElement;
	link: LinkElement;
	main: Element;
	map: MapElement;
	mark: Element;
	menu: MenuElement;
	meta: MetaElement;
	meter: MeterElement;
	nav: Element;
	noscript: Element;
	object: ObjectElement;
	ol: OListElement;
	optgroup: OptGroupElement;
	option: OptionElement;
	output: OutputElement;
	p: ParagraphElement;
	param: ParamElement;
	picture: PictureElement;
	pre: PreElement;
	progress: ProgressElement;
	q: QuoteElement;
	rp: Element;
	rt: Element;
	ruby: Element;
	s: Element;
	samp: Element;
	script: ScriptElement;
	section: Element;
	select: SelectElement;
	slot: SlotElement;
	small: Element;
	source: SourceElement;
	span: SpanElement;
	strong: Element;
	style: StyleElement;
	sub: Element;
	summary: Element;
	sup: Element;
	table: TableElement;
	tbody: TableSectionElement;
	td: TableCellElement;
	template: TemplateElement;
	textarea: TextAreaElement;
	tfoot: TableSectionElement;
	th: TableCellElement;
	thead: TableSectionElement;
	time: TimeElement;
	title: TitleElement;
	tr: TableRowElement;
	track: TrackElement;
	u: Element;
	ul: UListElement;
	var: Element;
	video: VideoElement;
	wbr: Element;
};

export default MutableElements;

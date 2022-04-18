import { Element } from ".";

type LabelElement = Element & {
	htmlFor?: HTMLLabelElement['htmlFor']
};

export default LabelElement;

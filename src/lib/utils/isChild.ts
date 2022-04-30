import { VisibleChild } from 'lib/types/mutableElements/with/children';

function isChild(test: unknown): test is VisibleChild {
	return (
		!!(typeof test === 'string' && test) ||
		typeof test === 'number' ||
		test instanceof Node
	);
}

export default isChild;

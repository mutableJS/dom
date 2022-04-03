# mutableJS / DOM

DOM elements, brought to life by `@mutablejs/core`

[![npm](https://img.shields.io/npm/dw/@mutablejs/dom?style=for-the-badge)](https://www.npmjs.com/package/@mutablejs/dom) [![GitHub](https://img.shields.io/github/license/mutablejs/dom?color=blue&style=for-the-badge)](https://github.com/mutableJS/dom/blob/master/LICENSE)
![GitHub last commit](https://img.shields.io/github/last-commit/mutablejs/dom?style=for-the-badge) [![Issues](https://img.shields.io/github/issues/mutableJS/dom?style=for-the-badge)](https://github.com/mutableJS/dom/issues)

## FAQ

#### Can mutableJS / DOM be standalone?

In theory it can, but it is kinda pointless, since it's reactivity depends on the input of `@mutableJS/core` activated variables.

#### Is it ready to use?

At the current stage mutableJS is just a proof of concept and no real life projects exist yet.

## Installation

Install with **npm**:

```bash
    npm install @mutablejs/dom
```

Install with **yarn**:

```bash
    yarn add @mutablejs/dom
```

## Usage/Examples

```typescript
import mutable, { mutableFn } from '@mutablejs/core';
import { mutableElement } from '@mutablejs/dom';

const root = document.body;

const count = mutable(0);

const makeText = mutableFn(
	({ pre, count }: { pre: string; count: number }) => `${pre}: ${count}`,
);

root?.append(
	mutableElement('button', {
		innerText: makeText({ pre: 'Clicks', count }),
		onclick() {
			count.value++;
		},
	}),
	mutableElement('div', {
		innerText: makeText({ pre: 'Clicks made', count }),
	}),
);
```

Additional Todo demo in our [demo repository](https://github.com/mutableJS/demo)

## Authors

-   [@donnikitos](https://www.github.com/donnikitos)

## Feedback

If you have any feedback, please reach out to us. We are open to suggestions, ideas and collaboration.

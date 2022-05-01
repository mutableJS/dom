# mutableJS / DOM

DOM elements, brought to life by [@mutableJS/core](https://www.npmjs.com/package/@mutablejs/core).

[![npm](https://img.shields.io/npm/dt/@mutablejs/dom?style=for-the-badge)](https://www.npmjs.com/package/@mutablejs/dom) ![GitHub Repo stars](https://img.shields.io/github/stars/mutablejs/dom?label=GitHub%20Stars&style=for-the-badge) [![GitHub](https://img.shields.io/github/license/mutablejs/dom?color=blue&style=for-the-badge)](https://github.com/mutableJS/dom/blob/master/LICENSE)
![GitHub last commit](https://img.shields.io/github/last-commit/mutablejs/dom?style=for-the-badge) [![Issues](https://img.shields.io/github/issues/mutableJS/dom?style=for-the-badge)](https://github.com/mutableJS/dom/issues)

> ## Now with JSX support !!!

Since version 0.2.0 you can! Just check out or clone our [mutableJS / Demo repository](https://github.com/mutableJS/demo) for the correct setup. Although the lib is written in TypeScript, the type support for JSX-elements is only partially there yet.

## FAQ

#### Can mutableJS / DOM be standalone?

In theory it can, but it is kinda pointless, since it's reactivity depends on the input of [@mutableJS/core](https://www.npmjs.com/package/@mutablejs/core) activated variables.

#### Is it ready to use?

At the current stage mutableJS is just a proof of concept and no real life projects exist yet.

#### Demo?

Sure, there is a demo app with super simple code available. Be sure to clone and play with our [mutableJS / Demo repository](https://github.com/mutableJS/demo)!

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

**JSX JS/ TS**

```typescript
import mutable, { mutableFn } from '@mutablejs/core';
import { mutableElement } from '@mutablejs/dom';

const root = document.body;

const count = mutable(0);

const makeText = mutableFn(
	({ pre, count }: { pre: string; count: number }) => `${pre}: ${count}`,
);

root?.append(
	<div>
		<button
			onclick={() => {
				count.value++;
			}}
		>
			{makeText({ pre: 'Clicks', count })}
		</button>
		<div>{makeText({ pre: 'Clicks made', count })}</div>
	</div>,
);
```

**Plain JS/ TS**

```typescript
import mutable, { mutableFn } from '@mutablejs/core';
import { mutableElement } from '@mutablejs/dom';

const root = document.body;

const count = mutable(0);

const makeText = mutableFn(
	({ pre, count }: { pre: string; count: number }) => `${pre}: ${count}`,
);

root?.append(
	mutableElement(
		'button',
		{
			onclick() {
				count.value++;
			},
		},
		makeText({ pre: 'Clicks', count }),
	),
	mutableElement('div', null, makeText({ pre: 'Clicks made', count })),
);
```

More complex todo-app demo in our [demo repository](https://github.com/mutableJS/demo).

## Authors

-   [@donnikitos](https://www.github.com/donnikitos)

## Feedback

If you have any feedback, please reach out to us. We are open to suggestions, ideas and collaboration.

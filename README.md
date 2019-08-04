# ls-view-text-direction

![npm](https://img.shields.io/npm/dt/litespeed.js.svg)
[![npm version](https://badge.fury.io/js/ls-view-text-direction.svg)](https://badge.fury.io/js/ls-view-text-direction)
[![Build Status](https://travis-ci.org/litespeed-js/ls-view-text-direction.svg?branch=master)](https://travis-ci.org/litespeed-js/ls-view-text-direction)
[![Chat With Us](https://img.shields.io/gitter/room/litespeed-js/community.svg)](https://gitter.im/litespeed-js/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

Litespeed.js view component that adds RTL or LTR your your text or input element according to their language

## Installation

This package is wrapped as a [Litespeed.js](https://github.com/litespeed-js/litespeed.js) component. To use it, you need to init a new [Litespeed.js](https://github.com/litespeed-js/litespeed.js) project or use an exisiting [Litespeed.js](https://github.com/litespeed-js/litespeed.js) project. To learn more about [Litespeed.js](https://github.com/litespeed-js/litespeed.js) [Javascript web framework](https://github.com/litespeed-js/litespeed.js) got to the [official repository](https://github.com/litespeed-js/litespeed.js).

Install with [NPM](https://www.npmjs.com/):

```bash
npm install ls-view-text-direction
```

Install with CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/ls-view-text-direction"></script>
```

## Getting Started

Add the directive data- attribute on your text or input element. The direction of the text will be decided by the first non-special character.

### Example English

```html
<input type="text" value="Hello World!" data-ls-text-direction />
```

Result:
```html
<input type="text" value="Hello World!" style="direction: ltr; text-align: left;">
```

### Example Hebrew
```html
<input type="text" value="שלום עולם!" data-ls-text-direction />
```

Result:
```html
<input type="text" value="שלום עולם!" style="direction: rtl; text-align: right;">
```

## Contributing

All code contributions - including those of people having commit access - must go through a pull request and approved by a core developer before being merged. This is to ensure proper review of all the code.

Fork the project, create a feature branch, and send us a pull request.

For security issues, please email security@appwrite.io instead of posting a public issue in GitHub.

## Copyright and license

The MIT License (MIT) http://www.opensource.org/licenses/mit-license.php

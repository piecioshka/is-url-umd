# is-url-umd

[![node version](https://img.shields.io/node/v/is-url-umd.svg)](https://www.npmjs.com/package/is-url-umd)
[![npm version](https://badge.fury.io/js/is-url-umd.svg)](https://badge.fury.io/js/is-url-umd)
[![downloads count](https://img.shields.io/npm/dt/is-url-umd.svg)](https://www.npmjs.com/package/is-url-umd)
[![license](https://img.shields.io/npm/l/is-url-umd.svg)](https://piecioshka.mit-license.org)

Tells you that string is in URL format. Library in UMD style.

## Install

```bash
npm install is-url-umd
```

## Usage

```javascript
var isURL = require('is-url-umd');

if (isURL(string)) {
    console.log('it is string :)');
} else {
    console.log('this is not a string :(');
}
```

## How it works?

In package `is-url` we can find run function `.test()` on RegExp:

```javascript
/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/
```

... and it is returns `boolean`.

## Support

Library in [UMD](https://github.com/umdjs/umd) format, so support all kinds of exports:

* AMD
* CommonJS
* typical global variable

## Dependencies

Use https://www.npmjs.com/package/is-url to support `isURL` function.

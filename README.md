# element-unit-tests

JavaScript tests for element-based units like `EW`, `EH`, `EMIN`, and `EMAX` provided as a JS module.

## Usage

These functions are provided in two formats:

- commonjs module: [index.js](index.js)
- vanilla JS module: [index.vanilla.js](index.vanilla.js)

### As a CommonJS Module

If you are using Node or other tools that can load commonjs modules you will want to use the [index.js](index.js) version of the library. The simplest way to get started is to require this module in another module with `require()` like this:

```js
let elementUnit = require('../index.js')
```

An example of this can be found in [tests/cjs-test.js](tests/cjs-test.js)

### As a Vanilla JS Module

If you are using vanilla JS modules you will want to use the [index.vanilla.js](index.vanilla.js) version of the library. The simplest way to get started is to `import` this module into another module like this:

```js
import * as elementUnit from './path/to/index.vanilla.js'
```

An example of this can be found in [tests/vanilla-test.html](https://tomhodgins.github.io/element-unit-tests/tests/vanilla-test.html)

Now the functions from this library (`ew`, `eh`, `emin`, `emax`) should be available for use inside this module as `elementUnit.ew`, `elementUnit.eh`, etc.

### Demo

A functional demo of these functions being used for styling can be found in [tests/demo.html](https://tomhodgins.github.io/element-unit-tests/tests/demo.html)

## Related Info

- [Element Based Units on Responsive.style](https://responsive.style/techniques/element-based-units.html)
- [Element-Percentage Units in Element Queries Spec](https://tomhodgins.github.io/element-queries-spec/element-queries.html#element-percentage-units)
- [jsincss-element-units plugin](https://github.com/tomhodgins/jsincss-element-units)
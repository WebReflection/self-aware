# self-aware

[![Build Status](https://travis-ci.com/WebReflection/self-aware.svg?branch=master)](https://travis-ci.com/WebReflection/self-aware) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/self-aware/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/self-aware?branch=master) [![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

Makes methods invokable with the original context as fallback,
fixing the unexpected `Promise` behavior or similar cases.

```js
import selfAware from 'self-aware';
// or const selfAware = require('self-aware');

const {resolve, reject} = selfAware(Promise);

resolve(123); // it won't throw 🎉
```

### API

The `selfAware(one[, orMore[, generic]]):generic` will patch only once per constructor whatever object, class, or function, passed along. It returns the last argument as common use case for extends or one off.

# self-aware

[![Build Status](https://travis-ci.com/WebReflection/self-aware.svg?branch=master)](https://travis-ci.com/WebReflection/self-aware) [![Build Status](https://travis-ci.org/WebReflection/self-aware.svg?branch=master)](https://travis-ci.org/WebReflection/self-aware) [![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

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

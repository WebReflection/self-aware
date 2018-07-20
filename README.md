#self-aware

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

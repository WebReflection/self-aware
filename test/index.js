var selfAware = require('../cjs');

console.assert(selfAware() === void 0, 'handles any amount of arguments');
console.assert(selfAware(Object) === Object, 'handles one argument');
console.assert(selfAware(Object, Array) === Array, 'returns last argument');

var resolve = selfAware(Promise).resolve;

console.assert(resolve() instanceof Promise, 'can be invoked without context');

// for code coverage sake
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
Object.defineProperty(
  Object,
  'getOwnPropertyDescriptor',
  {value: function () {}}
);
selfAware(String);
Object.defineProperty(
  Object,
  'getOwnPropertyDescriptor',
  {value: getOwnPropertyDescriptor}
);

var isFinite = Number.isFinite;
selfAware(Number);
var get = Object.getOwnPropertyDescriptor(Number, 'isFinite').get;
console.assert(get(123), 'methods work even if extracted as descriptors');

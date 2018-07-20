/*! (c) 2018 Andrea Giammarchi (ISC) */
var selfAware = (function (parsed, aware) {
  "use strict";
  function enlighten(generic) {
    if (parsed.has(generic)) return;
    parsed.add(generic);
    Object.getOwnPropertyNames(generic).forEach(function (name) {
      var value, descriptor = Object.getOwnPropertyDescriptor(generic, name);
      if (!descriptor) return;
      if (descriptor.configurable && typeof descriptor.value === 'function') {
        value = descriptor.value;
        delete descriptor.value;
        delete descriptor.writable;
        descriptor.get = function get() {
          var self = this || generic;
          var methods = aware.get(self);
          if (!methods) aware.set(self, methods = Object.create(null));
          return methods[name] || (methods[name] = function () {
            return value.apply(this || self, arguments);
          });
        };
        Object.defineProperty(generic, name, descriptor);
      }
    });
  }
  return function selfAware() {
    var generic, i = 0;
    while (i < arguments.length)
      enlighten(generic = arguments[i++]);
    return generic;
  };
}(new WeakSet, new WeakMap));
export default selfAware;

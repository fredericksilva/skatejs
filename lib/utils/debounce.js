(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module);
  }
})(function (exports, module) {
  "use strict";

  module.exports = function (fn) {
    var called = false;

    return function () {
      if (!called) {
        called = true;
        setTimeout(function () {
          called = false;
          fn();
        }, 1);
      }
    };
  };
});
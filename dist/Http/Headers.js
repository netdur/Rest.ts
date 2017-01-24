System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Headers(headers) {
        return function (target, key, descriptor) {
            var original = descriptor.value;
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return {
                    type: "headers",
                    value: headers,
                    original: original
                };
            };
            return descriptor;
        };
    }
    exports_1("Headers", Headers);
    return {
        setters: [],
        execute: function () {
        }
    };
});

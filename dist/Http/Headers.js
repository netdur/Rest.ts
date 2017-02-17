System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Headers(headers) {
        return function (target, key, descriptor) {
            var original = descriptor.value;
            descriptor.headers = headers;
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

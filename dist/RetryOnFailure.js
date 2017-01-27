System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function RetryOnFailure(attempts, delay) {
        if (attempts === void 0) { attempts = 3; }
        if (delay === void 0) { delay = 1000; }
        return function (target, key, descriptor) {
            var original = descriptor.value;
            descriptor.retryOnFailure = {
                attempts: attempts,
                delay: delay
            };
            return descriptor;
        };
    }
    exports_1("RetryOnFailure", RetryOnFailure);
    return {
        setters: [],
        execute: function () {
        }
    };
});

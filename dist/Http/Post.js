System.register(["./Base"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function PUT(builder) {
        return function (target, key, descriptor) {
            return Base_1.BasePPP('POST', builder, target, key, descriptor);
        };
    }
    exports_1("PUT", PUT);
    var Base_1;
    return {
        setters: [
            function (Base_1_1) {
                Base_1 = Base_1_1;
            }
        ],
        execute: function () {
        }
    };
});

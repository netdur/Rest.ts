System.register(["./Base"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function POST(builder) {
        return function (target, key, descriptor) {
            return Base_1.BasePPP('PUT', builder, target, key, descriptor);
        };
    }
    exports_1("POST", POST);
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

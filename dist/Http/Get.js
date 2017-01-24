System.register(["./Base"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function GET(builder) {
        return function (target, key, descriptor) {
            return Base_1.BaseGD("GET", builder, target, key, descriptor);
        };
    }
    exports_1("GET", GET);
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

System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BasePPP, BaseGD;
    return {
        setters: [],
        execute: function () {
            exports_1("BasePPP", BasePPP = function (type, builder, target, key, descriptor) {
                var original = descriptor.value();
                descriptor.value = function (model) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var relativePath = builder.apply(void 0, args);
                    var url = new URL(relativePath, this.baseUrl);
                    var data = new FormData();
                    Object.getOwnPropertyNames(model).forEach(function (field) { return data.append(field, model[field]); });
                    var headers = new Headers();
                    if (original != undefined && original.hasOwnProperty("type") && original.type == "headers") {
                        original.value.forEach(function (header) {
                            headers.append.apply(headers, header.split(":"));
                        });
                    }
                    return fetch(url, {
                        method: type,
                        body: data,
                        headers: headers
                    });
                };
                return descriptor;
            });
            exports_1("BaseGD", BaseGD = function (type, builder, target, key, descriptor) {
                var original = descriptor.value();
                descriptor.value = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var relativePath = builder.apply(void 0, args);
                    var url = new URL(relativePath, this.baseUrl);
                    var headers = new Headers();
                    if (original != undefined && original.hasOwnProperty("type") && original.type == "headers") {
                        original.value.forEach(function (header) {
                            headers.append.apply(headers, header.split(":"));
                        });
                    }
                    return fetch(url, {
                        method: type,
                        headers: headers
                    });
                };
                return descriptor;
            });
        }
    };
});

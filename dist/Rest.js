System.register(["./Service", "./Template", "./RetryOnFailure", "./Http/Get", "./Http/Post", "./Http/Put", "./Http/Patch", "./Http/Delete", "./Http/Headers", "./Http/Base"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rest;
    var exportedNames_1 = {
        "Rest": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n))
                exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (Service_1_1) {
                exportStar_1(Service_1_1);
            },
            function (Template_1_1) {
                exportStar_1(Template_1_1);
            },
            function (RetryOnFailure_1_1) {
                exportStar_1(RetryOnFailure_1_1);
            },
            function (Get_1_1) {
                exportStar_1(Get_1_1);
            },
            function (Post_1_1) {
                exportStar_1(Post_1_1);
            },
            function (Put_1_1) {
                exportStar_1(Put_1_1);
            },
            function (Patch_1_1) {
                exportStar_1(Patch_1_1);
            },
            function (Delete_1_1) {
                exportStar_1(Delete_1_1);
            },
            function (Headers_1_1) {
                exportStar_1(Headers_1_1);
            },
            function (Base_1_1) {
                exportStar_1(Base_1_1);
            }
        ],
        execute: function () {
            Rest = (function () {
                function Rest(service) {
                    this.service = service;
                }
                Rest.prototype.build = function () {
                    return this.service;
                };
                return Rest;
            }());
            exports_1("Rest", Rest);
        }
    };
});

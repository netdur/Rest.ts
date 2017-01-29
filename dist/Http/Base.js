System.register([], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments)).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
        return { next: verb(0), "throw": verb(1), "return": verb(2) };
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var __moduleName = context_1 && context_1.id;
    var delay, buildHeaders, handleMiddleWear, retryAndReturnPromise, BasePPP, BaseGD;
    return {
        setters: [],
        execute: function () {
            delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
            buildHeaders = function (descriptor) {
                var headers = new Headers();
                if (descriptor != undefined && descriptor.hasOwnProperty("headers")) {
                    descriptor.headers.forEach(function (header) { return headers.append.apply(headers, header.split(":")); });
                }
                return headers;
            };
            handleMiddleWear = function (response, descriptor) {
                var mw = descriptor.original(response);
                if (mw instanceof Response) {
                    response = mw;
                }
                return response;
            };
            retryAndReturnPromise = function (_a) {
                var url = _a.url, type = _a.type, headers = _a.headers, descriptor = _a.descriptor, model = _a.model;
                return __awaiter(this, void 0, void 0, function () {
                    var data, promise, responseOK, tryCount, options, e_1, options;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                data = new FormData();
                                if (model)
                                    Object.getOwnPropertyNames(model).forEach(function (field) { return data.append(field, model[field]); });
                                if (!(descriptor != undefined && descriptor.hasOwnProperty("retryOnFailure")))
                                    return [3 /*break*/, 9];
                                promise = void 0;
                                responseOK = false;
                                tryCount = 0;
                                _a.label = 1;
                            case 1:
                                if (!(!responseOK && tryCount < descriptor.retryOnFailure.attempts))
                                    return [3 /*break*/, 8];
                                _a.label = 2;
                            case 2:
                                _a.trys.push([2, 4, 5, 7]);
                                options = {
                                    method: type,
                                    headers: headers
                                };
                                if (model)
                                    options.data = data;
                                return [4 /*yield*/, fetch(url, options)];
                            case 3:
                                promise = _a.sent();
                                responseOK = promise.ok;
                                return [3 /*break*/, 7];
                            case 4:
                                e_1 = _a.sent();
                                console.error("intercept", "Request is not successful - " + tryCount);
                                return [3 /*break*/, 7];
                            case 5: return [4 /*yield*/, delay(descriptor.retryOnFailure.delay)];
                            case 6:
                                _a.sent();
                                tryCount++;
                                return [7 /*endfinally*/];
                            case 7: return [3 /*break*/, 1];
                            case 8: return [2 /*return*/, handleMiddleWear(promise, descriptor)];
                            case 9:
                                options = {
                                    method: type,
                                    headers: headers
                                };
                                if (model)
                                    options.data = data;
                                return [2 /*return*/, handleMiddleWear(fetch(url, options), descriptor)];
                        }
                    });
                });
            };
            exports_1("BasePPP", BasePPP = function (type, builder, target, key, descriptor) {
                var original = descriptor.value;
                descriptor.value = function (model) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return __awaiter(this, void 0, void 0, function () {
                        var relativePath, url, headers;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    relativePath = builder.apply(void 0, args);
                                    url = new URL(relativePath, this.baseUrl);
                                    headers = buildHeaders(descriptor);
                                    return [4 /*yield*/, retryAndReturnPromise({ url: url, type: type, headers: headers, descriptor: descriptor, model: model })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                descriptor.original = original;
                return descriptor;
            });
            exports_1("BaseGD", BaseGD = function (type, builder, target, key, descriptor) {
                var original = descriptor.value;
                descriptor.value = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return __awaiter(this, void 0, void 0, function () {
                        var relativePath, url, headers;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    relativePath = builder.apply(void 0, args);
                                    url = new URL(relativePath, this.baseUrl);
                                    headers = buildHeaders(descriptor);
                                    return [4 /*yield*/, retryAndReturnPromise({ url: url, type: type, headers: headers, descriptor: descriptor })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                descriptor.original = original;
                return descriptor;
            });
        }
    };
});

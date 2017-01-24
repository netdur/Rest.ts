System.register(["./Rest"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
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
    var Rest_1, Models, JSONPlaceholder, Main, _a, _b, _c, _d, _e, _f, _g, _h;
    return {
        setters: [
            function (Rest_1_1) {
                Rest_1 = Rest_1_1;
            }
        ],
        execute: function () {
            (function (Models) {
                var Post = (function () {
                    function Post() {
                    }
                    return Post;
                }());
                Models.Post = Post;
            })(Models || (Models = {}));
            JSONPlaceholder = (function () {
                function JSONPlaceholder() {
                    this.baseUrl = "https://jsonplaceholder.typicode.com";
                }
                JSONPlaceholder.prototype.comments = function () { };
                JSONPlaceholder.prototype.posts = function () { };
                JSONPlaceholder.prototype.post = function (id) { };
                JSONPlaceholder.prototype.postsByUser = function (userId) { };
                JSONPlaceholder.prototype.create = function (post) { };
                JSONPlaceholder.prototype.update = function (post, postId) { };
                JSONPlaceholder.prototype.save = function (post, postId) { };
                JSONPlaceholder.prototype.remove = function (postId) { };
                return JSONPlaceholder;
            }());
            __decorate([
                Rest_1.GET((_a = ["/posts/", "/comments"], _a.raw = ["/posts/", "/comments"], Rest_1.Template(_a, 0))),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Object)
            ], JSONPlaceholder.prototype, "comments", null);
            __decorate([
                Rest_1.GET((_b = ["/posts"], _b.raw = ["/posts"], Rest_1.Template(_b))),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Object)
            ], JSONPlaceholder.prototype, "posts", null);
            __decorate([
                Rest_1.GET((_c = ["/posts/", ""], _c.raw = ["/posts/", ""], Rest_1.Template(_c, 0))),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [Number]),
                __metadata("design:returntype", Object)
            ], JSONPlaceholder.prototype, "post", null);
            __decorate([
                Rest_1.GET((_d = ["/posts?userId=", ""], _d.raw = ["/posts?userId=", ""], Rest_1.Template(_d, 0))),
                Rest_1.Headers(["xyz: abc"]),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [Number]),
                __metadata("design:returntype", Object)
            ], JSONPlaceholder.prototype, "postsByUser", null);
            __decorate([
                Rest_1.POST((_e = ["/posts"], _e.raw = ["/posts"], Rest_1.Template(_e))),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [Models.Post]),
                __metadata("design:returntype", Object)
            ], JSONPlaceholder.prototype, "create", null);
            __decorate([
                Rest_1.PUT((_f = ["/posts/", ""], _f.raw = ["/posts/", ""], Rest_1.Template(_f, 0))),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [Models.Post, Number]),
                __metadata("design:returntype", Object)
            ], JSONPlaceholder.prototype, "update", null);
            __decorate([
                Rest_1.PATCH((_g = ["/posts/", ""], _g.raw = ["/posts/", ""], Rest_1.Template(_g, 0))),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [Models.Post, Number]),
                __metadata("design:returntype", Object)
            ], JSONPlaceholder.prototype, "save", null);
            __decorate([
                Rest_1.DELETE((_h = ["/posts/", ""], _h.raw = ["/posts/", ""], Rest_1.Template(_h, 0))),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [Number]),
                __metadata("design:returntype", Object)
            ], JSONPlaceholder.prototype, "remove", null);
            Main = (function () {
                function Main() {
                    this.service = new JSONPlaceholder();
                    this.loadPostByUserAsync(1).then(function (tock) {
                        console.log(tock);
                    });
                }
                Main.prototype.loadPostByUserAsync = function (userId) {
                    return __awaiter(this, void 0, void 0, function () {
                        var tick, response, posts, tack;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    tick = performance.now();
                                    return [4 /*yield*/, this.service.postsByUser(userId)];
                                case 1:
                                    response = _a.sent();
                                    return [4 /*yield*/, response.json()];
                                case 2:
                                    posts = _a.sent();
                                    posts.forEach(function (post) {
                                        console.log(post.id + " => " + post.title);
                                    });
                                    tack = performance.now();
                                    return [2 /*return*/, tack - tick];
                            }
                        });
                    });
                };
                return Main;
            }());
            new Main();
        }
    };
});

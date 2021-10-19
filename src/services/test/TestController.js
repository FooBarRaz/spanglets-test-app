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
Object.defineProperty(exports, "__esModule", { value: true });
var WebDecorators_1 = require("spangle-ts/dist/web/WebDecorators");
var TestController = /** @class */ (function () {
    function TestController() {
    }
    TestController.prototype.greet = function (req, res) {
        res.send('hello there..');
    };
    __decorate([
        (0, WebDecorators_1.Get)('/greeting'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TestController.prototype, "greet", null);
    TestController = __decorate([
        (0, WebDecorators_1.Controller)('/test')
    ], TestController);
    return TestController;
}());
exports.default = new TestController();

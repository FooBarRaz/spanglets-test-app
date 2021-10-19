"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var WebDecorators_1 = require("spangle-ts/dist/web/WebDecorators");
var TestController_1 = __importDefault(require("../services/test/TestController"));
var server = express();
var controllers = [TestController_1.default];
var PORT = 8090;
server.use((0, WebDecorators_1.createRouteForControllers)(controllers));
server.listen(PORT, function () {
    console.log('### Server listening on port %d', PORT);
});

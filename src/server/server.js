"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WebDecorators_1 = require("spangle-ts/dist/web/WebDecorators");
const TestController_1 = __importDefault(require("../services/test/TestController"));
const server = (0, express_1.default)();
const controllers = [TestController_1.default];
const PORT = 8090;
server.use((0, WebDecorators_1.createRouteForControllers)(controllers));
server.listen(PORT, () => {
    console.log('### Server listening on port %d', PORT);
});

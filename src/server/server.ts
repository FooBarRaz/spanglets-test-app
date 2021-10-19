import express from 'express'
import { createRouteForControllers } from "spangle-ts/dist/web/WebDecorators";
import TestController from "../services/test/TestController";

const server = express()
const controllers = [TestController]

const PORT = 8090

server.use(createRouteForControllers(controllers))

server.listen(PORT, () => {
   console.log('### Server listening on port %d', PORT)
})

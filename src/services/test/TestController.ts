import { Request, Response }  from 'express'
import {Controller, Get} from 'spangle-ts/dist/web/WebDecorators'

@Controller('/test')
class TestController {
    @Get('/greeting')
    greet(req: Request, res: Response) {
        res.send('hello there..')
    }
}

export default new TestController()

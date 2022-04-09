import {BaseController} from "@/controllers/baseController";


class TestController extends BaseController{

    constructor() {
        super();

        this.bindRoutes([
            { path: '/test', method: 'get', func : this.test }
        ]);
    }

    public test(req : Request, res : Response) {
        // @ts-ignore
        res.json('dwadwa');
    }


}

import {mainController} from "@/controllers/mainController";

interface IDataRoutes {
    path: string,
    method: string,
    func: Function,
    middleware?: [],
}
// import * as express from 'express';
// const router = express();

import { Router } from 'express';

export abstract class BaseController {

    private readonly _router : Router;

    protected constructor() {
        this._router = Router();
    }

    protected bindRoutes(dataRoutes : IDataRoutes[]) {
        dataRoutes.forEach(route => {

            const handler = route.func.bind(this)
            this._router[route.method](route.path, handler)

        })


        // router.delete('/:id', mainController.destroy );

    }

}

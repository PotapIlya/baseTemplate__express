import { Request, Response } from 'express';

class mainController {

    constructor() {
        //
    }

    static get(req : Request, res : Response) : Response {
        return res.status(200).json('get')
    }

    static create(req : Request, res : Response) : Response {
        return  res.status(200).json('create')
    }

    static store(req : Request, res : Response) : Response{
        return  res.status(200).json('store')
    }

    static show(req : Request, res : Response) : Response{
        return  res.status(200).json('show -' + req.params.id)
    }

    static edit(req : Request, res : Response) : Response{
        return  res.status(200).json('edit -' + req.params.id)
    }

    static update(req : Request, res : Response) : Response{
        return  res.status(200).json('update')
    }

    static destroy(req : Request, res : Response) : Response{
        return  res.status(200).json('destroy')
    }

}

export {
    mainController
}
interface IArgs {
    path: string,
    fileName: string,
}

export const routeController = (args: IArgs) : string => {
    const { fileName, path } = args;
    return `import * as express from 'express';
const router = express();

import { ${fileName}Controller } from '../controllers/${path}Controller'

router.get('/${fileName}', ${fileName}Controller.get );
router.get('/${fileName}/create', ${fileName}Controller.create );
router.post('/${fileName}', ${fileName}Controller.store );
router.get('/${fileName}/:id', ${fileName}Controller.show );
router.get('/${fileName}/:id/edit', ${fileName}Controller.edit );
router.put('/${fileName}/', ${fileName}Controller.update );
router.delete('/${fileName}/:id', ${fileName}Controller.destroy );

export {
    router
}`
}

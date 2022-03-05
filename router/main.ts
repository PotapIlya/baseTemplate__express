import * as express from 'express';
const router = express();

import {mainController} from '@/controllers/mainController';


router.get('/', mainController.get );
router.get('/create', mainController.create );
router.post('/', mainController.store );
router.get('/:id', mainController.show );
router.get('/:id/edit', mainController.edit );
router.put('/:id', mainController.update );
router.delete('/:id', mainController.destroy );

export {
    router
}

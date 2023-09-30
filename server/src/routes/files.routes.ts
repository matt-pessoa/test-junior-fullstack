import { Router } from 'express';
import FilesController from '../controllers/file.controller';

const router = Router();

const fileController = new FilesController();

router.post('/', fileController.postData);

module.exports = router;

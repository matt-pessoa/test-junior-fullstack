import { Router } from 'express';
import FilesController from '../controllers/file.controller';
import multer from 'multer';

const multerConfig = multer();

const router = Router();

const fileController = new FilesController();

router.post('/', multerConfig.single('file'), fileController.postData);

module.exports = router;

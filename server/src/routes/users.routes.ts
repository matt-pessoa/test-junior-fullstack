import { Router } from 'express';
import UsersController from '../controllers/user.controller';

const router = Router();

const userController = new UsersController();

router.get('/', userController.getData);

module.exports = router;

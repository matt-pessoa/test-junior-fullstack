import { Request, Response } from 'express';
import UsersService from '../services/user.service';

export default class UsersController {
  constructor(private userService = new UsersService()) {}

  getData = async (req: Request, res: Response) => {
    const response = await this.userService.getData();
    return res.status(200).json(response);
  };
}

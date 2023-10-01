import { Request, Response } from 'express';
import UsersService from '../services/user.service';

export default class UsersController {
  constructor(private userService = new UsersService()) {}

  getData = async (req: Request, res: Response) => {
    const { query } = req;

    if (!query.q) {
      const response = await this.userService.getData();
      return res.status(200).json(response);
    } else {
      this.getQueryData(req, res);
    }
  };

  getQueryData = async (req: Request, res: Response) => {
    const query = req.query.q;

    const response = await this.userService.getQueryData(query);
    return res.status(200).json(response);
  };
}

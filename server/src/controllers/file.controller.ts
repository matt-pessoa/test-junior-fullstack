import { Request, Response } from 'express';
import FilesService from '../services/file.service';

export default class FilesController {
  constructor(private fileService = new FilesService()) {}

  postData = async (req: Request, res: Response) => {
    // const response = await this.fileService.postData(req.body);
    console.log(req.file);
    // return res.status(201).json(response);
    res.send();
  };
}

import { Request, Response } from 'express';
import { Readable } from 'stream';
import readLine from 'readline';
import FilesService from '../services/file.service';

export default class FilesController {
  constructor(private fileService = new FilesService()) {}

  postData = async (req: Request, res: Response) => {
    const { file } = req;
    if (file) {
      const { buffer } = file;

      const readableFile = new Readable();
      readableFile.push(buffer);
      readableFile.push(null);

      const dataLine = readLine.createInterface({
        input: readableFile,
      });

      for await (let line of dataLine) {
        console.log(line);
      }

      return res.send();
    }
    // const response = await this.fileService.postData(req.body);
    // return res.status(201).json(response);
  };
}

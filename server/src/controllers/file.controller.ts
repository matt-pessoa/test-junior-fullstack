import { Request, Response } from 'express';
import { Readable } from 'stream';
import readLine from 'readline';
import { InterfaceData } from '../interfaces/dataInterface';
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

      let data: InterfaceData[] = [];

      for await (let line of dataLine) {
        const dataLineSplit = line.split(',');

        data.push({
          name: dataLineSplit[0],
          city: dataLineSplit[1],
          country: dataLineSplit[2],
          favorite_sport: dataLineSplit[3],
        });
      }

      data = data.slice(1); // Remove headers

      const response = await this.fileService.postData(data);
      return res.status(201).json(response);
    }
  };
}

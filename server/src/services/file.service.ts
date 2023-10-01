import File from '../models/file.model';
import { InterfaceData } from '../interfaces/dataInterface';

export default class FilesService {
  constructor() {}

  public async postData(file: InterfaceData | any) {
    const createdData = await File.bulkCreate(file);

    return createdData;
  }
}

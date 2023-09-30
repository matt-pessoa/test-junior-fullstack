import File from '../models/file.model';
import { InterfaceData } from '../interfaces/dataInterface';

export default class FilesService {
  constructor() {}

  public async postData(file: InterfaceData) {
    const createdData = await File.create(file);

    return createdData;
  }
}

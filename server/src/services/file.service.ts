import databaseConnection from '../utils/database';
import File from '../models/file.model';
import { InterfaceData } from '../interfaces/dataInterface';

export default class FilesService {
  constructor() {}

  public async postData(file: InterfaceData) {
    await databaseConnection();
    console.log(file);

    // return data;
  }
}

import databaseConnection from '../utils/database';
import File from '../models/file.model';
import { InterfaceData } from '../interfaces/dataInterface';

export default class UsersService {
  constructor() {}

  public async getData() {
    await databaseConnection();
    const data = await File.find();

    return data;
  }
}

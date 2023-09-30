import File from '../models/file.model';

export default class UsersService {
  constructor() {}

  public async getData() {
    const data = await File.find();

    return data;
  }
}

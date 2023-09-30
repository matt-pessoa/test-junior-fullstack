import UserModel from '../models/file.model';

export default class UsersService {
  constructor(private userModel = new UserModel()) {}

  public async getData() {
    const data = await this.userModel.getData();

    return data;
  }
}

import { dbQuery } from '../utils/database';

export type File = {
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
};

export default class UserModel {
  constructor() {}

  public async getData() {
    const response = await dbQuery(`SELECT * from file`);
    return response;
  }
}

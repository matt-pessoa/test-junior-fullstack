import { Op } from 'sequelize';
import File from '../models/file.model';

export default class UsersService {
  constructor() {}

  public async getData() {
    const data = await File.findAll();

    return data;
  }

  public async getQueryData(query: any) {
    const data = await File.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${query}%`,
            },
          },
          {
            city: {
              [Op.like]: `%${query}%`,
            },
          },
          {
            country: {
              [Op.like]: `%${query}%`,
            },
          },
          {
            favorite_sport: {
              [Op.like]: `%${query}%`,
            },
          },
        ],
      },
    });

    return data;
  }
}

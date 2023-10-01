import UsersService from '../services/user.service';

const userService = new UsersService();

export const dataValidation = async () => {
  const data = await userService.getData();

  console.log(data.length);
  if (data.length > 0) {
    return true;
  }
  return false;
};

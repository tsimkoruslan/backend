import { User } from "../models/User.mode";
import { IUser } from "../types/user.type";

class UserService {
  public async findAll(): Promise<IUser[]> {
    return User.find().select("-password");
  }

  public async create(data: IUser): Promise<IUser> {
    return User.create(data);
  }

  public async findById(id: string): Promise<IUser> {
    return User.findById(id).select("-password");
  }

  // public async updateById(id: string, data: IUser): Promise<IUser> {
  //   return User.findOneAndUpdate(data, id);
  // }
}

export const userService = new UserService();

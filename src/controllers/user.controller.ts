import { NextFunction, Request, Response } from "express";

import { userService } from "../services/user.service";
import { IUser } from "../types/user.type";

class UserController {
  public async findAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser[]>> {
    try {
      const users = await userService.findAll();
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser>> {
    try {
      const createdUser = await userService.create(req.res.locals as IUser);
      return res.status(201).json(createdUser);
    } catch (e) {
      next(e);
    }
  }

  public async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser>> {
    try {
      const user = await userService.findById(req.params.id);
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  // public async updateById(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<Response<IUser>> {
  //   try {
  //     const { id } = req.params;
  //     const { error, value } = UserValidator.update.validate(req.body);
  //     if (error) {
  //       throw new ApiErrors(error.message, 400);
  //     }
  //     const updateUser = await userService.updateById(
  //       { _id: id },
  //       { ...value }
  //       { returnDocument: "after" }
  //     );
  //     return res.status(200).json(updateUser);
  //   } catch (e) {
  //     next(e);
  //   }
  // }
}

export const userController = new UserController();

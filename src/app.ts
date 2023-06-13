import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { configs } from "./configs/config";
import { ApiErrors } from "./errors/api.errors";
import { User } from "./models/User.mode";
import { IUser } from "./types/user.type";
import { UserValidator } from "./validators/user.validator";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;
  return res.status(status).json(error.message);
});

app.listen(configs.PORT, () => {
  mongoose.connect(configs.DB_URL);
  // eslint-disable-next-line no-console
  console.log("Server get up 🌍 ");
});

app.get(
  "/",
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser[]>> => {
    try {
      const users = await User.find().select("-password");
      return res.json(users);
    } catch (e) {
      // eslint-disable-next-line no-console
      next(e);
    }
  }
);

app.get(
  "/:id",
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser>> => {
    try {
      const user = await User.findById(req.params.id).select("-password");
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }
);
app.post(
  "/",
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser>> => {
    try {
      const { error, value } = UserValidator.create.validate(req.body);
      if (error) {
        throw new ApiErrors(error.message, 400);
      }
      const createdUser = await User.create(value);
      return res.status(201).json(createdUser);
    } catch (e) {
      next(e);
    }
  }
);

app.put(
  "/:id",
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser>> => {
    try {
      const { id } = req.params;
      const { error, value } = UserValidator.update.validate(req.body);
      if (error) {
        throw new ApiErrors(error.message, 400);
      }
      const updateUser = await User.findOneAndUpdate(
        { _id: id },
        { ...value },
        { returnDocument: "after" }
      );
      return res.status(200).json(updateUser);
    } catch (e) {
      next(e);
    }
  }
);

import express, { Request, Response } from "express";
import * as mongoose from "mongoose";

import { configs } from "./configs/config";
import { User } from "./models/User.mode";
import { IUser } from "./types/user.type";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(configs.PORT, () => {
  mongoose.connect(configs.DB_URL);
  // eslint-disable-next-line no-console
  console.log("Server get up");
});

app.get(
  "/",
  async (req: Request, res: Response): Promise<Response<IUser[]>> => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }
);

app.post(
  "/post",
  async (req: Request, res: Response): Promise<Response<IUser>> => {
    try {
      const createdUser = await User.create(req.body);
      return res.status(201).json(createdUser);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }
);

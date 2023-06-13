import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { configs } from "./configs/config";
import { userRouters } from "./routers/user.router";

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

app.use("/users", userRouters);

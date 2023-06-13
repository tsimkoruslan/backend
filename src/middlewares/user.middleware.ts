import { NextFunction, Request, Response } from "express";

import { ApiErrors } from "../errors/api.errors";
import { UserValidator } from "../validators/user.validator";

class UserMiddleware {
  public isCreateValid(req: Request, res: Response, next: NextFunction) {
    try {
      const { error, value } = UserValidator.create.validate(req.body);
      if (error) {
        throw new ApiErrors(error.message, 400);
      }
      req.res.locals = value;
      next();
    } catch (e) {
      console.log(e);
    }
  }
}
export const userMiddleware = new UserMiddleware();

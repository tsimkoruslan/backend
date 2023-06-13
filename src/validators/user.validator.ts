import Joi from "joi";

import { regexConstants } from "../constans/regex.constants";
import { EGenres } from "../enums/user.enum";

export class UserValidator {
  static firstName = Joi.string().trim().min(3).max(30);
  static age = Joi.number().min(1).max(199);
  static gender = Joi.valid(EGenres);
  static email = Joi.string().lowercase().regex(regexConstants.EMAIL);
  static password = Joi.string().min(1).trim().required();
  static create = Joi.object({
    name: this.firstName.required(),
    age: this.age.required(),
    gender: this.gender,
    email: this.email.required(),
    password: this.password.required(),
  });
  static update = Joi.object({
    name: this.firstName,
    age: this.age,
    gender: this.gender,
  });
}

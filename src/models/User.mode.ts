import { model, Schema } from "mongoose";

import { EGenres } from "../enums/user.enum";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
      min: [1, "Min 1 age"],
      max: [199, "Max 199 age"],
    },
    gender: {
      type: String,
      enum: EGenres,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const User = model("users", userSchema);

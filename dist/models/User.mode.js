"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_enum_1 = require("../enums/user.enum");
const userSchema = new mongoose_1.Schema({
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
        enum: user_enum_1.EGenres,
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
}, {
    versionKey: false,
    timestamps: true,
});
exports.User = (0, mongoose_1.model)("users", userSchema);

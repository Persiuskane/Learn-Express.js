import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
      minLength: 2,
      maxLength: 10,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 120,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxLength: 50,
    },
  },

  {
    timestamps: true,
  },
);

export const user = mongoose.model("User", userSchema);

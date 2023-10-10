/** @format */
import bcrypt from "bcrypt";
import UserSchema from "../../../db/schema/user.js";
import { ErrorHandler } from "../../../helpers/errors.js";

export default async (root, { user }, { token }) => {
  if (!token) {
    return ErrorHandler("Not authorize", 401);
  }

  // -----Password hash-----//
  const password = user.password
    ? { password: await bcrypt.hash(user.password, 10) }
    : undefined;

  // -----Update User -----//
  const res = await UserSchema.findByIdAndUpdate(token.id, {
    $set: { ...user, ...password },
  }).catch((err) => ErrorHandler("User not updated"));

  return res;
};

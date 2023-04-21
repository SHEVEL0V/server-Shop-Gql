/** @format */
import { ErrorHandler } from "./errors.js";

export const isAuthAdmin = (context) => {
  const role = context?.token?.role;

  if (role && role === "admin") return;

  throw ErrorHandler("Not authorized", 401);
};

/** @format */
import OrderSchema from "../../../db/schema/orders.js";
import { ErrorHandler } from "../../../helpers/errors.js";

export default async (root, args, context) => {
  const { token } = context;
  const { add } = args;

  if (!token) {
    return ErrorHandler("Not authorized ", 401);
  }

  //---------add order to database------------------------//
  const newOrder = new OrderSchema({ orders: add, user: id });

  await newOrder.save();

  return newOrder;
};

/** @format */
import OrderSchema from "../../../db/schema/orders.js";
import { isAuthAdmin } from "../../../helpers/isAuth.js";

export default async (root, args, context) => {
  const { id, role } = context.token;
  const { add } = args;

  isAuthAdmin(context);

  //---------add order to database------------------------//
  const newOrder = new OrderSchema({ orders: add, user: id });

  await newOrder.save();

  return newOrder;
};

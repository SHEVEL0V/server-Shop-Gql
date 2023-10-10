/** @format */

import OrderSchema from "../../../db/schema/orders.js";
import { isAuthAdmin } from "../../../helpers/isAuthAdmin.js";

export default async (root, args, context) => {
  const { _id, status } = args?.update;

  isAuthAdmin(context);

  //------update  order status------//
  return await OrderSchema.findByIdAndUpdate(_id, {
    $set: { status },
  }).populate("user");
};

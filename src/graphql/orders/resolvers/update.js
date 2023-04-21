/** @format */

import OrderSchema from "../../../db/schema/orders.js";
import { isAuthAdmin } from "../../../helpers/isAuth.js";

export default async (root, args, context) => {
  const { status, ids } = args?.update;

  isAuthAdmin(context);

  //------update  order status------//
  const res = await Promise.all(
    ids.map(
      async (id) =>
        await OrderSchema.findByIdAndUpdate(id, { $set: { status } }).populate(
          "user"
        )
    )
  );

  return res;
};

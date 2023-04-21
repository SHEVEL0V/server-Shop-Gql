/** @format */
import OrderSchema from "../../../db/schema/orders.js";
import { isAuthAdmin } from "../../../helpers/isAuth.js";

export default async (root, { query }, context) => {
  const status = query?.status;
  const date = query?.date;

  isAuthAdmin(context);

  //-----------optional  params status-----------//
  const searchStatus = status ? { status } : undefined;
  //-----------optional  params date------------//
  const DATE = date?.split("-")?.map((e) => Number(e));
  const searchDate = DATE
    ? {
        createdAt: {
          $gte: new Date(DATE[0], DATE[1] - 1, DATE[2]),
          $lte: new Date(DATE[0], DATE[1] - 1, DATE[2] + 1),
        },
      }
    : undefined;
  //-----------find all orders----------------------//
  const result = await OrderSchema.find({
    ...searchStatus,
    ...searchDate,
  }).populate("user");

  const count = result.length;

  return { result, count };
};
